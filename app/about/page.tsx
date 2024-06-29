import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="relative w-full h-[100vh] items-center justify-between text-sm">
        <div className="relative w-full h-full before:absolute before:block before:w-full before:h-full before:z-10 before:bg-recipeHeroScrim">
          <Image
            src="/about_Hero.jpg"
            alt="About Just Be Still"
            fill
            sizes="100vw"
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-0 max-w-[720px] pb-10 pl-10 text-white z-20">
          <h1 className="text-6xl mb-10 italic">About Us.</h1>
          <h2 className="text-3xl">
            Featuring world renowned instructor, Ezy.
          </h2>
        </div>
      </div>

      <div className="text-center w-full max-w-[1024px] ">
        <div className="px-5 md:px-20">
          <div className="relative m-auto mt-10 md:mt-0 md:float-right md:ml-20 w-[250px] h-[350px]">
            <div className="absolute left-0 top-0 w-full bg-forest -translate-x-6 -translate-y-3 h-full z-10" />
            <Image
              src="/about_highlight.jpg"
              alt="Just Be Still Teacher"
              width="250"
              height="350"
              className="z-20 absolute left-0 top-0"
            />
          </div>
          <p className="text-xl md:text-2xl color-text md:leading-loose mt-5 md:mt-20 px-5 m-auto">
            We are a group of doctoral-level psychologists and psychiatrists who
            provide quality mental health care. As a mental health collective,
            we assist members by providing therapy, medication management,
            coaching, and more. Let us help you connect with one of our doctors
            who meets your needs and is available to see you, online or
            in-person. We are a group of doctoral-level psychologists and
            psychiatrists who provide quality mental health care. As a mental
            health collective, we assist members by providing therapy,
            medication management, coaching, and more. Let us help you connect
            with one of our doctors who meets your needs and is available to see
            you, online or in-person.
          </p>
        </div>
      </div>

      <div className="text-center w-full max-w-[1024px]">
        <div className="px-5 md:px-20">
          <div className="relative m-auto mt-10 md:mt-0 md:float-right md:ml-20 w-[250px] h-[250px]">
            <div className="absolute left-0 top-0 w-full bg-forest -translate-x-6 -translate-y-3 h-full z-10" />
            <Image
              src="/about_highlight2.jpg"
              alt="Just Be Still Teacher"
              width="250"
              height="350"
              className="z-20 absolute left-0 top-0"
            />
          </div>
          <p className="text-xl md:text-2xl color-text md:leading-loose mt-5 md:mt-20 px-5 m-auto">
            We are a group of doctoral-level psychologists and psychiatrists who
            provide quality mental health care. As a mental health collective,
            we assist members by providing therapy, medication management,
            coaching, and more. Let us help you connect with one of our doctors
            who meets your needs and is available to see you, online or
            in-person. We are a group of doctoral-level psychologists and
            psychiatrists who provide quality mental health care. As a mental
            health collective, we assist members by providing therapy,
            medication management, coaching, and more. Let us help you connect
            with one of our doctors who meets your needs and is available to see
            you, online or in-person.
          </p>
        </div>
      </div>
    </>
  );
}
