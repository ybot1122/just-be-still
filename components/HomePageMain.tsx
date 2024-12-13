import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import home_bg from "@/public/home_Bg.jpg";
import home_pic1 from "@/public/homepic1.jpeg";
import home_pic2 from "@/public/homepic2.jpg";
import home_pic3 from "@/public/meet_the_instructor.jpeg";
import HomePageHeroImageSection from "@/components/HomePageHeroImageSection";
import HomePageInfoSection from "@/components/HomePageInfoSection";
import HomePageServicesIcon from "@/components/HomePageServicesIcon";

export default function HomePageMain() {
  return (
    <div className="snap-y snap-mandatory">
      <HomePageHeroImageSection src={home_bg} alt="JustBeStill">
        <div className="text-white z-20 my-[150px] tall:my-0">
          <Link href="/">
            <Image
              src={logo}
              alt="JustBeStill Logo"
              width={250}
              height={250}
              sizes="100vw"
            />
          </Link>
        </div>
      </HomePageHeroImageSection>

      <HomePageInfoSection header="Welcome to JustBeStill">
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
              alt="JustBeStill Class"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <div className="mb-5 animate-bounce grow self-end mt-5 tall:mt-0">
          <button className="underline">
            Interested in a sewing party? &#127881;
          </button>
        </div>
      </HomePageInfoSection>

      <HomePageHeroImageSection src={home_pic2} alt="JustBeStill Events">
        <div className="text-white z-20 text-4xl md:text-6xl text-center px-10 md:px-0 my-[150px] tall:my-0">
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
              alt="JustBeStill Class"
              fill
              objectFit="contain"
            />
          </div>
        </div>

        <p className="text-2xl max-w-[1024px] md:leading-loose inline-block px-5 w-full mt-20 tall:mt-0">
          <Link href="/about" className="underline text-forest bg-white p-5">
            Learn about us
          </Link>
        </p>
        <p className="w-full md:leading-loose inline-block px-5 animate-bounce mt-20 tall:mt-0 mb-5 tall:mb-0">
          <button className="underline">Explore our services</button>
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
        <p className="text-2xl max-w-[1024px] md:leading-loose inline-block self-end text-white p-5 mb-10">
          <Link href="/services" className="underline bg-forest p-5 mr-5">
            See All our Services
          </Link>
          <Link href="/contact" className="underline ml-5 bg-forest p-5">
            Contact Us
          </Link>
        </p>
      </HomePageInfoSection>
    </div>
  );
}
