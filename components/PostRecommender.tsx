"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { flattenedPostList } from "@/utils/const";

import styles from "./PostRecommender.module.scss";

export default function PostRecommender() {
  /**
   * Pathname states
   */
  const pathname = usePathname();
  const [pathValue, setPathValue] = useState("");

  /**
   * Post states
   */
  const [prevPostIndex, setPrevPostIndex] = useState<number>(-1);
  const [nextPostIndex, setNextPostIndex] = useState<number>(-1);

  useEffect(() => {
    // Ensure the code runs only on the client side
    if (typeof window !== "undefined") {
      // Extract the value from the pathname
      const value = pathname.split("/").pop();
      setPathValue(value || "");
    }
  }, [pathname]);

  useEffect(() => {
    // Get the index of the current post
    const index = flattenedPostList.findIndex((post) => post.id === pathValue);
    if (index === -1) return;
    setNextPostIndex(index - 1);
    setPrevPostIndex(index + 1);
  }, [pathValue]);

  const prevPostUrl = flattenedPostList[prevPostIndex]?.id;
  const prevPostTitle = flattenedPostList[prevPostIndex]?.title;
  const nextPostUrl = flattenedPostList[nextPostIndex]?.id;
  const nextPostTitle = flattenedPostList[nextPostIndex]?.title;

  return (
    <div className={styles.container}>
      {prevPostUrl ? (
        <Link href={prevPostUrl} className={styles.prevPost}>
          <div>
            <span className={styles.static}>⇐ Previous Post</span>
            <span className={styles.title}>{prevPostTitle}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {nextPostUrl ? (
        <Link href={nextPostUrl} className={styles.nextPost}>
          <div>
            <span className={styles.static}>Next Post ⇒</span>
            <span className={styles.title}>{nextPostTitle}</span>
          </div>
        </Link>
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.static}>Next Post ⇒</span>
          <span className={styles.title}>Coming soon!</span>
        </div>
      )}
    </div>
  );
}
