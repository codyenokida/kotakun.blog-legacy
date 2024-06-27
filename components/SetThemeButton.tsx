"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import Moon from "@/public/moon.svg";
import Sun from "@/public/sun.svg";

import styles from "./SetThemeButton.module.scss";

const SetThemeButton = () => {
  const [theme, setTheme] = useState(global.window?.__theme || "light");

  const isDark = theme === "dark";

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    // <motion.button className={styles.button} onClick={toggleTheme}>
    //   {isDark ? (
    //     <motion.div
    //       className={styles.svgDiv}
    //       whileHover={{ scale: 0.95 }}
    //       whileTap={{ scale: 0.9, rotate: [360, 0] }}
    //       initial={{
    //         rotate: 0,
    //       }}
    //       animate={{
    //         rotate: [0, 360],
    //       }}
    //     >
    //       <Moon className={classNames(styles.svg, styles.dark)} />
    //     </motion.div>
    //   ) : (
    //     <motion.div
    //       className={styles.svgDiv}
    //       whileHover={{ scale: 0.95 }}
    //       whileTap={{ scale: 0.9, rotate: [0, 360, 0, 360] }}
    //       transition={{
    //         duration: 10, // This applies to both hover and tap
    //       }}
    //     >
    //       <Sun className={classNames(styles.svg, styles.light)} />
    //     </motion.div>
    //   )}
    // </motion.button>
    <motion.button
      onClick={toggleTheme}
      className={styles.button}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: isDark ? [0, 380] : [360, 0] }}
        transition={{
          duration: isDark ? 1.25 : 1,
          ease: "backOut",
          type: "spring",
          stiffness: 70,
          damping: 20,
        }}
      >
        {isDark ? (
          <motion.g
            key="moon"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            className={styles.moon}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </motion.g>
        ) : (
          <motion.g
            key="sun"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            className={styles.sun}
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </motion.g>
        )}
      </motion.svg>
    </motion.button>
  );
};

export default SetThemeButton;
