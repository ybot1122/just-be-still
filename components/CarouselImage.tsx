export default function CarouselImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden px-5">
      <img
        src={src}
        alt={alt}
        className="object-cover object-left-top h-full w-full"
      />
    </div>
  );
}
