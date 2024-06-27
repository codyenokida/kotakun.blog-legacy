import classNames from "classnames";
import styles from "./Colors.module.scss";

export default function Colors() {
  return (
    <div className={styles.container}>
      <h4>Brand:</h4>
      <div className={classNames(styles.box, styles.brand)} />
      <h4>Background:</h4>
      <div className={classNames(styles.box, styles.bg)} />
      <h4>Foreground:</h4>
      <div className={classNames(styles.box, styles.fg)} />
    </div>
  );
}
