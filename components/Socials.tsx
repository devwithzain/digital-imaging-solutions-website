import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <header className="w-full bg-black flex items-center justify-between py-[10px] padding-x sm:hidden xm:hidden">
      <div className="flex items-center gap-1">
        <h3 className="text-[15px] text-white font-medium">Email:</h3>
        <Link href="mailto:Rizwan@dis.com.pk" className="text-[15px] text-white font-medium">Rizwan@dis.com.pk</Link>
      </div>
      <div className="flex items-center gap-1">
        <h3 className="text-[15px] text-white font-medium">Contact:</h3>
        <Link href="tel:9221 36729110" className="text-[15px] text-white font-medium"> (+9221) 36729110</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href={"https://www.facebook.com/digitalImagingsolution/"} className="bg-[#1877F2] p-2 text-white rounded-full">
          <FaFacebook size={22} />
        </Link>
        <Link href={"https://www.instagram.com/digital_imaging_solutions/"} className="bg-[#cd486b] p-2 text-white rounded-full">
          <FaInstagram size={22} />
        </Link>
        <Link href={"https://pk.linkedin.com/company/digital-imaging-solutions"} className="bg-[#0077B5] p-2 text-white rounded-full">
          <FaLinkedin size={22} />
        </Link>
      </div>
    </header>
  )
}
