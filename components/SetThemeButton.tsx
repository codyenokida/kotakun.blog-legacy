"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";

import Moon from "@/public/moon.svg";
import Sun from "@/public/sun.svg";

import styles from "./SetThemeButton.module.scss";

const SetThemeButton = ({ style }: any) => {
  const [theme, setTheme] = useState(global.window?.__theme || "light");

  const isDark = theme === "dark";

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <button className={styles.button} style={style} onClick={toggleTheme}>
      {isDark ? (
        <Moon className={classNames(styles.svg, styles.dark)} />
      ) : (
        <Sun className={classNames(styles.svg, styles.light)} />
      )}
    </button>
  );
};

export default SetThemeButton;
