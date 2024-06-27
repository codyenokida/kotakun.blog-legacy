import styles from "./Typography.module.scss";

export default function Typography() {
  return (
    <div className={styles.container}>
      <div>
        Display:
        <p>I&apos;m the man who&apos;s going to be the Pirate King!</p>
      </div>
      <div>
        H1
        <h1>I&apos;m the man who&apos;s going to be the Pirate King!</h1>
      </div>
      <div>
        H2
        <h2>I&apos;m the man who&apos;s going to be the Pirate King!</h2>
      </div>
      <div>
        H3
        <h3>I&apos;m the man who&apos;s going to be the Pirate King!</h3>
      </div>
      <div>
        H4
        <h4>I&apos;m the man who&apos;s going to be the Pirate King!</h4>
      </div>
      <div>
        Text Size 7
        <p style={{ fontSize: "var(--font-size-7)" }}>
          I&apos;m the man who&apos;s going to be the Pirate King!
        </p>
      </div>
      <div>
        Text Size 6
        <p style={{ fontSize: "var(--font-size-6)" }}>
          I&apos;m the man who&apos;s going to be the Pirate King!
        </p>
      </div>
      <div>
        Text Size 5
        <p style={{ fontSize: "var(--font-size-5)" }}>
          I&apos;m the man who&apos;s going to be the Pirate King!
        </p>
      </div>
      <div>
        Text Size 4
        <p style={{ fontSize: "var(--font-size-4)" }}>
          I&apos;m the man who&apos;s going to be the Pirate King!
        </p>
      </div>
      <div>
        Text Size 3
        <p style={{ fontSize: "var(--font-size-3)" }}>
          I&apos;m the man who&apos;s going to be the Pirate King!
        </p>
      </div>
      <div>
        Text Size 2
        <p style={{ fontSize: "var(--font-size-2)" }}>
          I&apos;m the man who&apos;s going to be the Pirate King!
        </p>
      </div>
      <div>
        Text Size 1
        <p style={{ fontSize: "var(--font-size-1)" }}>
          I&apos;m the man who&apos;s going to be the Pirate King!
        </p>
      </div>
      <div>
        Strong
        <p>
          <strong>I&apos;m the man who&apos;s going to be the Pirate King!</strong>
        </p>
      </div>
      <div>
        Italics
        <p>
          <i>I&apos;m the man who&apos;s going to be the Pirate King!</i>
        </p>
      </div>
    </div>
  );
}
