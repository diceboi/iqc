import { useGLTF } from "@react-three/drei"
import { useRef } from "react"

useGLTF.preload("3D/lelato-20ft.gltf")

export default function Model() {

    const group = useRef(null)
    const { nodes, materials, scene } = useGLTF("3D/lelato-20ft.gltf")

    scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true // Árnyék vetése
        node.receiveShadow = true // A modell maga ne fogadjon árnyékot
      }
    })

  return (
    <group ref={group} position={[0, 0, 0]} castShadow>
      <primitive object={scene} receiveShadow />
    </group>
  )
}
