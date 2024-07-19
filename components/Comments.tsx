"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";
import PostCommentButton from "@/components/Buttons/PostCommentButton";
import PinkMatter from "@/components/svg/PinkMatter";
import GreenMatter from "@/components/svg/GreenMatter";

import { getCommentsFromId, postComment } from "@/lib/firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";

import styles from "./Comments.module.scss";

export default function Comments() {
  /**
   * Pathname states
   */
  const pathname = usePathname();
  const [pathValue, setPathValue] = useState("");

  /**
   * Comment state
   */
  const [comments, setComments] = useState<Comment[]>([]);
  const [_commentsLoading, setCommentsLoading] = useState<boolean>(false);
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
        Leave any thoughts or comments{" "}
        <span>
          here!
          <PinkMatter
            width={18}
            height={18}
            initialAnimate={{
              x: 58,
              y: -6,
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "backInOut",
                delay: 0.8,
              },
            }}
            initialPosition={{
              x: 58,
              y: 0,
              scale: 0.2,
              opacity: 0,
            }}
            animate={{
              rotate: [0, -30, 0],
              scale: [0.9, 0.85, 0.9],
              x: [0, 2, 0],
              y: [0, 2, 0],
              transition: {
                duration: 8,
                repeat: Infinity,
                // repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
          <GreenMatter
            width={16}
            height={16}
            initialAnimate={{
              x: 72,
              y: 6,
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "backInOut",
                delay: 0.8,
              },
            }}
            initialPosition={{
              x: 72,
              y: 8,
              scale: 0.2,
              opacity: 0,
            }}
            animate={{
              rotate: [0, -30, 0],
              scale: [0.9, 0.85, 0.9],
              x: [0, 2, 0],
              y: [0, 2, 0],
              transition: {
                duration: 8,
                repeat: Infinity,
                // repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        </span>
      </h2>
      {comments.length === 0 && <p>No comments, yet... chime in!</p>}
      {comments.length !== 0 && renderComments()}
      <TextInput value={author} setValue={setAuthor} labelText="Name" />
      <TextArea value={content} setValue={setContent} labelText="Comment" />
      <PostCommentButton
        onClick={handlePostClick}
        disabled={loading || !(author && content)}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
