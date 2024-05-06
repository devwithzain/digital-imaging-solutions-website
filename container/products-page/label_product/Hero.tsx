import Image from "next/image";
import { banner1 } from "@/public";

export default function Hero() {
  return (
    <section className="w-full padding-x py-10">
      <Image src={banner1}
        alt="vp660_banner"
        className="w-full h-full object-cover"
      />
    </section>
  )
}
