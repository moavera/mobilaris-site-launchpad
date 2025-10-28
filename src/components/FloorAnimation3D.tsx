import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

interface FloorProps {
  targetY: number;
  delay: number;
  floorNumber: number;
}

const Floor = ({ targetY, delay, floorNumber }: FloorProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [currentY, setCurrentY] = useState(-8);
  const [currentOpacity, setCurrentOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStartAnimation(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useFrame(() => {
    if (startAnimation && groupRef.current) {
      const speed = 0.05;
      const newY = currentY + (targetY - currentY) * speed;
      setCurrentY(newY);
      groupRef.current.position.y = newY;

      const newOpacity = currentOpacity + (1 - currentOpacity) * speed;
      setCurrentOpacity(newOpacity);
    }
  });

  const colors = ['#6B7C9D', '#7A8CAE', '#899CBF', '#98ACD0'];
  const accentColor = '#D4AF37';

  return (
    <group ref={groupRef} position={[0, currentY, 0]}>
      {/* Main floor plate */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[5, 0.12, 3.5]} />
        <meshStandardMaterial
          color={colors[floorNumber]}
          transparent
          opacity={currentOpacity}
          metalness={0.3}
          roughness={0.6}
        />
      </mesh>

      {/* Perimeter walls */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[5.1, 0.04, 3.6]} />
        <meshStandardMaterial
          color="#1a1a2e"
          transparent
          opacity={currentOpacity}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Room divisions - Left section */}
      <mesh position={[-1.2, 0.08, 0.6]} castShadow>
        <boxGeometry args={[1.5, 0.06, 1.2]} />
        <meshStandardMaterial
          color={accentColor}
          transparent
          opacity={currentOpacity * 0.7}
          metalness={0.2}
          roughness={0.7}
        />
      </mesh>

      {/* Room divisions - Right section */}
      <mesh position={[1.1, 0.08, -0.4]} castShadow>
        <boxGeometry args={[1.6, 0.06, 1.4]} />
        <meshStandardMaterial
          color={accentColor}
          transparent
          opacity={currentOpacity * 0.7}
          metalness={0.2}
          roughness={0.7}
        />
      </mesh>

      {/* Small room - top */}
      <mesh position={[0, 0.08, 1.2]} castShadow>
        <boxGeometry args={[1.2, 0.06, 0.8]} />
        <meshStandardMaterial
          color={accentColor}
          transparent
          opacity={currentOpacity * 0.7}
          metalness={0.2}
          roughness={0.7}
        />
      </mesh>
    </group>
  );
};

const FloorScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[6, 4, 6]} fov={50} />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={8}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={0.5}
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />
      <pointLight position={[0, 8, 0]} intensity={0.5} color="#ffffff" />

      {/* Floors stacking from bottom to top */}
      <Floor targetY={0} delay={200} floorNumber={0} />
      <Floor targetY={0.8} delay={600} floorNumber={1} />
      <Floor targetY={1.6} delay={1000} floorNumber={2} />
      <Floor targetY={2.4} delay={1400} floorNumber={3} />

      {/* Ground plane */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a202c" opacity={0.3} transparent />
      </mesh>
    </>
  );
};

export const FloorAnimation3D = () => {
  return (
    <div className="w-full h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
      <Canvas shadows>
        <FloorScene />
      </Canvas>
    </div>
  );
};
