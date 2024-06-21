import Header from "@/components/Header";

import styles from "./page.module.scss";
import Link from "next/link";
import Posts from "@/components/Posts";
import MainLayout from "@/components/Layout/MainLayout";
import Image from "next/image";

export default async function Page() {
  return (
    <MainLayout>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi! I&apos;m <strong className={styles.name}>Kota Enokida</strong>,
          this is my blog where I share a slice of my life as a curious 24yo
          navigating this huge planet
          <span className={styles.worldContainer}>
            {". "}
            <Image
              src="/world.png"
              alt=""
              width={32}
              height={32}
              className={styles.world}
            />
          </span>
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
