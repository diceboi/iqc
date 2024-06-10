"use client"

import Image from "next/image"
import MainButton from "./UI/MainButton"
import { motion } from "framer-motion"

export default function Why() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 relative container mx-auto border-b border-[#ddd] overflow-hidden">
            <div className="absolute -left-0 bottom-0 w-[30vw] h-[50vh] bg-[--blue] blur-3xl rounded-full opacity-20"></div>
                <div className="ruled-grid col-span-1 overflow-hidden lg:border-l border-[#ddd]">
                    <div className="card row-span-1 col-span-2 lg:flex hidden">
                    </div>
                    <div className="card flex flex-col justify-center gap-4 col-span-2">
                        <h2 className="lg:text-5xl text-3xl font-switzer font-bold uppercase text-[--blue]">Why us?</h2>
                        <p>Our motto is not only put together what the customer asks, but constantly thinking together to develop and rationalize the production, the components, and even the product itself.</p>
                        <MainButton text={"Let's work together"} link={"#"} icon={""}/>
                    </div>
                    <div className="card row-span-1 col-span-2 lg:flex hidden">  
                    </div>
                </div> 
                <div className="relative ruled-grid col-span-2 border-x lg:border-l border-[#ddd]">
                    

                    <div className="col-span-2 row-span-2 card">
                        <div className="relative  w-full h-full">
                            <Image 
                            src="/images/web_iQC_Kornye_218_MKB_5262 copy.webp" 
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-2xl grayscale w-full"
                            />
                        </div>
                    </div>
                    
                </div>   
            </div>
        </section>
    )
}