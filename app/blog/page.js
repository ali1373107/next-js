import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/blog/meals-1">meals-1</Link>
      </p>
      <p>
        <Link href="/blog/meals-2">meals-2</Link>
      </p>
    </main>
  );
}
