import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.linkWrapper}>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/design">Design</Link>
          </div>
          <div className={styles.links}>
            <Link href="/projects">Portfolio</Link>
            <Link href="/subscribe">Subscribe</Link>
          </div>
        </div>
        <div className={styles.ender}>
          <span>
            Kota Cody Enokida - <Link href="/now">Irvine, CA</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
