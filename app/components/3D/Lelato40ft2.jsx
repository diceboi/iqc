import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Lelato40ft2({ chairColor, interiorColor, containerColor }) {
  const group = useRef();
  const { scene, nodes } = useGLTF("/3D/lelato-40ft-2.gltf");

  console.log(nodes);

  useEffect(() => {
    scene.traverse((node) => {
      if (node.isMesh) {
        // Check if the name falls within the range Body97 to Body118
        const match = node.name.match(/^Body(\d+)$/);
        if (match) {
          const id = parseInt(match[1], 10);
          if (id >= 151 && id <= 203 || id >= 227 && id <= 231 || id >=235 && id <= 236 ) {
            node.material = node.material.clone(); // Ensure unique material
            node.material.color.set(chairColor); // Apply chair color
          }
          if (id === 1066 || id === 209 || id === 208 || id === 207 || id === 1144 || id === 213 || id === 212 || id === 211 || id === 224 || id === 225 || id === 226 || id === 1145 || id === 1159) {
            node.material = node.material.clone(); // Ensure unique material
            node.material.color.set(interiorColor); // Apply other color
          }
          if (id === 77 || id === 78 || id === 81 || id === 82 || id === 87 || id === 94 || id === 96 || id === 119 || id === 238 || id === 1020 || id === 1019 || id === 1010 || id === 1022 || id === 1011 || id === 1029 || id === 1030 || id === 1031 || id === 1032 || id === 1033 || id === 1034 || id === 1035 || id === 1036 || id === 1037 || id === 1038 || id === 1039 || id === 1040 || id === 1041 || id === 1042 || id === 1027 || id === 1028 || id === 3001 || id === 4001 || id === 5001 || id === 6001 || id === 8001 || id === 1025 || id === 1026 || id === 1008 || id === 1 || id === 1004 || id === 1001 || id === 1005 || id === 1002 || id === 1006 || id === 1003 || id === 1007 || id === 1068 || id === 1071 || id === 1021 || id === 1014 || id === 1016 || id === 1023 || id === 1024 || id === 1012 || id === 1013 || id === 1015 || id === 1017 || id === 83 || id === 1072 || id === 1074 || id === 1018 || id === 1009 || id === 1053 || id === 1054 || id === 1046 || id === 1058 || id === 1065 || id === 1066 || id === 1044 || id === 1045 || id === 1047 || id === 1050 || id === 1051 || id === 1052 || id === 1047 || id === 1048 || id === 1049 || id === 1055 || id === 1061 || id === 1067 || id === 1064 || id === 1063 || id === 1060 || id === 1059 || id === 1062 || id === 1056 || id === 1057 || id === 1069 || id === 1085 || id === 1087 || id === 1088 || id === 1089 || id === 1103 || id === 1111 || id === 1113 || id === 1112 || id === 1084 || id === 1086 || id === 1043 || id === 1102 || id === 1101 || id === 1099 || id === 1100 || id === 223 || id === 221 || id === 216 || id === 218 || id === 217 || id === 215 || id === 232 || id === 234 || id === 233 || id === 219 || id === 220 || id === 222 || id === 1110 || id === 1109 || id === 1107 || id === 1106 || id === 1104 || id === 1105 || id === 1098 || id === 1092 || id === 1090 || id === 1093 || id === 1095 || id === 1094 || id === 1097 || id === 1091 || id === 1096 || id === 1114 || id === 2 || id === 2001 || id === 1070 || id === 1073 || id === 1075 || id === 1006 || id === 1076 || id === 1077 || id === 1079 || id === 1078 || id === 1080 || id === 1081 || id === 1083 || id === 1082 || id === 1116 || id === 1134 || id === 1132 || id === 1133 || id === 1135 || id === 1136 || id === 1137 || id === 1138 || id === 1139 || id === 1141 || id === 1117 || id === 1115 || id === 1118 || id === 1120 || id === 1122 || id === 1119 || id === 1121 || id === 1123 || id === 1125 || id === 1124 || id === 1131 || id === 1155 || id === 1160 || id === 1150 || id === 1126 || id === 1127 || id === 1128 || id === 1130 || id === 1129 || id === 1153 || id === 1154 || id === 1152 || id === 1151 || id === 1149 || id === 1148 || id === 1147 || id === 1161 || id === 1156 || id === 1146 || id === 1140 || id === 1143) {
            node.material = node.material.clone(); // Ensure unique material
            node.material.color.set(containerColor); // Apply other color
          }
        }
      }
    });
  }, [chairColor, interiorColor, containerColor, scene]);

  return <primitive object={scene} ref={group} dispose={null} />;
}


