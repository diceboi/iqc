"use client";

import Image from "next/image";
import Link from "next/link";
import MainButton from "./UI/MainButton";
import { useRef, useEffect, useContext, useState } from "react";
import { Context } from "../Context";
import { motion } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import Modal from "./UI/Modal";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function MainNav() {
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

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  // Create a ref for the mobile navigation
  const mobileNavRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Ensure click is outside both the mobile menu and the burger icon
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setMobileMenuClose(); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setMobileMenuClose]);

  const mobileNavVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
    <Modal
        openstate={openPopup}
        onClose={() => togglePopup(null)}
      >
        <>

        {form === "assembly" && (
            <div className="space-y-8">
              <h2 className="text-[--blue] font-bold text-2xl">Assembly</h2>
              <p>We offer mechanical and sub-assembly production, with flexibility, quality and traceability. In the process, we work closely with our customer to explore the usage conditions, standard specifications, environment, compatibility of electronics, safety and sustainability aspects.</p>
              <MainButton
                text={"Gallery"}
                icon={""}
                link={""}
                classname={'self-center w-fit'}
                onclick={() => setOpen(true)}
              />
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
            </div>
          )}

        {form === "cablemanufacturing" && (
            <div className="space-y-8">
              <h2 className="text-[--blue] font-bold text-2xl">Cable manufacturing</h2>
              <p>Our company offers manual and mechanical cutting, blanking, crimping of cables and wires, shrink tubing of cable ends. We are able to label shrink tubes. Our processing range consists from 0.14mm to 10mm. We use individual packaging, sets or sizes according to the needs of our customers.</p>
              <MainButton
                text={"Gallery"}
                icon={""}
                link={""}
                classname={'self-center w-fit'}
                onclick={() => setOpen1(true)}
              />
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
            </div>
          )}

          {form === "metalworking" && (
            <div className="space-y-8">
              <h2 className="text-[--blue] font-bold text-2xl">Metal working</h2>
              <p>We offer a wide range of sheet and profile processing services, such as CNC punching and bending, laser cutting, hand and robot welding. We are also able to offer surface treatment solutions: anodizing and powder coating</p>
              <MainButton
                text={"Gallery"}
                icon={""}
                link={""}
                classname={'self-center w-fit'}
                onclick={() => setOpen2(true)}
              />
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
            </div>
          )}

          {form === "engeneering" && (
            <></>
          )}

          {form === "signage" && (
            <div className="space-y-8">
              <h2 className="text-[--blue] font-bold text-2xl">Signage</h2>
              <p><b>TOTEM POLE</b> - Our information totem poles are available in normal, thin, double-sided and outdoor versions with touch screen displays. Their basic color is black, but they can also be ordered in individual colors, with a logo, and with internal lighting. Tempered safety glass protects the screen against possible damage. Its base includes a 10 mm steel plate for stability. They can be used perfectly in shops, showrooms, public areas and exhibitions. If required, it can be supplemented with a printer, camera, bar code, QR code reader.</p>
              <p><b>WALL DISPLAY</b> - Our digital signage monitors can be operated 24/7. They are available in both standard and interactive/touch screen versions. The brightness of our displays is much higher than conventional television sets. They can be used mounted on the wall in horizontal and vertical versions, as part of an information column or kiosk, or &quot;boxed&quot; for safety reasons. We also offer vandal-proof and smart solutions for outdoor use behind weatherproof, safety tempered glass.</p>
              <p><b>KIOSK </b> - With the help of the digital kiosk or information desk, your customers can easily get information about your products and services. Our easy-to-transport, durable, thin, steel-built kiosks are recommended for exhibitions and stores where easy display portability is important. If required, it can be supplemented with a printer, camera, bar code, QR code reader.</p>
              <MainButton
                text={"Gallery"}
                icon={""}
                link={""}
                classname={'self-center w-fit'}
                onclick={() => setOpen5(true)}
              />
                <Lightbox
                    open={open5}
                    close={() => setOpen5(false)}
                    slides={[
                    { src: "/images/signage-1.webp" },
                    { src: "/images/signage-2.webp" },
                    { src: "/images/signage-3.webp" },
                    ]}
                />
            </div>
          )}


          {form === "mobilecontainer" && (
            <div className="space-y-8">
              <h2 className="text-[--blue] font-bold text-2xl">Mobile container</h2>
              <p>We developed a modern and easy-to-design covered grandstand that can be produced by converting a 40-foot container. The stand is made in two versions, 53-person stands, which can be used individually or by placing several stands, and 60-person stands, which can be lined up and placed directly next to each other. The stands are made of high-strength steel, which provides  a long service life. The stands offer sports clubs and spectators comfortable and covered seats with an excellent view of the playing field. Our modular stand system is the best solution for implementing (covered) stands due to the short construction time. We also offer long-term lease services with purchase option, reducing the initial investment cost.</p>
              <div className="flex flex-nowrap items-center gap-4">
                <MainButton
                  text={"3D Configurator"}
                  icon={""}
                  link={"/container-configurator"}
                  onclick={() => togglePopup()}
                  classname={'self-center w-fit'}
                />
                <MainButton
                  text={"PDF Brossure"}
                  icon={""}
                  link={"/container-configurator-brossure.pdf"}
                  classname={'self-center w-fit'}
                />
              </div>
            </div>
          )}


          {form === "cert" && (
              
              <div className="space-y-8">
                <Image
                  src="/certification1.png"
                  width={1920}
                  height={1080}
                  alt="certification1" />
                  <Image
                  src="/certification2.png"
                  width={1920}
                  height={1080}
                  alt="certification2" />
              </div>
            
          )}


        </>
      </Modal>
    <section className="relative w-full z-50 py-8">
      <nav className="flex container mx-auto flex-nowrap items-center gap-8 w-full bg-[--bgwhite]">
        <div className="flex flex-nowrap justify-start items-center gap-4 border-r border-[--lightgrey] min-w-fit pr-4">
          <Link href="/">
            <Image
              src="/images/IQC_logo.png"
              width={100}
              height={100}
              alt={"logo"}
              className="lg:min-w-[100px] max-w-[75px]"
            />
          </Link>
          <h3 className="font-bold min-w-fit text-[--grey] text-xs">
            Plan it,<br></br>Make it,<br></br>Deliver it
          </h3>
        </div>
        <div
          className="block xl:hidden cursor-pointer z-50"
          onClick={(event) => {
            event.stopPropagation(); // Prevent the click from propagating
            toggleMobileMenu(); // Toggle the menu
          }}
        >
          <CiMenuBurger
            className={`min-w-6 min-h-6 ${
              isMobileMenuOpen ? "hidden" : "block"
            }`}
          />
          <TfiClose
            className={`min-w-6 min-h-6 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          />
        </div>

        <ul className="xl:flex  hidden gap-6 text-[--grey] font-bold justify-between h-full min-w-fit text-sm">
          <li onClick={() => {setForm("assembly"), togglePopup("assembly");}} className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">
            Assembly
          </li>
          <li onClick={() => {setForm("cablemanufacturing"), togglePopup("cablemanufacturing");}} className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">
            Cable manufacturing
          </li>
          <li onClick={() => {setForm("metalworking"), togglePopup("metalworking");}} className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">
            Metal working
          </li>
          <li onClick={() => {setForm("engeneering"), togglePopup("engeneering");}} className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">
            Engeneering services
          </li>
          <li onClick={() => {setForm("signage"), togglePopup("signage");}} className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">
            Signage
          </li>
          <li onClick={() => {setForm("mobilecontainer"), togglePopup("mobilecontainer");}} className="min-w-fit text-center hover:text-[--blue] hover:underline cursor-pointer">
            Mobile container
          </li>
        </ul>
        <div className="flex flex-nowrap items-center justify-end w-full justify-self-end">
          <MainButton
            text={"Contact"}
            link={"mailto:hello@iqc-services.hu"}
            icon={""}
          />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.nav
        id="mobilenav"
        ref={mobileNavRef} // Attach the ref here
        className="absolute top-[100px] left-0 w-full bg-[--bgwhite] z-40 p-4"
        initial="hidden"
        animate={isMobileMenuOpen ? "visible" : "hidden"}
        variants={mobileNavVariants}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col gap-4 text-[--grey] font-bold container mx-auto lg:px-4">
          <li onClick={() => {setForm("assembly"), togglePopup("assembly");}} className="hover:text-[--blue] cursor-pointer">Assembly</li>
          <li onClick={() => {setForm("cablemanufacturing"), togglePopup("cablemanufacturing");}} className="hover:text-[--blue] cursor-pointer">
            Cable manufacturing
          </li>
          <li onClick={() => {setForm("metalworking"), togglePopup("metalworking");}} className="hover:text-[--blue] cursor-pointer">Metal working</li>
          <li onClick={() => {setForm("engeneering"), togglePopup("engeneering");}} className="hover:text-[--blue] cursor-pointer">
            Engineering services
          </li>
          <li onClick={() => {setForm("signage"), togglePopup("signage");}} className="hover:text-[--blue] cursor-pointer">Signage</li>
          <li onClick={() => {setForm("mobilecontainer"), togglePopup("mobilecontainer");}} className="hover:text-[--blue] cursor-pointer">
            Mobile container
          </li>
        </ul>
      </motion.nav>
    </section>
    </>
  );
}