'use client'

import Image from "next/image"

import * as React from "react";
import { useState, useContext } from "react";
import { Context } from "../Context";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Services() {

    const {
        isMobileMenuOpen,
        toggleMobileMenu,
        setMobileMenuClose,
        setMobileMenuOpen,
        openPopup,
        togglePopup,
        form,
        setForm
      } = useContext(Context);

    return(
        <section className="relative container mx-auto border-x border-[#ddd] py-20 cross-bottom-left">            
            <div className="ruled-grid lg:grid-cols-4 grid-cols-1 grid-rows-2 min-h-[500px] border-b border-[#ddd] cross-top">
                <div className="card flex items-start justify-start">
                <div className="absolute -left-0 lg:top-0 top-0 -translate-y-1/2 w-[30vw] h-[50vh] bg-[--blue] blur-3xl rounded-full opacity-20"></div>
                    <h2 className="lg:text-5xl text-3xl font-switzer font-bold uppercase text-[--blue]">What we do?</h2>
                </div>
                <div className="card">
                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer"  onClick={() => {setForm("assembly"), togglePopup("assembly");}}>
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
                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer"  onClick={() => {setForm("cablemanufacturing"), togglePopup("cablemanufacturing");}}>
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
                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer" onClick={() => {setForm("metalworking"), togglePopup("metalworking");}}>
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
                <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer"  onClick={() => {setForm("engeneering"), togglePopup("engeneering");}}>
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
                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer" onClick={() => {setForm("signage"), togglePopup("signage");}}>
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

                    <div className="relative bg-[--blue] w-full h-full rounded-2xl overflow-hidden cursor-pointer" onClick={() => {setForm("mobilecontainer"), togglePopup("mobilecontainer");}}>
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