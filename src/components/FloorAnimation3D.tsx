import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

interface FloorProps {
  position: [number, number, number];
  delay: number;
  floorNumber: number;
}

const Floor = ({ position, delay, floorNumber }: FloorProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartAnimation(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const springs = useSpring({
    position: startAnimation ? position : [position[0], position[1] - 5, position[2]],
    opacity: startAnimation ? 1 : 0,
    config: { mass: 1, tension: 80, friction: 26 },
  });

  const colors = ['#8B9DC3', '#A0B0D0', '#B5C5DD', '#CAD5EA'];
  const accentColors = ['#D4AF37', '#C9A961', '#BEA38B', '#B39DB5'];

  return (
    <animated.group position={springs.position as any}>
      {/* Main floor plate */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[4, 0.1, 3]} />
        <animated.meshStandardMaterial
          color={colors[floorNumber]}
          transparent
          opacity={springs.opacity as any}
          metalness={0.2}
          roughness={0.7}
        />
      </mesh>

      {/* Floor outline/walls */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[4.05, 0.02, 3.05]} />
        <animated.meshStandardMaterial
          color="#2D3748"
          transparent
          opacity={springs.opacity as any}
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Accent sections (rooms) */}
      <mesh position={[-0.8, 0.06, 0.5]} castShadow>
        <boxGeometry args={[1.2, 0.04, 1]} />
        <animated.meshStandardMaterial
          color={accentColors[floorNumber]}
          transparent
          opacity={springs.opacity as any}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      <mesh position={[0.9, 0.06, -0.3]} castShadow>
        <boxGeometry args={[1.4, 0.04, 1.2]} />
        <animated.meshStandardMaterial
          color={accentColors[floorNumber]}
          transparent
          opacity={springs.opacity as any}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Floor label */}
      <mesh position={[0, 0.08, 0]}>
        <planeGeometry args={[0.6, 0.3]} />
        <animated.meshBasicMaterial
          color="#FFFFFF"
          transparent
          opacity={springs.opacity as any}
        />
      </mesh>
    </animated.group>
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
      <Floor position={[0, 0, 0]} delay={200} floorNumber={0} />
      <Floor position={[0, 0.8, 0]} delay={600} floorNumber={1} />
      <Floor position={[0, 1.6, 0]} delay={1000} floorNumber={2} />
      <Floor position={[0, 2.4, 0]} delay={1400} floorNumber={3} />

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
