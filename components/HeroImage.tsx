import Image from "next/image";

import styles from "./HeroImage.module.scss";
import DynamicBlurImage from "./DynamicBlurImage";

type HeroImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function HeroImage({ src, alt, caption }: HeroImageProps) {
  return (
    <div>
      <DynamicBlurImage
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
