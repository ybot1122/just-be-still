import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";

import { Indie_Flower } from "next/font/google";

const poppins = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[100vh] items-center justify-between text-sm">
        <div className="flex justify-center items-center w-full h-full before:absolute before:block before:w-full before:h-full before:z-10 before:bg-recipeHeroScrim">
          <Image
            src="/home_Bg.jpg"
            alt="Just Be Still"
            fill
            sizes="100vw"
            objectFit="cover"
          />
          <div className="text-white z-20">
            <Link href="/">
              <Image
                src={logo}
                alt="Just Be Still Logo"
                width={250}
                height={250}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center w-full">
        <h2 className="text-forest text-6xl mt-20 mb-10">Our approach</h2>
        <p className="text-2xl color-text max-w-[1024px] leading-loose mb-20 px-5 m-auto">
          We are a group of doctoral-level psychologists and psychiatrists who
          provide quality mental health care. As a mental health collective, we
          assist members by providing therapy, medication management, coaching,
          and more. Let us help you connect with one of our doctors who meets
          your needs and is available to see you, online or in-person.
        </p>
      </div>
      <div className="text-center bg-forest w-full pb-10">
        <h2 className="text-white text-6xl mt-20 mb-20">Our Services</h2>
        <div className="inline-block mx-20 mb-20">
          <Image
            src="/fabric-pattern.png"
            alt="Fabric pattern"
            width="150"
            height="150"
          />
          <p className="text-white text-2xl mt-5">Stitching</p>
        </div>
        <div className="inline-block mx-20 mb-20">
          <Image src="/needle.png" alt="Needle" width="150" height="150" />
          <p className="text-white text-2xl mt-5">Needling</p>
        </div>
        <div className="inline-block mx-20 mb-20">
          <Image
            src="/sewing-machine.png"
            alt="Sewing Machine"
            width="150"
            height="150"
          />
          <p className="text-white text-2xl mt-5">Machine</p>
        </div>
        <div className="inline-block mx-20 mb-20">
          <Image src="/sewing.png" alt="Sewing" width="150" height="150" />
          <p className="text-white text-2xl mt-5">Hand Sewn</p>
        </div>
      </div>
    </>
  );
}
