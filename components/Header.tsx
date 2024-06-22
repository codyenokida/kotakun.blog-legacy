"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import classNames from "classnames";

import LoadingThemeButton from "@/components/LoadingThemeButton";
import SplitText from "@/components/SplitText";

import Logo from "@/public/logo.svg";

import styles from "./Header.module.scss";

const SetThemeButton = dynamic(() => import("@/components/SetThemeButton"), {
  ssr: false,
  loading: () => <LoadingThemeButton />,
});

type HeaderProps = {
  marginHeight?: string; // token
};

export default function Header({
  marginHeight = "--offsetHeight",
}: HeaderProps) {
  const [headerHeight, setHeaderHeight] = useState<number>(120);
  const [borderColor, setBorderColor] = useState<
    "transparent" | "rgb(200, 200, 200, 0.5)"
  >("transparent");
  const [revealText, setRevealText] = useState<boolean>(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const difference = 120 - currentScrollPos;

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
    setTimeout(() => {
      setRevealText(true);
    }, 500);

    setTimeout(() => {
      setRevealText(false);
    }, 2500);
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
                <Logo className={styles.svg} />
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
                  <span className={styles.blogText}>
                    <span className={styles.green}>.</span>blog
                  </span>
                </span>
              </div>
            </Link>
            <SetThemeButton />
          </div>
        </div>
      </header>
      <div
        className={styles.margin}
        style={{ height: `var(${marginHeight})` }}
      />
    </>
  );
}
