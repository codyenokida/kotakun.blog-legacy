import Header from "@/components/Header";

import styles from "./MainLayout.module.scss";
import Link from "next/link";
import Posts from "@/components/Posts";
import Footer from "../Footer";
import IconLink from "../IconLink";
import HeroSVG from "../HeroSVG";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className={styles.main}>
      <HeroSVG />
      {children}
      <Footer />
    </main>
  );
}
