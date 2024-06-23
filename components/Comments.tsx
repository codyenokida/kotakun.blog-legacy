"use client";

import { motion } from "framer-motion";

import HandWaveIcon from "@/public/hand-waving.svg";
import ExitIcon from "@/public/exit.svg";

import styles from "./Comments.module.scss";
import { useState } from "react";

export default function Comments() {
  const [commentsOpen, setCommentsOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <motion.button
        className={styles.button}
        initial={{ y: 30, opacity: 0, rotate: -45 }}
        animate={{ y: 0, opacity: 1, rotate: [-20, 0] }}
        transition={{ ease: "circOut", duration: 0.45, delay: 0.5 }}
        onClick={() => setCommentsOpen(!commentsOpen)}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
          transition={{ ease: "easeInOut", duration: 0.45, delay: 1 }}
          className={styles.icon}
        >
          {commentsOpen ? (
            <ExitIcon className={styles.exit} />
          ) : (
            <HandWaveIcon />
          )}
        </motion.div>
      </motion.button>
      <motion.div
        initial={{ right: 0, bottom: -1000, opacity: 0, display: "none" }}
        animate={
          commentsOpen
            ? {
                right: 16,
                bottom: 64,
                opacity: 1,
                display: "flex",
                rotate: [-45, -15, 0],
              }
            : { right: 16, bottom: -1000, opacity: 0 }
        }
        transition={{ ease: "easeInOut", duration: 0.45 }}
        className={styles.comments}
      >
        Feel free to leave any thoughts!
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        hi
      </motion.div>
    </div>
  );
}
