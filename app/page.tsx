import Header from "@/components/Header";

import { getBlogPostPreview } from "@/lib/firebase/firestore";

import styles from "./page.module.css";
import Link from "next/link";
import Posts from "@/components/Posts";

export default async function Page() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello World! My name is <strong>Kota Cody Enokida</strong>, this is my
          blog where I share a slice of my life as a curious 24yo navigating
          this huge world.
          <br />
          <br />
          If you&apos;re curious, you can find more{" "}
          <Link href="/about" className={styles.textLink}>
            about me
          </Link>
          , what I&apos;m doing <Link href="/now">now</Link>, and other{" "}
          <Link href="/projects">fun things</Link> I&apos;ve made on the web.
        </h1>
        <div className={styles.margin} />
        <Posts />
      </div>
    </main>
  );
}
