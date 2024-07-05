import styles from "./FeaturedPosts.module.scss";
import Link from "next/link";
import { postList } from "@/utils/const";
import HouseIcon from "@/public/house.svg";
import VietnamIcon from "@/public/vietnam.svg";

function formatDate(date: Date) {
  const dateFormatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
  }).format(date);
  return dateFormatted;
}

export default function FeaturedPosts() {
  const newPost = postList[2024][0];
  const featurePost = postList[2024][8]; // Vietnam 1

  return (
    <>
      <div className={styles.container}>
        <Link href={`/post/${newPost.id}`} className={styles.featured}>
          <div className={styles.iconContainer}>
            <HouseIcon />
            <h3>{newPost.title}</h3>
          </div>
          <div className={styles.info}>
            <p>{newPost.description}</p>
          </div>
        </Link>
        <Link href={`/post/${featurePost.id}`} className={styles.featured}>
          <div className={styles.iconContainer}>
            <VietnamIcon />
            <h3>{featurePost.title}</h3>
          </div>
          <div className={styles.info}>
            <p>{featurePost.description}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
