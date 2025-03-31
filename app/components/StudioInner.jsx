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
import Studio140 from "./3D/Studio140";
import { useProgress } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}%</Html>;
}

export default function StudioInner() {
  const { model, setModel } = useContext(Context);

  useEffect(() => {
    setModel('studio-bed-140')
  },[setModel])

  return (
    <div className="h-full">
      {/* A teljes Canvas újrarenderelése modellváltáskor */}
      <CanvasWrapper
        key={model}
        model={model}
      />
    </div>
  );
}

function CanvasWrapper({ model }) {
  return (
    <Canvas
      shadows
      gl={{ antialias: true, toneMappingExposure: 0.3}}
      dpr={[1, 2]}
      className="bg-white border border-[--lightgrey] w-full min-h-fit"
      camera={{
        position: [6, 5, 5],
        fov: 100,
      }}
    >
      {/* Lights */}

      <directionalLight
        position={[5, 8, 6]}
        intensity={3}
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
      <directionalLight
        position={[-5, -8, -6]}
        intensity={3}
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
      <Environment preset="warehouse" intensity={1} />



      {/* Model */}
      <Suspense fallback={<Loader />}>
        {model === "studio-bed-140" && (
          <Studio140 />
        )}
      </Suspense>

      {/* Orbit Controls */}
      <OrbitControls enableDamping dampingFactor={0.1} />
    </Canvas>
  );
}