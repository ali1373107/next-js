import Link from "next/link";

export default function Header() {
  return (
    <>
      <img src="/ss.png" alt="A logo"></img>
      <h1>Welcome to Hillmans Burger</h1>

      <Link href="../meals">Meals </Link>

      <Link href="../meals/share"> Share</Link>

      <Link href="../community">Community </Link>
    </>
  );
}
