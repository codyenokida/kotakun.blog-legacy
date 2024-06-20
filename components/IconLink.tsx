import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

import styles from "./IconLink.module.scss";

type IconLinkProps = {
  href: string;
  text: string;
};

export default function IconLink({ href, text }: IconLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      <FaChevronLeft />
      <span>{text}</span>
    </Link>
  );
}
