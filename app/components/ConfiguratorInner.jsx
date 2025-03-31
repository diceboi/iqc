"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useContext, useEffect, useRef } from "react";
import { Context } from "../Context";
import {
  Html,
  OrbitControls,
  Environment,
  Reflector,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import Lelato20ft from "./3D/Lelato20ft";
import Kispad20ft from "./3D/Kispad20ft";
import Lelato40ft1 from "./3D/Lelato40ft1";
import Lelato40ft2 from "./3D/Lelato40ft2";
import { useProgress } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}%</Html>;
}

export default function ConfiguratorInner({
  chairColor,
  interiorColor,
  containerColor,
}) {
  const { model } = useContext(Context);

  return (
    <div className="h-full">
      {/* A teljes Canvas újrarenderelése modellváltáskor */}
      <CanvasWrapper
        key={model}
        model={model}
        chairColor={chairColor}
        interiorColor={interiorColor}
        containerColor={containerColor}
      />
    </div>
  );
}

function CanvasWrapper({ model, chairColor, interiorColor, containerColor }) {
  return (
    <Canvas
      shadows
      gl={{ antialias: true, toneMappingExposure: 1 }}
      dpr={[1, 2]}
      className="bg-white border border-[--lightgrey] w-full min-h-fit"
      camera={{
        position: [6, 5, 5],
        fov: 50,
      }}
    >
      {/* Lights */}
      <ambientLight intensity={1} color={"blue"} />
      <directionalLight
        position={[5, 8, 6]}
        intensity={10}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* HDRI Environment */}
      <Environment preset="forest" intensity={1} />

      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={20}
        />
      </EffectComposer>

      {/* Model */}
      <Suspense fallback={<Loader />}>
        {model === "lelato-20ft" && (
          <Lelato20ft
            chairColor={chairColor}
            interiorColor={interiorColor}
            containerColor={containerColor}
          />
        )}
        {model === "kispad-20ft" && (
          <Kispad20ft
            chairColor={chairColor}
            interiorColor={interiorColor}
            containerColor={containerColor}
          />
        )}
        {model === "lelato-40ft-1" && (
          <Lelato40ft1
            chairColor={chairColor}
            interiorColor={interiorColor}
            containerColor={containerColor}
          />
        )}
        {model === "lelato-40ft-2" && (
          <Lelato40ft2
            chairColor={chairColor}
            interiorColor={interiorColor}
            containerColor={containerColor}
          />
        )}
      </Suspense>

      {/* Orbit Controls */}
      <OrbitControls enableDamping dampingFactor={0.1} />
    </Canvas>
  );
}