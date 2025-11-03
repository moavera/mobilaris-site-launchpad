import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Simple tree component
const Tree = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 1, 8]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.9} />
      </mesh>
      {/* Foliage - cone shape */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.6, 1.2, 8]} />
        <meshStandardMaterial color="#2a4a2a" roughness={0.8} />
      </mesh>
    </group>
  );
};

// Surface building component
const SurfaceBuilding = ({ position, width, depth }: { 
  position: [number, number, number], 
  width: number, 
  depth: number 
}) => {
  return (
    <group position={position}>
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[width, 1.2, depth]} />
        <meshStandardMaterial 
          color="#505050" 
          metalness={0.3} 
          roughness={0.7}
        />
      </mesh>
      {/* Roof */}
      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={[width + 0.1, 0.1, depth + 0.1]} />
        <meshStandardMaterial color="#404040" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
};

// Underground floor with rooms
const UndergroundFloor = ({ position, floorNumber }: { 
  position: [number, number, number],
  floorNumber: number
}) => {
  return (
    <group position={position}>
      {/* Main floor plate */}
      <mesh receiveShadow>
        <boxGeometry args={[12, 0.15, 12]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.5} 
          roughness={0.6}
          emissive="#1a1a1a"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Room dividers creating a floor plan */}
      {/* Vertical walls */}
      {[-3, 0, 3].map((x, i) => (
        <mesh key={`v${i}`} position={[x, 0.4, 0]}>
          <boxGeometry args={[0.1, 0.8, 12]} />
          <meshStandardMaterial 
            color="#3a3a3a" 
            metalness={0.4} 
            roughness={0.7}
            opacity={0.7}
            transparent
          />
        </mesh>
      ))}
      
      {/* Horizontal walls */}
      {[-3, 0, 3].map((z, i) => (
        <mesh key={`h${i}`} position={[0, 0.4, z]}>
          <boxGeometry args={[12, 0.8, 0.1]} />
          <meshStandardMaterial 
            color="#3a3a3a" 
            metalness={0.4} 
            roughness={0.7}
            opacity={0.7}
            transparent
          />
        </mesh>
      ))}

      {/* Floor number indicator */}
      <mesh position={[5, 0.08, 5]}>
        <boxGeometry args={[0.8, 0.01, 0.8]} />
        <meshStandardMaterial 
          color="#4a4a4a"
          emissive="#6a6a6a"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

// Large visible tunnel
const LargeTunnel = ({ position, rotation }: { 
  position: [number, number, number], 
  rotation?: [number, number, number] 
}) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Main tunnel tube - larger and more visible */}
      <mesh>
        <torusGeometry args={[2.5, 0.3, 16, 32]} />
        <meshStandardMaterial 
          color="#4a4a4a" 
          metalness={0.7} 
          roughness={0.3}
          emissive="#2a2a2a"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Support structure */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
        <mesh key={i} position={[Math.cos(angle) * 2.2, Math.sin(angle) * 2.2, 0]}>
          <boxGeometry args={[0.15, 0.5, 0.15]} />
          <meshStandardMaterial 
            color="#3a3a3a" 
            metalness={0.6} 
            roughness={0.4}
            emissive="#2a2a2a"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}

      {/* Tunnel lighting */}
      <pointLight
        position={[0, 0, 0]}
        intensity={0.8}
        distance={8}
        color="#ff9a3d"
      />
    </group>
  );
};

// Main scene
const LayersScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle rotation animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <>
      <PerspectiveCamera 
        makeDefault 
        position={[15, 12, 15]} 
        fov={60}
      />
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        minDistance={10}
        maxDistance={40}
        maxPolarAngle={Math.PI / 2.2}
      />

      {/* Enhanced lighting for better visibility */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 15, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-10, 10, -10]} intensity={0.6} />
      <pointLight position={[0, 8, 0]} intensity={0.5} color="#ffffff" />

      <group ref={groupRef}>
        {/* Surface ground layer - clear separation */}
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial 
            color="#3a3a3a" 
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>

        {/* Ground grid for surface */}
        <gridHelper args={[20, 20, '#4a4a4a', '#3a3a3a']} position={[0, 0.01, 0]} />

        {/* Surface buildings */}
        <SurfaceBuilding position={[-4, 0, -4]} width={2.5} depth={2} />
        <SurfaceBuilding position={[4, 0, -3]} width={3} depth={2.5} />
        <SurfaceBuilding position={[-3, 0, 4]} width={2} depth={2.5} />
        <SurfaceBuilding position={[3, 0, 3]} width={2.8} depth={2.2} />

        {/* Trees on surface */}
        <Tree position={[-2, 0, 1]} />
        <Tree position={[1, 0, -2]} />
        <Tree position={[-5, 0, -1]} />
        <Tree position={[5, 0, 1]} />
        <Tree position={[0, 0, 5]} />
        <Tree position={[-1, 0, -5]} />

        {/* Clear ground layer separator - visual element */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[13, 0.4, 13]} />
          <meshStandardMaterial 
            color="#2a2a2a" 
            metalness={0.6} 
            roughness={0.4}
            emissive="#1a1a1a"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Underground floors - 3 levels */}
        <UndergroundFloor position={[0, -2.5, 0]} floorNumber={1} />
        <UndergroundFloor position={[0, -5, 0]} floorNumber={2} />
        <UndergroundFloor position={[0, -7.5, 0]} floorNumber={3} />

        {/* Large visible tunnel system */}
        <LargeTunnel position={[0, -10, 0]} />
        <LargeTunnel position={[0, -10, -6]} rotation={[0, 0, Math.PI / 8]} />
        <LargeTunnel position={[0, -10, 6]} rotation={[0, 0, -Math.PI / 8]} />
        <LargeTunnel position={[-6, -10, 0]} rotation={[0, Math.PI / 2, Math.PI / 8]} />
        <LargeTunnel position={[6, -10, 0]} rotation={[0, Math.PI / 2, -Math.PI / 8]} />

        {/* Connecting tunnel segments */}
        {Array.from({ length: 3 }).map((_, i) => (
          <LargeTunnel 
            key={i} 
            position={[0, -10, -12 - i * 6]} 
            rotation={[0, 0, (i * Math.PI) / 16]}
          />
        ))}
      </group>

      {/* Subtle fog for depth */}
      <fog attach="fog" args={['#0a0a0a', 20, 50]} />
    </>
  );
};

export const EnvironmentLayers3D = () => {
  return (
    <div className="w-full h-[600px] lg:h-[700px] rounded-xl overflow-hidden bg-[#0a0a0a] shadow-lg">
      <Canvas shadows gl={{ antialias: true, alpha: false }}>
        <color attach="background" args={['#0a0a0a']} />
        <LayersScene />
      </Canvas>
    </div>
  );
};
