"use client";

import { motion } from "framer-motion";

import TextLink from "@/components/TextLink";

import styles from "./HeroTitle.module.scss";

export default function HeroTitle() {
  return (
    <motion.h1
      className={styles.title}
      initial={{
        opacity: 0,
        translateY: 50,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      My name is <strong className={styles.name}>Kota (Cody) Enokida</strong>,
      this is my blog where I share a slice of my life as a 24yo navigating this
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
    </motion.h1>
  );
}
