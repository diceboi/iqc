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
            className={`min-w-6 min-h-6 z-50 ${
              isMobileMenuOpen ? "hidden" : "block"
            }`}
          />
          <TfiClose
            className={`min-w-6 min-h-6 z-50 ${
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