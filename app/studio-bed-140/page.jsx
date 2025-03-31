"use client"

import dynamic from "next/dynamic"
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Context } from "../Context";
import { PiMouseLeftClickFill, PiMouseRightClickFill, PiMouseMiddleClickFill } from "react-icons/pi";
import { TbHandFinger, TbHandTwoFingers, TbInfoCircle } from "react-icons/tb";
import { FaRegHandPeace } from "react-icons/fa";
import ColorPicker from 'react-pick-color';
import StudioInner from "../components/StudioInner";

const ConfiguratorInner = dynamic(() => import('../components/ConfiguratorInner'), { ssr: true })

export default function StudioBedPage() {

  const { model, setModel } = useContext(Context);

    const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  return (
    <div className="container m-auto h-[80vh]">
      <div className="relative w-full h-full">

        <div id="helper-ui" className="absolute top-0 left-0 flex lg:flex-row gap-4 z-10 p-4">
          <div className="flex flex-nowrap items-center gap-1">
            <PiMouseLeftClickFill className="hidden lg:block min-w-6 min-h-6 text-[--blue]"/>
            <TbHandFinger className="block lg:hidden min-w-6 min-h-6 text-[--blue]"/>
            <p className="lg:text-sm text-xs">Rotating</p>
          </div>
          <div className="flex flex-nowrap items-center gap-1">
            <PiMouseRightClickFill className="hidden lg:block min-w-6 min-h-6 text-[--blue]"/>
            <TbHandTwoFingers className="block lg:hidden min-w-6 min-h-6 text-[--blue]"/>
            <p className="lg:text-sm text-xs">Moving</p>
          </div>
          <div className="flex flex-nowrap items-center gap-1">
            <PiMouseMiddleClickFill className="hidden lg:block min-w-6 min-h-6 text-[--blue]"/>
            <FaRegHandPeace className="block lg:hidden min-w-6 min-h-6 text-[--blue]"/>
            <p className="lg:text-sm text-xs">Zooming</p>
          </div>
        </div>

        <div id="model-selector" className="absolute top-12 left-0 flex flex-col items-start gap-2 z-10 p-4">
          <p className="lg:text-sm text-xs">Select model:</p>
          <select onChange={handleModelChange} value={model} className="border border-[--lightgrey] rounded-md p-1">
            <option value="studio-bed-140">Studio Bed 140</option>
          </select>
        </div>
        
        <StudioInner />
      </div>
    </div>
  )
}
