import Image from "next/image";
import hero from "@/public/about_1_cropped.jpeg";
import about_2 from "@/public/about_highlight.jpg";
import about_3 from "@/public/about_highlight2.jpg";

export default function About() {
  return (
    <>
      <h1 className="text-3xl md:text-6xl text-white pt-[100px] pb-[50px] md:pt-[200px] md:pb-[100px] text-center bg-forest">
        About Us
      </h1>

      <div className="text-center w-full max-w-[1024px] ">
        <div className="px-5 md:px-20">
          <div className="relative m-auto mt-10 md:mt-0 md:float-right md:ml-20 w-[250px] h-[250px]">
            <div className="absolute left-0 top-0 w-full bg-forest -translate-x-3 -translate-y-3 h-full z-10" />
            <Image
              src={hero}
              alt="Just Be Still Teacher"
              width="250"
              height="350"
              className="z-20 absolute left-0 top-0"
              placeholder="blur"
            />
          </div>
          <p className="text-xl md:text-2xl color-text md:leading-loose mt-5 md:mt-20 px-5 m-auto">
            Welcome to Just Be Still, a creative fashion design group dedicated
            to inspiring the next generation of designers! We specialize in
            teaching kids how to sew and unleash their creativity. But that's
            not all—we also offer alterations; we take custom orders and fun
            sewing parties.
          </p>
        </div>
      </div>

      <div className="text-center w-full max-w-[1024px]">
        <div className="px-5 md:px-20">
          <div className="relative m-auto mt-10 md:mt-0 md:float-left md:mr-20 w-[250px] h-[350px]">
            <div className="absolute left-0 top-0 w-full bg-forest -translate-x-3 -translate-y-3 h-full z-10" />
            <Image
              src={about_2}
              alt="Just Be Still Teacher"
              width="250"
              height="350"
              className="z-20 absolute left-0 top-0"
            />
          </div>
          <p className="text-xl md:text-2xl color-text md:leading-loose mt-5 md:mt-20 px-5 m-auto">
            My journey with sewing began right after high school when I learned
            the basics. In college, I had the opportunity to teach middle school
            kids crafts like knitting, cooking, baking, and needlework at ROHI
            camp during the summer! I have a passion for teaching kids. With a
            master's degree in instructional education, I have a deep
            understanding of effective teaching methods and am committed to
            providing a comprehensive and accessible learning experience for
            anyone interested in sewing.
          </p>
        </div>
      </div>

      <div className="text-center w-full max-w-[1024px]">
        <div className="px-5 md:px-20">
          <div className="relative m-auto mt-10 md:mt-0 md:float-right md:ml-20 w-[250px] h-[250px]">
            <div className="absolute left-0 top-0 w-full bg-forest -translate-x-3 -translate-y-3 h-full z-10" />
            <Image
              src={about_3}
              alt="Just Be Still Teacher"
              width="250"
              height="350"
              className="z-20 absolute left-0 top-0"
            />
          </div>
          <p className="text-xl md:text-2xl color-text md:leading-loose mt-5 md:mt-20 px-5 m-auto">
            As a teacher, I understand the importance of hands-on practice. In
            my classes, students not only learn new techniques but also apply
            them to real-life projects. This approach ensures that they truly
            grasp the skills and feel a sense of accomplishment as they create
            useful items.
          </p>
          <p className="font-bold text-xl md:text-2xl color-text md:leading-loose mt-5 md:mt-20 px-5 m-auto">
            At Just Be Still, we believe in the power of practical application
            to master any craft.
          </p>
          <p className="text-xl md:text-2xl color-text md:leading-loose mt-5 md:mt-20 px-5 m-auto">
            By combining classroom-style instruction with practice projects, we
            help our students reinforce their understanding and build confidence
            in their abilities. We do service projects at the end of every year,
            making items for nursing homes, retirement centers, or youth
            services. My true passion lies in investing in the next generation
            of kids, nurturing their creativity, and providing them with the
            tools they need to succeed.
          </p>
          <p className="bg-forest font-bold text-xl md:text-2xl text-white md:leading-loose mt-5 md:mt-20 px-5 py-10 m-auto">
            Join us on this creative journey and discover the joy of making
            something beautiful with your own hands.
          </p>{" "}
        </div>
      </div>
    </>
  );
}
