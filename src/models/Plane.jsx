import React from 'react'

import planeScene from '../assets/3d/bird.glb'
import { useGLTF } from '@react-three/drei'

export function Plane() {
    const { scene, animations } = useGLTF(planeScene)
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
        <primitive object={scene}/> 
    </mesh>
  )
}
