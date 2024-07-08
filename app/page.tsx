import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import home_bg from "@/public/home_Bg.jpg";
import down_icon from "@/public/down-arrow.png";

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
        <h2 className="text-forest text-4xl md:text-6xl mt-20 mx-5 w-full">
          Welcome to Just Be Still
        </h2>
        <div className="w-full">
          <p className="text-2xl max-w-[1024px] md:leading-loose inline-block px-5">
            Welcome to Just Be Still, a creative fashion design group dedicated
            to inspiring the next generation of designers! We specialize in
            teaching kids how to sew and unleash their creativity.
          </p>
        </div>
        <div className="w-full">
          <p className="text-2xl max-w-[1024px] md:leading-loose inline-block px-5">
            <Link href="/about" className="underline text-forest">
              Learn More About Us
            </Link>
          </p>
        </div>
        <div className="mb-5 animate-bounce grow self-end">more?</div>
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
