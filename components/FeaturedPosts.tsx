import styles from "./FeaturedPosts.module.scss";
import Link from "next/link";
import { postList } from "@/utils/const";
import HouseIcon from "@/public/house.svg";
import VietnamIcon from "@/public/vietnam.svg";
import ThailandIcon from "@/public/thailand.svg";
import FireworksIcon from "@/public/fireworks.svg";

import NewIcon from "@/public/new.svg";
import Image from "next/image";
import DynamicBlurImage from "./DynamicBlurImage";

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
  newPost?: boolean;
  src: string;
  alt: string;
};

function FeaturedPost({ post, newPost = false, src, alt }: FeaturedPostProps) {
  return (
    <Link href={`/post/${post.id}`} className={styles.featured}>
      <div className={styles.imageContainer}>
        <DynamicBlurImage
          src={src}
          alt={alt}
          width={1200}
          height={1200}
          className={styles.image}
        />
      </div>
      <div className={styles.iconContainer}>
        <h3>{post.title}</h3>
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
        <FeaturedPost
          post={newPost}
          newPost
          src="/posts/living-close-to-friends/mumu.jpeg"
          alt="Mumu the cute dog cover photo"
        />
        <FeaturedPost
          post={featurePost1}
          src="/posts/vietnam-one/ninh-binh.jpeg"
          alt="Ninh Binh Vietnam cover photo"
        />
        <FeaturedPost
          post={featurePost3}
          src="/posts/what-comes-next/new-years-resolution.jpeg"
          alt="Ninh Binh Vietnam cover photo"
        />
      </div>
    </>
  );
}
