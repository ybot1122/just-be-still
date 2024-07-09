import Image, { StaticImageData } from "next/image";

export default function ({
  height,
  src,
  alt,
  floatLeft = false,
}: {
  height: number;
  src: StaticImageData;
  alt: string;
  floatLeft?: boolean;
}) {
  const leftOrRight = floatLeft
    ? ` md:mr-20 md:float-left `
    : ` md:ml-20 md:float-right `;

  return (
    <div
      className={`relative m-auto mt-10 md:mt-0 w-[250px] h-[${height}px] ${leftOrRight}`}
    >
      <div className="absolute left-0 top-0 w-full bg-forest -translate-x-3 -translate-y-3 h-full z-10" />
      <Image
        src={src}
        alt={alt}
        width="250"
        height={height}
        className="z-20 absolute left-0 top-0"
        placeholder="blur"
      />
    </div>
  );
}
