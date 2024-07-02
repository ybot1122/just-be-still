import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full m-5 text-xs text-center">
      <p>&copy; 2024 Just Be Still</p>
      <p className="mt-2">
        Visit us on{" "}
        <Link
          href={"https://www.facebook.com/profile.php?id=61550921396070"}
          className="underline"
        >
          Facebook
        </Link>
      </p>
    </footer>
  );
}
