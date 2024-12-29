import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-[25px] pb-[25px] text-xs text-center tall:snap-end tall:snap-always">
      <p>
        <span className="mr-5">
          &copy; {new Date().getFullYear()} JustBeStill
        </span>
        Visit us on{" "}
        <Link
          href={"https://www.facebook.com/profile.php?id=61550921396070"}
          className="underline mr-5"
        >
          Facebook
        </Link>
      </p>
    </footer>
  );
}
