import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Studio140() {
  const group = useRef();
  const { scene, nodes } = useGLTF("/3D/studio-bed-140.gltf");

  console.log(nodes);



  return <primitive object={scene} ref={group} dispose={null} />;
}


