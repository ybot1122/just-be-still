import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="relative w-full h-[100vh] min-h-[1024px] items-center justify-between text-sm bg-forest">
        <div className="text-center mt-[100px] p-5 max-w-[1024px] mx-auto">
          <h1 className="text-3xl md:text-6xl text-white mb-10">Contact Us</h1>

          <div className="text-xl md:text-2xl text-white mb-5">
            Interested in a business inquiry?
            <br />
            Feel free to email us at:{" "}
            <span className="font-bold">email@email.com</span>
          </div>

          <div className="text-xl md:text-2xl text-white mb-5">
            Want to reach us sooner?
            <br />
            Please call us: <span className="font-bold">123-456-7890</span>
          </div>
          <div className="text-xl md:text-2xl text-white mb-5">
            Reach us on{" "}
            <Link
              href={"https://www.facebook.com/profile.php?id=61550921396070"}
              className="underline"
            >
              Facebook
            </Link>
            !
          </div>
        </div>
      </div>
    </>
  );
}
