import Link from "next/link";
import classNames from "classnames";

import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <main className={classNames(styles.container)}>
      <h1>Oops!</h1>
      <p>You have reached somewhere you are not supposed to be.</p>
      <Link href="/">Go back!!</Link>
    </main>
  );
}
