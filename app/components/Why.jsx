"use client"

import Image from "next/image"
import MainButton from "./UI/MainButton"
import { motion } from "framer-motion"

export default function Why() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 relative container mx-auto border-b border-[#ddd] overflow-hidden">
            <div className="absolute -left-[20vw] bottom-0 w-[30vw] h-[50vh] bg-[--blue] blur-3xl rounded-full opacity-20"></div>
                <div className="ruled-grid col-span-1 overflow-hidden lg:border-l border-[#ddd]">
                    <div className="card flex flex-col justify-center gap-4 col-span-2">
                        <h2 className="lg:text-5xl text-3xl font-switzer font-bold uppercase text-[--blue]">Why us?</h2>
                        <p className="text-justify">Our motto is not only put together what the customer asks, but constantly thinking together for the development and rationalization of production, parts, and even the product. We believe that proactivity and quick, precise work will bring long and prosperous relationship with our customers.</p>
                        <MainButton text={"Let's work together"} link={"mailto:hello@iqc-services.hu"} icon={""}/>
                    </div>
                </div> 
                <div className="relative ruled-grid grid-cols-2 grid-rows-1 col-span-2 border-x lg:border-l border-[#ddd]">
                    <div className="card lg:border-r border-[#ddd] lg:min-h-[400px] min-h-[200px] card col-span-2 row-span-2 lg:col-span-1 lg:row-span-1">
                        <div className="relative w-full h-full">
                            <Image 
                                src="/images/assembly-3.webp" 
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-2xl grayscale"
                            />
                        </div>
                    </div>

                    <div className="card col-span-2 row-span-2 lg:col-span-1 lg:row-span-1">
                        <div className="relative w-full h-full">
                        <Image 
                            src="/images/motherboard.webp" 
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-2xl grayscale"
                            /> 
                        </div>
                    </div>   
                </div>   
            </div>
        </section>
    )
}