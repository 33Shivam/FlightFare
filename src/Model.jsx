import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/model-transformed.glb');
  const desiredRotationX = Math.PI / 2; // Desired rotation on the x-axis in radians
  const desiredRotationY = Math.PI / 4; // Desired rotation on the y-axis in radians
  const rotationSpeedX = 0.01; // Rotation speed for the x-axis
  const rotationSpeedY = 0.02; // Rotation speed for the y-axis
  const easeOutFactor = 0.05; // Ease-out factor for the rotation

  useFrame(() => {
    const { rotation } = groupRef.current;
    const rotationComplete =
      rotation.x >= desiredRotationX && rotation.y >= desiredRotationY;

    if (rotationComplete) {
      return; // Stop the rotation once the desired positions are reached
    }

    if (rotation.x < desiredRotationX) {
      const delta = desiredRotationX - rotation.x;
      const easeX = delta * delta * easeOutFactor;
      rotation.x += Math.min(easeX, rotationSpeedX); // Rotate on the x-axis with ease-out
    }

    if (rotation.y < desiredRotationY) {
      const delta = desiredRotationY - rotation.y;
      const easeY = delta * delta * easeOutFactor;
      rotation.y += Math.min(easeY, rotationSpeedY); // Rotate on the y-axis with ease-out
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.polySurface52_Main_Body_0.geometry} material={materials.Main_Body} position={[0, -0.8, 4.0]} scale={[-0.004, 0.004, 0.004]} material-color="gray" />
    </group>
  );
}

useGLTF.preload('/model-transformed.glb');
