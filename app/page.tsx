import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";

import Posts from "@/components/Posts";
import MainLayout from "@/components/Layout/MainLayout";
import TextLink from "@/components/TextLink";

import styles from "./page.module.scss";

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
          You can find more <TextLink href="/about">about me</TextLink>, what
          I&apos;m doing <TextLink href="/now">now</TextLink>, and other{" "}
          <TextLink href="/projects">fun things</TextLink> I&apos;ve made on the
          web.
        </h1>
        <div className={styles.margin} />
        <Posts />
      </div>
      <Analytics />
    </MainLayout>
  );
}
