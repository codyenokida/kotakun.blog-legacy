"use client";

import styles from "./PostCommentButton.module.scss";
import { motion } from "framer-motion";

type PostCommentButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export default function PostCommentButton({
  onClick,
  disabled,
}: PostCommentButtonProps) {
  return (
    <motion.button
      className={styles.button}
        onClick={onClick}
      disabled={disabled}
    >
      Comment
    </motion.button>
  );
}
