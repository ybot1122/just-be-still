import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 z-10 text-white">
      <div className="inline-block text-2xl mt-5 mx-10">
        <Link href="/">Just Be Still</Link>
      </div>

      <ul className="inline-block">
        <li className="inline-block ml-5">
          <Link href="/about">About</Link>
        </li>
        <li className="inline-block ml-5">
          <Link href="/events">Events</Link>
        </li>
        <li className="inline-block ml-5">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
