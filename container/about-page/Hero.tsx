import Image from "next/image";
import { banner2 } from "@/public";

export default function Hero() {
    return (
        <section className="w-full padding-x py-10">
         <div className="w-full relative">
         <Image src={banner2}
                alt="vp660_banner"
                className="w-full h-full object-cover blur-[2px]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-white uppercase text-7xl font-bold">About Us</p>
            </div>
         </div>
        </section>
    )
}
