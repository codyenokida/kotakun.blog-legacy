import Header from "@/components/Header";

import styles from "./MainLayout.module.scss";
import Link from "next/link";
import Posts from "@/components/Posts";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className={styles.main}>
      <Header />
      {children}
    </main>
  );
}
