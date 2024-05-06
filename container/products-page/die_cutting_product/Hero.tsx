import Image from "next/image";
import { die_cutting_banner } from "@/public";

export default function Hero() {
  return (
    <section className="w-full padding-x py-10">
      <Image src={die_cutting_banner}
        alt="die_cutting_banner"
        className="w-full h-full object-cover"
      />
    </section>
  )
}
