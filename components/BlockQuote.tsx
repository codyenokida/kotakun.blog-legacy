import classNames from "classnames";
import styles from "./BlockQuote.module.scss";

interface BlockQuoteProps {
  type: "danger" | "neutral";
  children: React.ReactNode;
}

export default function BlockQuote({
  type = "neutral",
  children,
}: BlockQuoteProps) {
  return (
    <blockquote
      className={classNames(styles.blockquote, {
        [styles.neutral]: type === "neutral",
        [styles.danger]: type === "danger",
      })}
    >
      <div className={styles.line} />
      {children}
    </blockquote>
  );
}
