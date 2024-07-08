import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import home_bg from "@/public/home_Bg.jpg";
import down_icon from "@/public/down-arrow.png";
import home_pic1 from "@/public/homepic1.jpeg";

import { Indie_Flower } from "next/font/google";

const indie_flower = Indie_Flower({
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
            src={home_bg}
            alt="Just Be Still"
            fill
            sizes="100vw"
            objectFit="cover"
            placeholder="blur"
          />
          <div className="text-white z-20">
            <Link href="/">
              <Image
                src={logo}
                alt="Just Be Still Logo"
                width={250}
                height={250}
                sizes="100vw"
              />
            </Link>
          </div>
          <div className="absolute bottom-0 mb-5 animate-bounce z-10">
            <Image
              src={down_icon}
              alt="Scroll Down"
              sizes="100vw"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center text-center w-full h-[100vh]">
        <h2 className={`text-forest text-4xl md:text-6xl mt-20 mx-5 w-full`}>
          Welcome to Just Be Still
        </h2>
        <div className="w-full">
          <p className="text-2xl max-w-[1024px] md:leading-loose inline-block px-5">
            A creative fashion design group dedicated to inspiring the next
            generation of designers! We specialize in teaching kids how to sew
            and unleash their creativity.
          </p>
        </div>
        <div className="w-full px-5">
          <div className="relative max-w-[1024px] max-h-[50vh] m-auto aspect-video">
            <Image
              src={home_pic1}
              placeholder="blur"
              alt="Just Be Still Class"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <div className="mb-5 animate-bounce grow self-end">
          Scroll Down to see our services
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center text-center w-full h-[100vh] bg-forest text-white">
        <h2 className=" text-4xl md:text-6xl mt-20 px-5 w-full">
          Our Services
        </h2>
        <div className="w-full">
          <ul className="text-2xl max-w-[1024px] md:leading-loose inline-block px-5">
            <li>Sewing Classes</li>
            <li>Private Sewing Classes</li>
            <li>Alterations</li>
            <li>Custom Order</li>
            <li>Sewing Parties</li>
            <li>Service Projects</li>
          </ul>
        </div>
        <p className="text-2xl max-w-[1024px] md:leading-loose inline-block px-5 flex-1">
          <Link href="/services" className="underline text-white">
            Click Here for More Details
          </Link>
        </p>
      </div>
    </>
  );
}
