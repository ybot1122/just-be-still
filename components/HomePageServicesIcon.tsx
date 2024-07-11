import Image from "next/image";
import needle from "@/public/services/needle.png";
import fabric from "@/public/services/fabric-pattern.png";
import gift from "@/public/services/gift.png";
import party from "@/public/services/party.png";
import sewingMachine from "@/public/services/sewing-machine.png";
import sewing from "@/public/services/sewing.png";

type icon =
  | "needle"
  | "sewing"
  | "sewing-machine"
  | "fabric"
  | "gift"
  | "party";

export default function HomePageServicesIcon({
  serviceName,
  icon = "needle",
}: {
  serviceName: string;
  icon?: icon;
}) {
  let iconSrc;

  switch (icon) {
    case "needle":
      iconSrc = needle;
      break;
    case "sewing":
      iconSrc = sewing;
      break;
    case "sewing-machine":
      iconSrc = sewingMachine;
      break;
    case "fabric":
      iconSrc = fabric;
      break;
    case "gift":
      iconSrc = gift;
      break;
    case "party":
      iconSrc = party;
      break;
    default:
      iconSrc = needle;
  }

  return (
    <div className="col-span-1 text-center mb-10">
      <div className="inline-block relative w-[75px] h-[75px]  md:w-[125px] md:h-[125px] mb-2">
        <Image src={iconSrc} alt={serviceName} fill />
      </div>

      <p className="text-sm md:text-2xl">{serviceName}</p>
    </div>
  );
}
