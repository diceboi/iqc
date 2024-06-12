"use client"

import Image from "next/image"
import MainButton from "./UI/MainButton"
import { motion } from "framer-motion"

export default function About() {
    return (
        <section>
            <div className="relative grid grid-cols-1 lg:grid-cols-3 container mx-auto border-b border-[#ddd] cross-top-right">
                <div className="relative ruled-grid grid-cols-2 grid-rows-1 col-span-2 border-x lg:border-l border-[#ddd]">
                    <div className="card lg:border-r border-[#ddd] lg:min-h-[400px] min-h-[200px] card col-span-2 row-span-2 lg:col-span-1 lg:row-span-1">
                        <div className="relative w-full h-full">
                            <Image 
                                src="/images/assembly-5.webp" 
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-2xl grayscale"
                            />
                        </div>
                    </div>

                    <div className="card col-span-2 row-span-2 lg:col-span-1 lg:row-span-1">
                        <div className="relative w-full h-full">
                        <Image 
                            src="/images/metal-1.webp" 
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-2xl grayscale"
                            /> 
                        </div>
                    </div>   
                </div>
                <div className="relative ruled-grid lg:border-r border-[#ddd]">
                    <div className="absolute -right-[20vw] lg:top-1/2 bottom-0 -translate-y-1/2 w-[30vw] h-[50vh] bg-[--blue] blur-3xl rounded-full opacity-20"></div>
                    <div className="card flex flex-col justify-center gap-4 col-span-2">
                        <h2 className="lg:text-5xl text-3xl font-switzer font-bold uppercase text-[--blue]">Who we are?</h2>
                        <p className="text-justify">iQC ServicesKft. was established in 2019. The initial direction was to offer assembly and metalworking services to our customers. The founders are industry veterans with at least a decade of experience in their chosen field. We offer mechanical and sub-assembly production, specialized consulting services to help our customers to bring their products to life. We provide engineering services, testing, electrical designs and drawings. We are also able to cut, weld, bend and machine wide range of materials with flexibility, quality and traceability. We design and create packaging, we offer logistic solutions, and on site project execution and management. If you need something more special? We can drive your hand to create exactly what you imagine.</p>
                        <MainButton text={"I'm interested"} link={"mailto:hello@iqc-services.hu"} icon={""}/>
                    </div>
                </div>    
            </div>
        </section>
    )
}