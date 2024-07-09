import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <PageHeader header="Contact" />
      <div className="text-center w-full max-w-[1024px] mx-auto ">
        <div className="px-5 md:px-20">
          <p className="text-xl md:text-2xl color-text md:leading-loose mt-5 md:mt-20 px-5 m-auto">
            <div className="text-xl md:text-2xl mb-5">
              Reach us on{" "}
              <Link
                href={"https://www.facebook.com/profile.php?id=61550921396070"}
                className="underline"
              >
                Facebook
              </Link>
              !
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
