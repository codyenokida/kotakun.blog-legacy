import Image from "next/image";

import styles from "./HeroImage.module.scss";

type HeroImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function HeroImage({ src, alt, caption }: HeroImageProps) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1200}
        className={styles.image}
      />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </div>
  );
}
