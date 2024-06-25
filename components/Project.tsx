import { FaArrowUp } from "react-icons/fa";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import styles from "./Project.module.scss";

type ProjectProps = {
  src: string;
  bgSrc: string;
  alt: string;
  projectTitle: string;
  role: string;
  description: string;
  technologies: string;
  url: string;
  githubUrl: string;
};

export default function Project({
  src,
  bgSrc,
  alt,
  projectTitle,
  role,
  description,
  technologies,
  url,
  githubUrl,
}: ProjectProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={bgSrc}
          alt={`background image for ${projectTitle}`}
          width={1200}
          height={1200}
          className={styles.bgImage}
        />
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1200}
          className={styles.fgImage}
        />
      </div>
      <div className={styles.content}>
        <h2>
          {projectTitle} <span className={styles.green}>•</span>{" "}
          <span>{role}</span>
        </h2>
        <p>
          <strong>Technologies: </strong>
          {technologies}
        </p>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link href={url} className={styles.button}>
            <div className={styles.button_style}>
              Website <FaArrowUp />
            </div>
          </Link>
          {githubUrl && (
            <Link href={githubUrl} className={styles.button}>
              <div className={classNames(styles.button_style, "button")}>
                Github <FaArrowUp />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
