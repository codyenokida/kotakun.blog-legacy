import Image from "next/image";
import classNames from "classnames";

import styles from "./ImageFormatter.module.scss";
import DynamicBlurImage from "./DynamicBlurImage";

type ImageFormatterProps = {
  imageSources: ImageMeta[];
};

// It's really smart <.<

export default function ImageFormatter({
  imageSources = [],
}: ImageFormatterProps) {
  const length = imageSources.length;

  /**
   * length 2 is okay!
   *
   * length 3 we reformat depending on type
   *
   *  [     ] | [     ]
   *  [     ] | [     ]
   *  [     ] |  - - -
   *  [     ] | [     ]
   *  [     ] | [     ]
   */

  return (
    <div className={styles.container}>
      {imageSources.map((imageSource) => (
        <div
          className={classNames(styles.imageWrapper, {
            [styles.length_1]: length === 1,
            [styles.length_2]: length === 2,
            [styles.length_3]: length === 3,
            [styles.portrait]:
              !imageSource.type || imageSource.type === "portrait",
            [styles.landscape]: imageSource.type === "landscape",
          })}
          key={imageSource.alt}
        >
          <DynamicBlurImage
            src={imageSource.src}
            alt={imageSource.alt}
            width={1200}
            height={1200}
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            {imageSource.caption}
          </figcaption>
        </div>
      ))}
    </div>
  );
}
