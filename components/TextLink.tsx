import Link from "next/link";
import styles from "./TextLink.module.scss";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function TextLink({ href, children }: TextLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}
