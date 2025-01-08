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
        <div id="configurator-ui" className="absolute bottom-0 left-0 flex lg:flex-row flex-col lg:gap-8 gap-4 items-start p-2 z-10 bg-white m-2 bg-opacity-75 backdrop-blur-md rounded-sm">
          {/* Color Pickers */}

          {/*<ColorPicker 
          color={chairColor} 
          theme={{
            background: 'lightgrey',
            inputBackground: 'grey',
            borderColor: 'darkgrey',
            borderRadius: '8px',
            color: 'black',
            width: '320px'
          }}
          onChange={chairColor => setChairColor(chairColor.hex)} />*/}

          <div className="flex flex-nowrap items-center justify-center gap-2">
            <label className="flex flex-nowrap items-center gap-2 lg:text-sm text-xs">
              Chair Color:{" "}
              <input
                type="color"
                value={chairColor}
                onChange={(e) => setChairColor(e.target.value)}
              />
            </label>
          </div>

          <div className="flex flex-nowrap items-center justify-center gap-2">
            <label className="flex flex-nowrap items-center gap-2 lg:text-sm text-xs">
              Interior Color:{" "}
              <input
                type="color"
                value={interiorColor}
                onChange={(e) => setInteriorColor(e.target.value)}
              />
            </label>
          </div>

          <div className="flex flex-nowrap items-center justify-center gap-2">
            <label className="flex flex-nowrap items-center gap-2 lg:text-sm text-xs">
              Container Color:{" "}
              <input
                type="color"
                value={containerColor}
                onChange={(e) => setContainerColor(e.target.value)}
              />
            </label>
          </div>

          <div className="flex flex-nowrap items-center justify-center gap-2">
            <label className="flex flex-nowrap items-center gap-2 lg:text-sm text-xs">
              Trial RAL:{" "}
              <button
                onClick={(e) => setContainerColor("#af1d26")}
                className="bg-[#af1d26] text-white px-2 py-1 rounded-md"
              >RAL 3003</button>
            </label>
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
