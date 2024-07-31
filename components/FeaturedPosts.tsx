import Link from "next/link";
import Image from "next/image";

import { postList } from "@/utils/const";

import NewIcon from "@/public/new.svg";

import styles from "./FeaturedPosts.module.scss";
import DynamicBlurImage from "@/components/DynamicBlurImage";

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
  const featurePost1 = postList[2024][9]; // Vietnam 1
  const featurePost2 = postList[2024][1]; // Living Close to Friends

  return (
    <>
      <div className={styles.container}>
        <FeaturedPost
          post={newPost}
          newPost
          src="/posts/games-and-life/celeste.jpg"
          alt="Celeste game cover screenshot"
        />
        <FeaturedPost
          post={featurePost2}
          src="/posts/living-close-to-friends/mumu.jpeg"
          alt="Mumu the cute dog cover photo"
        />
        <FeaturedPost
          post={featurePost1}
          src="/posts/vietnam-one/ninh-binh.jpeg"
          alt="Ninh Binh Vietnam cover photo"
        />
      </div>
    </>
  );
}
