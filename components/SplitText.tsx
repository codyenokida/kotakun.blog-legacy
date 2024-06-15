import React from "react";

import styles from "./SplitText.module.css";

const SplitText = ({ children, delay = 20 }: any) => {
  return (
    <span aria-label={children} role="heading" aria-level={2}>
      {children.split("").map(function (char: string, index: number) {
        let style = { animationDelay: 0.1 + index / delay + "s" };
        return (
          <span
            aria-hidden="true"
            key={index}
            style={style}
            className={styles.span}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;
