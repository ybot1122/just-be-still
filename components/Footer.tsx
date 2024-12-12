import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-[25px] mb-5 text-xs text-center">
      <p>
        <span className="mr-5">&copy; 2024 JustBeStillDesign</span>Visit us on{" "}
        <Link
          href={"https://www.facebook.com/profile.php?id=61550921396070"}
          className="underline mr-5"
        >
          Facebook
        </Link>
        <Link
          href="https://www.flaticon.com/free-icons/group"
          className="text-xs"
        >
          Icons by Freepik
        </Link>
      </p>
    </footer>
  );
}
