import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "three";
import Model from "../Model";
import { useSpring } from "@react-spring/core";



const Flight = () => {
  const { position } = useSpring({
    from: { position: [0, 0, 0] },
    to: { position: [Math.sin(Math.PI * 2), 0, 0] },
    loop: true,
    config: { duration: 7000 },
  });


    return (     
    <Canvas>
    <PerspectiveCamera position={[0, 0, 10]}  />
    <Suspense fallback={null}>
      <Model scale={0.5}   />
    </Suspense>
    <OrbitControls enableZoom={false} autoRotate={false} enableRotate={false}/>
    <directionalLight intensity={1} position={[0, 1, 1]} />
  </Canvas>
    );
};

export default Flight;