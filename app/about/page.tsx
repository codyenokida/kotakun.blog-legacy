import Header from "@/components/Header";

import styles from "./page.module.scss";
import Link from "next/link";
import Posts from "@/components/Posts";

export default async function Page() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.margin} />
      </div>
    </main>
  );
}
