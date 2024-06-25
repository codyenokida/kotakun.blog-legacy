"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import ThoughtsIcon from "@/public/thoughts.svg";
import ExitIcon from "@/public/exit.svg";

import {
  getCommentsFromId,
  migrateComments,
  postComment,
} from "@/lib/firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";

import styles from "./Comments.module.scss";
import TextInput from "./TextInput";
import TextArea from "./TextArea";

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
      <h2>
        Leave any thoughts or comments here!{" "}
        <ThoughtsIcon className={styles.icon} />
      </h2>
      {comments.length === 0 && <p>No comments, yet... chime in!</p>}
      {comments.length !== 0 && renderComments()}
      <TextInput value={author} setValue={setAuthor} labelText="Name" />
      <TextArea value={content} setValue={setContent} labelText="Content" />
      <button
        className={styles.postButton}
        onClick={handlePostClick}
        disabled={loading || !(author && content)}
      >
        Post!
      </button>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
