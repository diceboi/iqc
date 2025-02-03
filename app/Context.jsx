'use client'

import { createContext, useState } from "react";
import Modal from "./components/UI/Modal";
import Image from "next/image";
import MainButton from "./components/UI/MainButton";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Context = createContext({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => {},
  setMobileMenuOpen: () => {},
  setMobileMenuClose: () => {},
  model: '',
  setModel: () => {},

  openPopup: null,
  togglePopup: () => {},
  setOpenPopup: () => {},
  form: 'login',
  setForm: () => {},
});

export default function ContextProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [model, setModel] = useState('lelato-20ft');
  const [openPopup, setOpenPopup] = useState(null);
  const [form, setForm] = useState('login');

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  /* Mobile menu */
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const setMobileMenuOpen = () => setIsMobileMenuOpen(true);
  const setMobileMenuClose = () => setIsMobileMenuOpen(false);

  const togglePopup = (popupName) => {
    setOpenPopup((prevPopup) => (prevPopup === popupName ? null : popupName));
  };

  return (
    <Context.Provider value={{
      isMobileMenuOpen,
      toggleMobileMenu,
      setMobileMenuOpen,
      setMobileMenuClose,
      model,
      setModel,

      openPopup,
      togglePopup,
      setOpenPopup,
      form,
      setForm,
    }}>
      {children}
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
            <>
            <div className="space-y-8">
              <h2 className="text-[--blue] font-bold text-2xl">Engeneering services</h2>
              <p>Every electronic product require mechanical components to function properly. This can be the injection-molded casing in the case of a data collector with a simpler structure, or a machine body that ensures complex movement in the case of more complex robots, target machines. In case of innovative products, the implementation of unique functions often requires unique mechanical design. </p>
              <p>The creation of the final product requires the close cooperation of engineering disciplines. We work with industrial design offices to develop product concepts and prototype pieces. As soon as the first mechanical concept is formed by validating all aspects, it is manufactured by using rapid prototyping procedures. The mechanical designers take over the validated, working concept and create a product plan, that can be manufactured, complies with regulations, safe to use, and easy to assemble. The end result is a working prototype with all necessary, validated documentions, ready to produce.</p>
              <MainButton
                text={"Gallery"}
                icon={""}
                link={""}
                classname={'self-center w-fit'}
                onclick={() => setOpen3(true)}
              />
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
            </div>
            </>
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
                  text={"PDF Brossure (HU)"}
                  icon={""}
                  link={"/container-configurator-brossure.pdf"}
                  classname={'self-center w-fit'}
                />
              </div>
            </div>
          )}

          {form === "mobilecontainer2" && (
            <div className="space-y-8">
              <h2 className="text-[--blue] font-bold text-2xl">3D Container Configurator</h2>
              <Image src={'/hun-flag.webp'} width={30} height={12} alt="hun-flag"/>
              <p>Az iQC Services Kft. kifejlesztett egy modern és könnyen kialakítható fedett lelátót, amelyet 40 lábas konténer átalakításával lehet megvalósítani. A lelátót kétféle kivitelben készítjük, 53 fős, amely önállóan egyenként, vagy több darab elhelyezésével is használható, illetve a 60 fős, amely sorolható, közvetlenül egymás mellé tehető. A lelátók nagy szilárdságú acélból készülnek, ami hosszú élettartamot biztosít.</p>
              <p>A lelátók sportklubok és a nézők számára kényelmes és fedett ülőhelyeket kínálnak kiváló kilátással a játéktérre. Az iQC Services Kft. moduláris lelátórendszere a legjobb megoldás (fedett) lelátók megvalósítására a rövid kivitelezési idő miatt.</p>
              <p>Az iQC Services Kft./cégünk a lelátót megvásárlásra vagy bérletre is kínálja. A hosszú távú bérleti szerződés, vásárlási opcióval csökkenti a kezdeti beruházási költségeket és a sportklubnak azonnal megoldást nyújt saját lelátó biztosítására.</p>
              <Image src={'/uk-flag.webp'} width={30} height={12} alt="hun-flag"/>
              <p>We developed a modern and easy-to-design covered grandstand that can be produced by converting a 40-foot container. The stand is made in two versions, 53-person stands, which can be used individually or by placing several stands, and 60-person stands, which can be lined up and placed directly next to each other. The stands are made of high-strength steel, which provides  a long service life. The stands offer sports clubs and spectators comfortable and covered seats with an excellent view of the playing field. Our modular stand system is the best solution for implementing (covered) stands due to the short construction time. We also offer long-term lease services with purchase option, reducing the initial investment cost.</p>
              <div className="flex flex-nowrap items-center gap-4">
                <MainButton
                  text={"PDF Brossure (HU)"}
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
    </Context.Provider>
  );
}