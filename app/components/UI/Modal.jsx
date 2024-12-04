"use client"

import { IoMdClose } from "react-icons/io";

export default function Modal({ isOpen, closeModal }) {
    return (
        isOpen && (
          <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full backdrop-blur-md bg-black bg-opacity-50 z-50" onClick={closeModal}>
            <div className="relative w-11/12 lg:w-6/12 h-[50vh] aspect-w-16 aspect-h-9 bg-[--navy] p-8 z-50 overflow-hidden rounded-md" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-0 right-0" onClick={closeModal}>
                    <IoMdClose className=" w-6 h-6 text-[--grey] bg-white rounded-full"/>
                </button>
                <iframe 
                    className='w-full h-full' 
                    src="https://www.youtube.com/embed/E-LHJqcRzto?si=pzQQlVO9SLNkv4BU" 
                    title="IQC Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </div>
          </div>
        )
      );
};