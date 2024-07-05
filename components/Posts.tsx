import styles from "./Posts.module.scss";
import Link from "next/link";
import { postList } from "@/utils/const";

function formatDate(date: Date) {
  const dateFormatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
  }).format(date);
  return dateFormatted;
}

export default function Posts() {
  return (
    <div className={styles.container}>
      {Object.entries(postList)
        .toSorted()
        .reverse()
        .map(([year, posts]) => (
          <div className={styles.postContainer} key={year}>
            <h2 className={styles.yearTitle}>{year}</h2>
            {posts.map((post) => (
              <Link
                href={`/post/${post.id}`}
                className={styles.post}
                key={post.title}
              >
                <div className={styles.date}>
                  <span>{formatDate(post.datePosted)}</span>
                </div>
                <div className={styles.content}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
