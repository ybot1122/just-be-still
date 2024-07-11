"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import home_bg from "@/public/home_Bg.jpg";
import home_pic1 from "@/public/homepic1.jpeg";
import home_pic2 from "@/public/homepic2.jpg";
import home_pic3 from "@/public/homepic3.jpg";
import HomePageHeroImageSection from "@/components/HomePageHeroImageSection";
import HomePageInfoSection from "@/components/HomePageInfoSection";
import HomePageServicesIcon from "@/components/HomePageServicesIcon";

import { useCallback, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PageParagraph from "@/components/PageParagraph";

const whiteBgInd = [1, 4, 5];

export default function Home() {
  const [currentSectionId, setCurrentSectionId] = useState(0);

  useEffect(() => {
    const init = async () => {
      // @ts-expect-error
      const fullpage = (await import("fullpage.js")).default;
      const myFullpage = new fullpage("#fullpage", {
        licenseKey: process.env.NEXT_PUBLIC_FULLPAGE_LICENSE,
        onLeave: (
          origin: { index: number },
          destination: { index: number },
        ) => {
          setCurrentSectionId(destination.index);
        },
      });
    };

    init();

    return () => {
      fullpage_api.destroy("all");
    };
  }, []);

  const fp_next = useCallback(() => {
    fullpage_api.moveSectionDown();
  }, []);

  return (
    <>
      <Navigation forestFont={whiteBgInd.includes(currentSectionId)} />
      <main id="fullpage">
        <HomePageHeroImageSection src={home_bg} alt="Just Be Still">
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
        </HomePageHeroImageSection>

        <HomePageInfoSection header="Welcome to Just Be Still">
          <div className="w-full">
            <p className="text-xl md:text-2xl max-w-[1024px] md:leading-loose inline-block px-5">
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
            <button onClick={fp_next} className="underline">
              Interested in a sewing party? &#127881;
            </button>
          </div>
        </HomePageInfoSection>

        <HomePageHeroImageSection src={home_pic2} alt="Just Be Still Events">
          <div className="text-white z-20 text-4xl md:text-6xl text-center px-10 md:px-0">
            Sewing Classes &amp;
            <br />
            &#127881; Parties &#127881;
            <br />
            Available
            <p className="text-2xl md:text-4xl underline mt-5">
              {" "}
              <Link href="/events">See our Events</Link>
            </p>
          </div>
        </HomePageHeroImageSection>

        <HomePageInfoSection isForest header={"Meet the Instructor"}>
          <div className="w-full px-5">
            <div className="relative max-w-[1024px] max-h-[35vh] md:max-h-[50vh] m-auto aspect-square">
              <Image
                src={home_pic3}
                placeholder="blur"
                alt="Just Be Still Class"
                fill
                objectFit="contain"
              />
            </div>
          </div>

          <p className="text-2xl max-w-[1024px] md:leading-loose inline-block px-5 w-full">
            <Link href="/about" className="underline text-forest bg-white p-5">
              Learn about us
            </Link>
          </p>
          <p className="max-w-[1024px] md:leading-loose inline-block px-5 animate-bounce">
            <button onClick={fp_next} className="underline">
              Explore our services
            </button>
          </p>
        </HomePageInfoSection>

        <HomePageInfoSection header="Our Services">
          <div className="grid grid-cols-3 gap-2 w-full">
            <HomePageServicesIcon serviceName="Sewing Classes" icon="sewing" />
            <HomePageServicesIcon
              serviceName="Private Sewing Classes"
              icon="needle"
            />
            <HomePageServicesIcon serviceName="Alterations" icon="fabric" />
            <HomePageServicesIcon serviceName="Custom Order" icon="gift" />
            <HomePageServicesIcon serviceName="Sewing Parties" icon="party" />
            <HomePageServicesIcon
              serviceName="Service Projects"
              icon="sewing-machine"
            />
          </div>
          <p className="text-2xl max-w-[1024px] md:leading-loose inline-block self-end bg-forest text-white p-5 mb-10">
            <Link href="/services" className="underline">
              See All our Services
            </Link>
          </p>
        </HomePageInfoSection>

        <HomePageInfoSection>
          <div>
            <PageParagraph isAccent>
              <Link href="/contact" className="underline">
                Contact Us
              </Link>
            </PageParagraph>
            <p className="mt-5">&copy; 2024 Just Be Still</p>
            <p className="mt-2">
              Visit us on{" "}
              <Link
                href={"https://www.facebook.com/profile.php?id=61550921396070"}
                className="underline"
              >
                Facebook
              </Link>
            </p>
            <p className="underline mt-2 text-[0.5rem] w-full">
              <Link href="https://www.flaticon.com/free-icons/group">
                Icons by Freepik
              </Link>
            </p>
          </div>
        </HomePageInfoSection>
      </main>
    </>
  );
}
