import styles from "./FeaturedPosts.module.scss";
import Link from "next/link";
import { postList } from "@/utils/const";
import HouseIcon from "@/public/house.svg";
import VietnamIcon from "@/public/vietnam.svg";
import ThailandIcon from "@/public/thailand.svg";
import FireworksIcon from "@/public/fireworks.svg";

import NewIcon from "@/public/new.svg";

function formatDate(date: Date) {
  const dateFormatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
  }).format(date);
  return dateFormatted;
}

type FeaturedPostProps = {
  post: {
    id: string;
    title: string;
    description: string;
    datePosted: Date;
  };
  iconRef: React.ReactNode;
  newPost?: boolean;
};

function FeaturedPost({ post, iconRef, newPost = false }: FeaturedPostProps) {
  return (
    <Link href={`/post/${post.id}`} className={styles.featured}>
      <div className={styles.iconContainer}>
        <h3>{post.title}</h3>
        {iconRef}
      </div>
      <div className={styles.info}>
        <p>{post.description}</p>
      </div>
      {newPost && (
        <div className={styles.new}>
          <NewIcon />
        </div>
      )}
    </Link>
  );
}

export default function FeaturedPosts() {
  const newPost = postList[2024][0];
  const featurePost1 = postList[2024][8]; // Vietnam 1
  const featurePost2 = postList[2024][3]; // Thailand (Finale)
  const featurePost3 = postList[2023][0]; // Thailand (Finale)

  return (
    <>
      <div className={styles.container}>
        <FeaturedPost post={newPost} iconRef={<HouseIcon />} newPost />
        <FeaturedPost post={featurePost1} iconRef={<VietnamIcon />} />
        <FeaturedPost post={featurePost2} iconRef={<ThailandIcon />} />
        <FeaturedPost post={featurePost3} iconRef={<FireworksIcon />} />
      </div>
    </>
  );
}
