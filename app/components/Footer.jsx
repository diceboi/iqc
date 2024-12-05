import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { IoMailOpenOutline } from "react-icons/io5";

import Image from "next/image";

export default function Footer() {
    return(
        <section className=" flex container mx-auto py-10">
            <div className="relative bg-gradient-to-br from-[--blue] to-[#77c6eb] min-h-[30vh] w-full cross-top-right">
                <div className="ruled-grid lg:grid-cols-2 h-full" >
                    <div className="flex flex-col justify-center items-center gap-4 card text-white">
                        <h3 className="font-bold font-switzer uppercase text-2xl">Contact Us</h3>
                        <div className=" font-thin">
                            <div className="flex flex-nowrap items-center gap-4">
                            <HiMiniDevicePhoneMobile />
                            <a href="tel:+36 20 353 8150">+36 20 353 8150</a>
                            </div>
                            <div className="flex flex-nowrap items-center gap-4">
                                <IoMailOpenOutline />
                                <a href="mailto:hello@iqc-services.hu">hello@iqc-services.hu</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center items-center gap-4 card">
                        <Image src="/images/iso_9001-150x150.png" width={100} height={100} alt="iso 9001"/>
                        <Image src="/images/iso_14001-150x150.png" width={100} height={100} alt="iso 14001"/>
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <p className="text-sm text-gray-500">iQC Services Kft. © 2024</p>
                </div>
            </div>
            
        </section>
    )
}