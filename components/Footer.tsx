import Link from "next/link";

import { currentLocation } from "@/utils/const";

import CompassIcon from "@/public/compass.svg";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <div className={styles.column}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            {/* <Link href="/design">Design</Link> */}
          </div>
          <div className={styles.column}>
            <Link href="/projects">Portfolio</Link>
            <Link href="/subscribe">Subscribe</Link>
          </div>
          <div className={styles.column}>
            <Link href="https://github.com/codyenokida">Github</Link>
            <Link href="https://x.com/hammockman3000">Twitter</Link>
          </div>
        </div>
        <div className={styles.info}>
          <span>
            Kota Cody Enokida -{" "}
            <Link href="/now" className={styles.now}>
              {currentLocation} <CompassIcon />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
