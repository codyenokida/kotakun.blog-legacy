"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

import LoadingThemeButton from "@/components/LoadingThemeButton";

import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import SplitText from "./SplitText";
import classNames from "classnames";

const SetThemeButton = dynamic(() => import("@/components/SetThemeButton"), {
  ssr: false,
  loading: () => <LoadingThemeButton />,
});

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState<number>(120);
  const [borderColor, setBorderColor] = useState<
    "transparent" | "rgb(200, 200, 200, 0.5)"
  >("transparent");
  const [revealText, setRevealText] = useState<boolean>(false);
  const [mutex, setMutex] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const difference = 120 - currentScrollPos

    if (difference > 60) {
      setHeaderHeight(difference);
      setBorderColor("transparent");
    } else {
      setHeaderHeight(60);
      setBorderColor("rgb(200, 200, 200, 0.5)");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  /**
   * Trigger reveal text on first render
   */
  useEffect(() => {
    setRevealText(true);
    setTimeout(() => {
      setRevealText(false);
    }, 2000);
  }, []);

  return (
    <>
      <header
        className={styles.header}
        style={{ height: headerHeight, borderColor }}
      >
        <div className={styles.container}>
          <div className={styles.items}>
            <Link
              href="/"
              className={styles.link}
              onMouseOver={() => setRevealText(true)}
              onMouseLeave={() => setRevealText(false)}
            >
              <div className={styles.logo}>
                <img
                  src="/logo.svg"
                  alt="kota-kun blog logo"
                  className={styles.svg}
                />
                <span
                  className={classNames(styles.span, {
                    [styles.revealText]: revealText,
                    [styles.hideText]: !revealText,
                  })}
                  onMouseOver={() => setRevealText(true)}
                  onMouseLeave={() => setRevealText(false)}
                >
                  {revealText && (
                    <SplitText className={styles.reveal}>kotakun</SplitText>
                  )}
                  <span className={styles.blogText}>.blog</span>
                </span>
              </div>
            </Link>
            <SetThemeButton />
          </div>
        </div>
      </header>
      <div className={styles.margin} />
    </>
  );
}
