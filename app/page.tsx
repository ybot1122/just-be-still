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
    </>
  );
}
