"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Group } from "three";

// The actual 3D model component
function CharacterModel() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/gas mask character 3d model.glb");

  // Slow rotation animation
  useFrame((state) => {
    if (group.current) {
      // Subtle floating effect
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      // Very slow rotation
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group ref={group}>
      <primitive 
        object={scene} 
        scale={2.5}
        position={[0, 0, 0]}
      />
    </group>
  );
}

// Wrapper component with Canvas
export function Character3D({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#ffd700" />
        
        {/* The model */}
        <CharacterModel />
        
        {/* Environment for reflections */}
        <Environment preset="city" />
        
        {/* Shadow */}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={5}
          blur={2}
          color="#000000"
        />
        
        {/* Allow user to rotate with mouse (optional - can remove if you want fixed view) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload("/gas mask character 3d model.glb");
