"use client"

import dynamic from "next/dynamic"
import { useState } from "react";
import { PiMouseLeftClickFill, PiMouseRightClickFill, PiMouseMiddleClickFill } from "react-icons/pi";

const ConfiguratorInner = dynamic(() => import('../components/ConfiguratorInner'), { ssr: true })

export default function ConfiguratorPage() {

  const [chairColor, setChairColor] = useState("#83BBFF");
  const [interiorColor, setInteriorColor] = useState("#E6EAF7");
  const [containerColor, setContainerColor] = useState("#7884CA")

  console.log("Chair Color:", chairColor);
  console.log("Interior Color:", interiorColor);
  console.log("Container Color:", containerColor);

  return (
    <div className="container m-auto h-[80vh]">
      <div className="relative w-full h-full">
        <div id="configurator-ui" className="absolute bottom-0 left-0 flex lg:flex-row flex-col lg:gap-8 gap-4 items-start p-2 z-10 bg-white m-2 bg-opacity-75 backdrop-blur-md">
          {/* Color Pickers */}

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
        
        <ConfiguratorInner chairColor={chairColor} interiorColor={interiorColor} containerColor={containerColor}/>
      </div>
    </div>
  )
}
