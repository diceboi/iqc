'use client'

import Image from "next/image"

import * as React from "react";
import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Services() {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);

    return(
        <section className="relative container mx-auto border-x border-[#ddd] py-20 cross-bottom-left">            
            <div className="ruled-grid lg:grid-cols-4 grid-cols-1 grid-rows-2 min-h-[500px] border-b border-[#ddd] cross-top">
                <div className="card flex items-start justify-start">
                <div className="absolute -left-0 lg:top-0 top-0 -translate-y-1/2 w-[30vw] h-[50vh] bg-[--blue] blur-3xl rounded-full opacity-20"></div>
                    <h2 className="lg:text-5xl text-3xl font-switzer font-bold uppercase text-[--blue]">What we do?</h2>
                </div>
                <div className="card">

                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={[
                        { src: "/images/assembly-2.webp" },
                        { src: "/images/assembly-3.webp" },
                        { src: "/images/assembly-4.webp" },
                        { src: "/images/assembly-5.webp" }
                        ]}
                    />

                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer" onClick={() => setOpen(true)}>
                        <Image
                            src="/images/assembly-back.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/assembly-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Assembly</h3>
                    </div>
                </div>

                <div className="card">

                    <Lightbox
                        open={open1}
                        close={() => setOpen1(false)}
                        slides={[
                        { src: "/images/web_iQC_Kornye_146_MKB_5010 copy.webp" },
                        { src: "/images/assembly-1.webp" },
                        { src: "/images/cable-manufacturing-1.webp" },
                        { src: "/images/cable-manufacturing-2.webp" },
                        ]}
                    />

                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer" onClick={() => setOpen1(true)}>
                        <Image
                            src="/images/cable-manufacturing-back.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/cable-manufacturing-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Cable manufacturing</h3>
                    </div>
                </div>

                <div className="card h-[300px]">

                    <Lightbox
                        open={open2}
                        close={() => setOpen2(false)}
                        slides={[
                        { src: "/images/metal-1.webp" },
                        { src: "/images/metal-2.webp" },
                        { src: "/images/metal-3.webp" },
                        { src: "/images/metal-4.webp" },
                        { src: "/images/metal-5.webp" },
                        { src: "/images/metal-6.webp" },
                        { src: "/images/metal-7.webp" },
                        { src: "/images/metal-8.webp" },
                        { src: "/images/metal-9.webp" },
                        { src: "/images/metal-10.webp" },
                        { src: "/images/metal-11.webp" },
                        ]}
                    />

                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer" onClick={() => setOpen2(true)}>
                        <Image
                            src="/images/metal-working-back.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/metal-working-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Metal Working</h3>
                    </div>
                </div>

                <div className="card">

                <Lightbox
                    open={open3}
                    close={() => setOpen3(false)}
                    slides={[
                    { src: "/images/engeneering-1.webp" },
                    { src: "/images/engeneering-2.webp" },
                    { src: "/images/engeneering-3.webp" },
                    { src: "/images/engeneering-4.webp" },
                    { src: "/images/engeneering-5.webp" },
                    { src: "/images/engeneering-6.webp" },
                    { src: "/images/engeneering-7.webp" },
                    ]}
                />

                <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer" onClick={() => setOpen3(true)}>
                    <Image
                        src="/images/engeneering-back.webp"
                        fill
                        style={{ objectFit: "cover" }}
                        className=" mix-blend-luminosity rounded-2xl opacity-50"
                    />
                    <Image
                        src="/images/engeneering-front.webp"
                        fill
                        style={{ objectFit: "cover" }}
                        className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                    />
                    <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Engineering services</h3>
                </div>
                </div>

                
                {/*<div className="card">

                    <Lightbox
                        open={open4}
                        close={() => setOpen4(false)}
                        slides={[
                        { src: "/images/labor-1.webp" },
                        { src: "/images/labor-2.webp" },
                        { src: "/images/labor-3.webp" },
                        { src: "/images/labor-4.webp" },
                        { src: "/images/labor-5.webp" },
                        ]}
                    />

                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer" onClick={() => setOpen4(true)}>
                        <Image
                            src="/images/labor-back.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/labor-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Labor Hire</h3>
                    </div>
                </div>*/}

                <div className="card">

                    <Lightbox
                        open={open5}
                        close={() => setOpen5(false)}
                        slides={[
                        { src: "/images/signage-1.webp" },
                        { src: "/images/signage-2.webp" },
                        { src: "/images/signage-3.webp" },
                        ]}
                    />

                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer" onClick={() => setOpen5(true)}>
                        <Image
                            src="/images/signage-totem-1-back.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/signage-totem-1-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Signage</h3>
                    </div>
                </div>

                <div className="card">

                    <Lightbox
                        open={open6}
                        close={() => setOpen6(false)}
                        slides={[
                        { src: "/images/40ft-lelato-render-1.webp" },
                        { src: "/images/40ft-lelato-render-2.webp" },
                        { src: "/images/20ft-lelato-render-1.webp" },
                        { src: "/images/kispad-render-1.webp" },
                        ]}
                    />

                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer" onClick={() => setOpen6(true)}>
                        <Image
                            src="/images/container-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className=" mix-blend-luminosity rounded-2xl opacity-50"
                        />
                        <Image
                            src="/images/container-front.webp"
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:mix-blend-luminosity mix-blend-normal hover:mix-blend-normal md:grayscale-0 grayscale hover:grayscale hover:scale-105 rounded-2xl md:opacity-50 opacity-100 hover:opacity-100 transition-all duration-200"
                        />
                        <h3 className="absolute right-4 bottom-2 z-10 text-2xl font-switzer font-bold uppercase text-white text-right">Mobile container</h3>
                    </div>
                </div>
                
                
            </div>
        </section>
    )
}