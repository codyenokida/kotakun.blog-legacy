"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import HandWaveIcon from "@/public/hand-waving.svg";
import ExitIcon from "@/public/exit.svg";

import { getCommentsFromId, postComment } from "@/lib/firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";

import styles from "./Comments.module.scss";

export default function Comments() {
  const commentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /**
   * Pathname states
   */
  const pathname = usePathname();
  const [pathValue, setPathValue] = useState("");

  /**
   * Utility states
   */
  const [commentsOpen, setCommentsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  /**
   * Comment state
   */
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentsLoading, setCommentsLoading] = useState<boolean>(false);
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {}, []);

  useEffect(() => {
    // Ensure the code runs only on the client side
    if (typeof window !== "undefined") {
      // Extract the value from the pathname
      const value = pathname.split("/").pop();
      setPathValue(value || "");
    }
  }, [pathname]);

  /**
   * Load comments from firebase
   */
  useEffect(() => {
    const getDocument = async () => {
      try {
        setCommentsLoading(true);
        const commentsFromDB = (await getCommentsFromId(pathValue)) || [];
        setComments(commentsFromDB);
        setCommentsLoading(false);
      } catch (e) {
        console.error(e);
      } finally {
        setCommentsLoading(false);
      }
    };

    if (pathValue) {
      getDocument();
    }
  }, [pathValue]);

  useEffect(() => {
    if (pathValue) {
      const unsub = onSnapshot(doc(db, "comments", pathValue), (doc) => {
        const newComments = (doc.data()?.comments as Comment[]) || [];
        setComments(newComments);
      });

      return () => unsub();
    }
  }, [pathValue]);

  /**
   * Check if mobile
   */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /**
   * Re-style html and body so they are not scrollable
   */
  useEffect(() => {
    if (commentsOpen && isMobile) {
      const html = document.querySelector("html");

      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      if (html && html instanceof HTMLElement) {
        html.style.overflow = "hidden";
        html.style.touchAction = "none";
      }

      // Cleanup function to remove the style when component unmounts
      return () => {
        document.body.style.overflow = "auto";
        document.body.style.touchAction = "auto";

        if (html && html instanceof HTMLElement) {
          html.style.overflow = "auto";
          html.style.touchAction = "auto";
        }
      };
    }
  }, [commentsOpen, isMobile]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        commentRef.current &&
        !commentRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setCommentsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setCommentsOpen]);

  const handlePostClick = async () => {
    try {
      setLoading(true);
      if (pathValue) {
        await postComment(pathValue, author, content);
        setAuthor("");
        setContent("");
        setError("");
        setLoading(false);
      }
    } catch (e: any) {
      console.error(e);
      setError(e);
      setLoading(false);
    }
  };
  /**
   * Helper function to render comments
   */
  const renderComments = () => {
    return (
      <div className={styles.commentContainer}>
        {comments.map((comment, i) => {
          const formattedDatePosted = comment.datePosted
            ? comment.datePosted?.toDate()?.toLocaleDateString()
            : "";
          return (
            <article
              className={styles.commentText}
              key={`${comment.author} ${comment.datePosted} ${i}`}
            >
              <h4>
                {comment.author} <span className={styles.green}>•</span>{" "}
                <span className={styles.datePosted}>{formattedDatePosted}</span>
              </h4>
              <p className={styles.commentContent}>{comment.content}</p>
            </article>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <motion.button
        ref={buttonRef}
        className={styles.button}
        initial={{ y: 30, opacity: 0, rotate: -45 }}
        animate={{ y: 0, opacity: 1, rotate: [-20, 0] }}
        transition={{ ease: "circOut", duration: 0.45, delay: 0.5 }}
        onClick={() => setCommentsOpen(!commentsOpen)}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
          transition={{ ease: "easeInOut", duration: 0.45, delay: 1 }}
          className={styles.icon}
        >
          {commentsOpen ? (
            <ExitIcon className={styles.exit} />
          ) : (
            <HandWaveIcon />
          )}
        </motion.div>
      </motion.button>
      <motion.div
        ref={commentRef}
        initial={{
          right: 0,
          bottom: 64,
          opacity: 0,
          display: "none",
          height: 38,
        }}
        animate={
          commentsOpen
            ? {
                right: 16,
                bottom: 64,
                opacity: 1,
                display: "flex",
                height: [38, isMobile ? 480 : 600],
              }
            : {
                right: 16,
                bottom: 64,
                opacity: 0,
                display: "none",
                height: [isMobile ? 480 : 600, 38],
                width: 0,
              }
        }
        transition={{
          ease: "backInOut",
          duration: 0.6,
          damping: 10,
          spring: 1,
        }}
        className={styles.comments}
      >
        {commentsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              commentsOpen
                ? {
                    opacity: 1,
                    y: [8, 0],
                  }
                : {
                    opacity: 0,
                  }
            }
            transition={{
              ease: "backInOut",
              duration: 0.4,
              delay: 0.5,
            }}
            className={styles.content}
          >
            <h2>Leave any thoughts or comments here!</h2>
            {comments.length === 0 && <p>No comments, yet... chime in!</p>}
            {comments.length !== 0 && renderComments()}
            <div className={styles.inputContainer}>
              <label>Name</label>
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className={styles.nameInput}
              />
            </div>
            <div className={styles.inputContainer}>
              <label>Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className={styles.contentInput}
              />
            </div>
            <button
              className={styles.postButton}
              onClick={handlePostClick}
              disabled={loading}
            >
              {loading ? "Loading..." : "Post!"}
            </button>
            {error && <span className={styles.error}>{error}</span>}
            <br />
          </motion.div>
        )}
      </motion.div>
      <AnimatePresence>
        {isMobile && commentsOpen && (
          <motion.div
            animate={{
              opacity: [0, 1],
            }}
            transition={{
              ease: "backInOut",
              duration: 0.6,
              damping: 10,
              spring: 1,
            }}
            className={styles.modal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
