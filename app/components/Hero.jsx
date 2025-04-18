"use client"

import { FaPlay } from "react-icons/fa";

import { motion } from "framer-motion"
import MainButton from "./UI/MainButton"
import SecondaryButton from "./UI/SecondaryButton";
import { useState } from "react";
import YoutubeModal from "./UI/YoutubeModal";

export default function Hero() {

  const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

  return (
    <section className='container mx-auto relative flex flex-col items-center justify-center pb-20 border-t border-x border-[#ddd] cross-top-left'>
        <motion.video
          className='absoluite w-full lg:h-[50vh] h-[60vh] top-0 left-0 object-cover opacity-30'
          src={require('@/public/IQC.mp4')}
          autoPlay
          muted
          loop
          whileInView={{ }}
        />
        <div className="absolute w-full lg:h-[50vh] h-[60vh] left-0 top-0 bg-[#fff] mix-blend-color"></div>

        <div className='absolute container m-auto flex flex-col justify-center items-center lg:h-[50vh] h-[60vh]'>
          <div className="flex flex-col gap-5 justify-center items-center font-switzer">
            <div className="flex md:flex-row flex-col md:gap-4 gap-0">
              <h1 className='lg:text-7xl text-5xl font-bold text-bold uppercase font-switzer'>build</h1>
              <h1 className='lg:text-7xl text-5xl font-bold text-bold uppercase font-switzer'>something</h1>
            </div>      
            <div className="flex md:flex-row flex-col md:gap-8 gap-2 -mt-7 uppercase">
              <div className="flex flex-col gap-0 overflow-hidden lg:h-20 md:h-12 h-12 text-[--blue] md:text-right text-left font-xl font-bold">

                <motion.div 
                  animate = {{y: [12,12,-60,-60,-132,-132,-204,-204,-276,-276,12,12]}}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="-mt-[10px] lg:block hidden"
                >
                <h1 className="text-7xl font-bold text-[--blue] uppercase font-switzer">
                  magical
                </h1>
                <h1 className="text-7xl font-bold text-[--blue] uppercase font-switzer">
                  Technical
                </h1>
                <h1 className="text-7xl font-bold text-[--blue] uppercase font-switzer">
                  special
                </h1>
                <h1 className="text-7xl font-bold text-[--blue] uppercase font-switzer">
                  metal
                </h1>
                <h1 className="text-7xl font-bold text-[--blue] uppercase font-switzer">
                  innovative
                </h1>
                </motion.div>

                <motion.div 
                  animate = {{y: [7,7,-42,-42,-90,-90,-138,-138,-186,-186,7,7]}}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="md:-mt-[5px] -mt-[5px]"
                >
                <h1 className="text-5xl font-bold text-[--blue] uppercase font-switzer">
                  magical
                </h1>
                <h1 className="text-5xl font-bold text-[--blue] uppercase font-switzer">
                  fun
                </h1>
                <h1 className="text-5xl font-bold text-[--blue] uppercase font-switzer">
                  special
                </h1>
                <h1 className="text-5xl font-bold text-[--blue] uppercase font-switzer">
                  metal
                </h1>
                <h1 className="text-5xl font-bold text-[--blue] uppercase font-switzer">
                  innovative
                </h1>
                </motion.div>

              </div>
              <h1 className="lg:text-7xl text-5xl font-bold text-bold uppercase font-switzer">together</h1>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 items-center justtify-center pt-10">
              <YoutubeModal isOpen={isModalOpen} closeModal={closeModal} />
              <MainButton text={"Watch the video"} link={""} onclick={openModal} icon={<FaPlay />} />
            </div>
            
          </div>
          <div className='flex flex-row'>
          </div>  
        </div>
    </section>
  )
}
