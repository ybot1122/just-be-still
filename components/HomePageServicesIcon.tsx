import Image from "next/image";
import needle from "@/public/needle.png";

export default function HomePageServicesIcon({
  serviceName,
}: {
  serviceName: string;
}) {
  return (
    <div className="col-span-1 text-center">
      <div className="inline-block relative w-[75px] h-[75px]  md:w-[150px] md:h-[150px]">
        <Image src={needle} alt={serviceName} fill />
      </div>

      <p className="text-sm md:text-2xl">{serviceName}</p>
    </div>
  );
}
