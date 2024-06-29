import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[100vh] items-center justify-between text-sm lg:flex">
        <Image
          src="/tresleches_slice.png"
          alt="cake"
          fill
          sizes="100vw"
          objectFit="cover"
        />
        <div className="absolute bottom-0 max-w-[720px] pb-10 pl-10">
          <h1 className="text-6xl mb-10">
            Just Be Still,
            <br />
            Sewing and Classes.
          </h1>
          <h2 className="text-3xl">
            Introducing all new classes and courses. Fun for the whole family.
          </h2>
        </div>
      </div>
      <div className="text-center w-full">
        <h2 className="text-forest text-6xl mt-20 mb-5">Our approach</h2>
        <p className="text-2xl color-text max-w-[1024px] leading-loose mb-20 px-5 m-auto">
          We are a group of doctoral-level psychologists and psychiatrists who
          provide quality mental health care. As a mental health collective, we
          assist members by providing therapy, medication management, coaching,
          and more. Let us help you connect with one of our doctors who meets
          your needs and is available to see you, online or in-person.
        </p>
      </div>
      <div className="text-center bg-forest w-full">
        <h2 className="text-white text-6xl mt-20 mb-5">Our Services</h2>
      </div>
    </>
  );
}
