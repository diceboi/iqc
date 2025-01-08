import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Lelato40ft1({ chairColor, interiorColor, containerColor }) {
  const group = useRef();
  const { scene, nodes } = useGLTF("/3D/lelato-40ft-1.gltf");

  console.log(nodes);

  useEffect(() => {
    scene.traverse((node) => {
      if (node.isMesh) {
        // Check if the name falls within the range Body97 to Body118
        const match = node.name.match(/^Body(\d+)$/);
        if (match) {
          const id = parseInt(match[1], 10);
          if (id >= 97 && id <= 118) {
            node.material = node.material.clone(); // Ensure unique material
            node.material.color.set(chairColor); // Apply chair color
          }
          if (id === 88 || id === 237 || id === 1043) {
            node.material = node.material.clone(); // Ensure unique material
            node.material.color.set(interiorColor); // Apply other color
          }
          if (id === 77 || id === 78 || id === 81 || id === 82 || id === 87 || id === 94 || id === 96 || id === 119 || id === 238 || id === 1020 || id === 1019 || id === 1010 || id === 1022 || id === 1011 || id === 1029 || id === 1030 || id === 1031 || id === 1032 || id === 1033 || id === 1034 || id === 1035 || id === 1036 || id === 1037 || id === 1038 || id === 1039 || id === 1040 || id === 1041 || id === 1042 || id === 1027 || id === 1028 || id === 3001 || id === 4001 || id === 5001 || id === 6001 || id === 8001 || id === 1025 || id === 1026 || id === 1008 || id === 1 || id === 1004 || id === 1001 || id === 1005 || id === 1002 || id === 1006 || id === 1003 || id === 1007 || id === 1068 || id === 1071 || id === 1021 || id === 1014 || id === 1016 || id === 1023 || id === 1024 || id === 1012 || id === 1013 || id === 1015 || id === 1017 || id === 83 || id === 1072 || id === 1074 || id === 1018 || id === 1009 || id === 1053 || id === 1054 || id === 1046 || id === 1058 || id === 1065 || id === 1066 || id === 1044 || id === 1045 || id === 1047 || id === 1050 || id === 1051 || id === 1052 || id === 1047 || id === 1048 || id === 1049 || id === 1055 || id === 1061 || id === 1067 || id === 1064 || id === 1063 || id === 1060 || id === 1059 || id === 1062 || id === 1056 || id === 1057) {
            node.material = node.material.clone(); // Ensure unique material
            node.material.color.set(containerColor); // Apply other color
          }
        }
      }
    });
  }, [chairColor, interiorColor, containerColor, scene]);

  return <primitive object={scene} ref={group} dispose={null} />;
}


