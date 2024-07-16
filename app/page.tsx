import { Analytics } from "@vercel/analytics/react";

import Posts from "@/components/Posts";
import MainLayout from "@/components/Layout/MainLayout";
import TextLink from "@/components/TextLink";

import EarthIcon from "@/public/earth.svg";
import Signature from "@/public/hero/signature.svg";

import styles from "./page.module.scss";
import FeaturedPosts from "@/components/FeaturedPosts";
import YellowStar from "@/components/svg/YellowStar";

export default async function Page() {
  return (
    <MainLayout>
      <div className={styles.content}>
        <h1 className={styles.title}>
          My name is{" "}
          <strong className={styles.name}>Kota (Cody) Enokida</strong>, this is
          my blog where I share a slice of my life as a 24yo navigating this
          strange, curious world.
          <br />
          <br />
          You can find more <TextLink href="/about">about me</TextLink>, what
          I&apos;m doing <TextLink href="/now">now</TextLink>, and other{" "}
          <TextLink href="/projects">fun things</TextLink> I&apos;ve made on the
          web.
          <br />
          <br />
          Thank you for taking the time to view my corner of the Internet!
        </h1>
        <div className={styles.signature}>
          <Signature />
        </div>
        <div className={styles.divider} />
        <div className={styles.margin} />
        <div>
          <div style={{ width: "100%", display: "flex" }}>
            <h2 className={styles.subtitle}>Kota-kun Recommends</h2>
            <div>
              <YellowStar
                width={12}
                height={12}
                initialAnimate={{
                  x: 5,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.15,
                    ease: "backInOut",
                  },
                }}
                initialPosition={{
                  x: 10,
                  y: 10,
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  rotate: [0, 40, 80, 150, 220, 360],
                  scale: [0.9, 1.1, 0.9, 1.1, 0.9],
                  transition: {
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    repeatDelay: 1,
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.divider} />
        </div>
        <FeaturedPosts />
        <div className={styles.margin2} />
        <div>
          <h2 className={styles.subtitle}>All Posts</h2>
          <div className={styles.divider} />
        </div>

        <Posts />
      </div>
      <Analytics />
    </MainLayout>
  );
}
