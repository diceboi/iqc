"use client"

import dynamic from "next/dynamic"
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Context } from "../Context";
import { PiMouseLeftClickFill, PiMouseRightClickFill, PiMouseMiddleClickFill } from "react-icons/pi";
import ColorPicker from 'react-pick-color';

const ConfiguratorInner = dynamic(() => import('../components/ConfiguratorInner'), { ssr: true })

export default function ConfiguratorPage() {

  const { model, setModel } = useContext(Context);
  const router = useRouter();

  const [chairColor, setChairColor] = useState("#83BBFF");
  const [interiorColor, setInteriorColor] = useState("#E6EAF7");
  const [containerColor, setContainerColor] = useState("#7884CA")

  console.log("Chair Color:", chairColor);
  console.log("Interior Color:", interiorColor);
  console.log("Container Color:", containerColor);

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  return (
    <div className="container m-auto h-[80vh]">
      <div className="relative w-full h-full">
        <div id="configurator-ui" className="absolute bottom-0 left-0 flex lg:flex-row flex-col lg:gap-8 gap-4 items-center p-2 z-10 bg-white m-2 bg-opacity-75 backdrop-blur-md rounded-sm">

          <div className="flex flex-col gap-2">
          <h4>Chair Color:</h4>

          <div className="grid grid-cols-7">
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#5f5f5f]" onClick={(e) => (setChairColor("#5f5f5f"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#2e2e2e]" onClick={(e) => (setChairColor("#2e2e2e"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#2cc5dc]" onClick={(e) => (setChairColor("#2cc5dc"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#1f2986]" onClick={(e) => (setChairColor("#1f2986"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#e4e4e4]" onClick={(e) => (setChairColor("#e4e4e4"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#000]" onClick={(e) => (setChairColor("#000"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#85f07a]" onClick={(e) => (setChairColor("#85f07a"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#308527]" onClick={(e) => (setChairColor("#308527"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#d42e2e]" onClick={(e) => (setChairColor("#d42e2e"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#efe230]" onClick={(e) => (setChairColor("#efe230"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#895d1e]" onClick={(e) => (setChairColor("#895d1e"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#e3842c]" onClick={(e) => (setChairColor("#e3842c"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#752ce3]" onClick={(e) => (setChairColor("#752ce3"))}></button>
          </div>
          </div>

          <div className="flex flex-col gap-2">
          <h4>Interior Color:</h4>

          <div className="grid grid-cols-7">
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#5f5f5f]" onClick={(e) => (setInteriorColor("#5f5f5f"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#2e2e2e]" onClick={(e) => (setInteriorColor("#2e2e2e"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#2cc5dc]" onClick={(e) => (setInteriorColor("#2cc5dc"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#1f2986]" onClick={(e) => (setInteriorColor("#1f2986"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#e4e4e4]" onClick={(e) => (setInteriorColor("#e4e4e4"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#000]" onClick={(e) => (setInteriorColor("#000"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#85f07a]" onClick={(e) => (setInteriorColor("#85f07a"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#308527]" onClick={(e) => (setInteriorColor("#308527"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#d42e2e]" onClick={(e) => (setInteriorColor("#d42e2e"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#efe230]" onClick={(e) => (setInteriorColor("#efe230"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#895d1e]" onClick={(e) => (setInteriorColor("#895d1e"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#e3842c]" onClick={(e) => (setInteriorColor("#e3842c"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#752ce3]" onClick={(e) => (setInteriorColor("#752ce3"))}></button>
          </div>
          </div>

          <div className="flex flex-col gap-2">
          <h4>Exterior Color:</h4>

          <div className="grid grid-cols-7">
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#5f5f5f]" onClick={(e) => (setContainerColor("#5f5f5f"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#2e2e2e]" onClick={(e) => (setContainerColor("#2e2e2e"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#2cc5dc]" onClick={(e) => (setContainerColor("#2cc5dc"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#1f2986]" onClick={(e) => (setContainerColor("#1f2986"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#e4e4e4]" onClick={(e) => (setContainerColor("#e4e4e4"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#000]" onClick={(e) => (setContainerColor("#000"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#85f07a]" onClick={(e) => (setContainerColor("#85f07a"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#308527]" onClick={(e) => (setContainerColor("#308527"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#d42e2e]" onClick={(e) => (setContainerColor("#d42e2e"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#efe230]" onClick={(e) => (setContainerColor("#efe230"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#895d1e]" onClick={(e) => (setContainerColor("#895d1e"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#e3842c]" onClick={(e) => (setContainerColor("#e3842c"))}></button>
            <button className="flex flex-nowrap w-8 h-8 rounded-sm border focus:border-4 focus:border-[--blue] bg-[#752ce3]" onClick={(e) => (setContainerColor("#752ce3"))}></button>
          </div>
          </div>

        </div>

        <div id="helper-ui" className="absolute top-0 left-0 flex lg:flex-row gap-4 z-10 p-4">
          <div className="flex flex-nowrap items-center gap-1">
            <PiMouseLeftClickFill className="min-w-6 min-h-6 text-[--blue]"/>
            <p className="lg:text-sm text-xs">Rotating</p>
          </div>
          <div className="flex flex-nowrap items-center gap-1">
            <PiMouseRightClickFill className="min-w-6 min-h-6 text-[--blue]"/>
            <p className="lg:text-sm text-xs">Moving</p>
          </div>
          <div className="flex flex-nowrap items-center gap-1">
            <PiMouseMiddleClickFill className="min-w-6 min-h-6 text-[--blue]"/>
            <p className="lg:text-sm text-xs">Zooming</p>
          </div>
        </div>

        <div id="model-selector" className="absolute top-0 right-0 flex lg:flex-row items-center gap-4 z-10 p-4">
          <p className="lg:text-sm text-xs">Select model:</p>
          <select onChange={handleModelChange} value={model} className="border border-[--lightgrey] rounded-md p-2">
            <option value="lelato-20ft">Grandstand 20ft</option>
            <option value="kispad-20ft">Bench 20ft</option>
            <option value="lelato-40ft-1">Grandstand 40ft v1</option>
            <option value="lelato-40ft-2">Grandstand 40ft v2</option>
          </select>
        </div>
        
        <ConfiguratorInner chairColor={chairColor} interiorColor={interiorColor} containerColor={containerColor}/>
      </div>
    </div>
  )
}
