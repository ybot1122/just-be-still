import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <PageHeader header="Services" />

      <div className="text-center w-full max-w-[1024px] mx-auto ">
        <div className="px-5 md:px-20">
          <p className="text-xl md:text-2xl color-text md:leading-loose mt-5 md:mt-20 px-5 m-auto">
            Welcome to Just Be Still, a creative fashion design group dedicated
            to inspiring the next generation of designers! We specialize in
            teaching kids how to sew and unleash their creativity. But that's
            not all—we also offer alterations; we take custom orders and fun
            sewing parties.
          </p>
        </div>
      </div>
    </>
  );
}
