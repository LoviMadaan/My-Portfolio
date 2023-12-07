import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import {  Island, Sky, Bird, Plane } from "../models";

 {/* <div className='absolute top-30 left-0 right-0 z-10 flex intems-center justify-center'>
        POPUP
      </div> */}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const adjustIslandForScreenSize = () => {
    let screenScale = null; 
    let screenPositon = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [1, 0.9, 0.9]      
    } else {
      screenScale = [1, 1, 1]      
    }
    return [screenScale, screenPositon, rotation]
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <Canvas 
      className={`w-full h-screen bg transparent ${
        isRotating ? 'cursor-grabbing' : 'curson-grab'
      }`} 
      camera={{ near: 0.1, far: 1000}}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2}/>
          <ambientLight intensity={0.5} />          
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

          <Bird />
          
          <Sky />

          <Island 
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          />

          <Plane />
        </Suspense>
      </Canvas>
     
    </section>
  )
}

export default Home
