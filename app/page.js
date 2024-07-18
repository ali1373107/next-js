import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="/ss.png" alt="A logo"></img>
      <h1>Welcome to tis NextJS Course!</h1>
      <p>Let&apos;s get started </p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
