"use client"

import Image from "next/image"
import MainButton from "./UI/MainButton"
import { motion } from "framer-motion"

export default function About2() {
    return (
        <section className="flex flex-col items-center justify-center w-full py-20 overflow-hidden">
            <div className="relative container mx-auto flex flex-col items-center justify-center gap-20 lg:flex-row px-4 ">
                <div className="absolute -right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[30vw] h-[50vh] bg-[--blue] blur-3xl rounded-full opacity-20"></div>
                <div className="relative w-1/2 z-10">
                    <Image 
                        src="/images/web_iQC_Kornye_218_MKB_5262 copy.webp" 
                        width={400} 
                        height={400} 
                        className="absolute -top-28 -left-28 -rotate-6 rounded-2xl translate-x-1/2 -translate-y-1/2 shadow-2xl grayscale"
                    />
                    <Image 
                        src="/images/nyomdai_iQC_Kerekegyhaza_010_MKB_3055 copy.webp" 
                        width={400} 
                        height={400} 
                        className="absolute top-0 left-0 rotate-12 rounded-2xl translate-x-1/2 -translate-y-1/2 shadow-2xl grayscale"
                    />
                    <Image 
                        src="/images/nyomdai_iQC_Kornye_232_IMG_9500 copy.webp" 
                        width={400} 
                        height={400} 
                        className="absolute top-28 left-28 -rotate-12 rounded-2xl translate-x-1/2 -translate-y-1/2 shadow-2xl grayscale"
                    />
                    
                </div>
                <div className="flex flex-col justify-center gap-4 w-1/2 h-[60vh]  z-10">
                    <h2>Who we are?</h2>
                    <p>iQC Services Kft. was established in 2019. The initial direction was to offer assembly and metal working services to our customers with flexibility, quality and traceability.</p>
                    <MainButton text={"I'm interested"} link={"#"} icon={""}/>
                </div>
            </div>
        </section>
    )
}