import Link from "next/link";
import Image from "next/image";

import { postList } from "@/utils/const";

import NewIcon from "@/public/new.svg";

import styles from "./FeaturedPosts.module.scss";
import DynamicBlurImage from "@/components/DynamicBlurImage";
import { getPostById } from "@/utils/helper";

type FeaturedPostProps = {
  post: {
    id: string;
    title: string;
    description: string;
    datePosted: Date;
  } | null;
  newPost?: boolean;
  src: string;
  alt: string;
};

function FeaturedPost({ post, newPost = false, src, alt }: FeaturedPostProps) {
  if (!post) return null;

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
  const newPost = getPostById(postList, "latest");
  const featurePost1 = getPostById(postList, "vietnam-three"); // Vietnam (Part 3)
  const featurePost2 = getPostById(postList, "living-close-to-friends"); // Living Close to Friends
  const featurePost3 = getPostById(postList, "reflection-of-bay-area"); // A Reflection of Bay Area

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
          src="/posts/vietnam-three/film-bikepacking-pics.jpeg"
          alt="Ninh Binh Vietnam cover photo"
        />
        <FeaturedPost
          post={featurePost3}
          src="/posts/reflection-of-bay-area/san-francisco.jpeg"
          alt="Ninh Binh Vietnam cover photo"
        />
      </div>
    </>
  );
}
