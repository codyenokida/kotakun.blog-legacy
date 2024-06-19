import Header from "@/components/Header";

import styles from "./page.module.scss";
import Link from "next/link";
import Posts from "@/components/Posts";
import MainLayout from "@/components/Layout/MainLayout";

export default async function Page() {
  return (
    <MainLayout>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello World! My name is{" "}
          <strong className={styles.name}>Kota (Cody) Enokida</strong>, this is
          my blog where I share a slice of my life as a curious 24yo navigating
          this huge planet.
          <br />
          <br />
          You can find more{" "}
          <Link href="/about" className={styles.textLink}>
            about me
          </Link>
          , what I&apos;m doing <Link href="/now">now</Link>, and other{" "}
          <Link href="/projects">fun things</Link> I&apos;ve made on the web.
        </h1>
        <div className={styles.margin} />
        <Posts />
      </div>
    </MainLayout>
  );
}
