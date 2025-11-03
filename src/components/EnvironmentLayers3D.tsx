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
        <cylinderGeometry args={[0.12, 0.15, 1, 8]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.9} />
      </mesh>
      {/* Foliage */}
      <mesh position={[0, 1.3, 0]}>
        <coneGeometry args={[0.5, 1, 8]} />
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
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[width, 0.8, depth]} />
        <meshStandardMaterial 
          color="#555555" 
          metalness={0.3} 
          roughness={0.7}
        />
      </mesh>
      {/* Roof */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[width + 0.05, 0.1, depth + 0.05]} />
        <meshStandardMaterial color="#454545" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
};

// Exploded floor view - floors float ABOVE surface
const ExplodedFloor = ({ position, floorNumber, label }: { 
  position: [number, number, number],
  floorNumber: number,
  label: string
}) => {
  return (
    <group position={position}>
      {/* Main floor plate */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[10, 0.2, 10]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          metalness={0.4} 
          roughness={0.5}
        />
      </mesh>
      
      {/* Room layout - creating a floor plan */}
      {/* Vertical dividers */}
      {[-2.5, 0, 2.5].map((x, i) => (
        <mesh key={`v${i}`} position={[x, 0.3, 0]} castShadow>
          <boxGeometry args={[0.08, 0.6, 10]} />
          <meshStandardMaterial 
            color="#4a4a4a" 
            metalness={0.3} 
            roughness={0.6}
          />
        </mesh>
      ))}
      
      {/* Horizontal dividers */}
      {[-2.5, 0, 2.5].map((z, i) => (
        <mesh key={`h${i}`} position={[0, 0.3, z]} castShadow>
          <boxGeometry args={[10, 0.6, 0.08]} />
          <meshStandardMaterial 
            color="#4a4a4a" 
            metalness={0.3} 
            roughness={0.6}
          />
        </mesh>
      ))}

      {/* Floor label indicator */}
      <mesh position={[4.2, 0.11, 4.2]}>
        <boxGeometry args={[0.6, 0.01, 0.6]} />
        <meshStandardMaterial 
          color="#5a5a5a"
          emissive="#7a7a7a"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
};

// Realistic tunnel corridor
const TunnelCorridor = ({ position, rotation, length = 8 }: { 
  position: [number, number, number], 
  rotation?: [number, number, number],
  length?: number
}) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Tunnel floor */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[2, 0.15, length]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.3} 
          roughness={0.8}
        />
      </mesh>
      
      {/* Tunnel walls */}
      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[0.15, 2, length]} />
        <meshStandardMaterial 
          color="#353535" 
          metalness={0.4} 
          roughness={0.7}
        />
      </mesh>
      <mesh position={[1, 0, 0]}>
        <boxGeometry args={[0.15, 2, length]} />
        <meshStandardMaterial 
          color="#353535" 
          metalness={0.4} 
          roughness={0.7}
        />
      </mesh>
      
      {/* Tunnel ceiling */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[2, 0.15, length]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          metalness={0.4} 
          roughness={0.6}
        />
      </mesh>

      {/* Support beams along tunnel */}
      {Array.from({ length: Math.floor(length / 2) }).map((_, i) => (
        <group key={i} position={[0, 0, -length/2 + i * 2 + 1]}>
          <mesh position={[-0.9, 0.6, 0]}>
            <boxGeometry args={[0.1, 1.4, 0.1]} />
            <meshStandardMaterial color="#454545" metalness={0.5} roughness={0.5} />
          </mesh>
          <mesh position={[0.9, 0.6, 0]}>
            <boxGeometry args={[0.1, 1.4, 0.1]} />
            <meshStandardMaterial color="#454545" metalness={0.5} roughness={0.5} />
          </mesh>
        </group>
      ))}

      {/* Tunnel lights */}
      <pointLight
        position={[0, 0.5, 0]}
        intensity={1.2}
        distance={6}
        color="#ff9a3d"
      />
    </group>
  );
};

// Main scene
const ExplodedViewScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle rotation animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <>
      <PerspectiveCamera 
        makeDefault 
        position={[18, 14, 18]} 
        fov={55}
      />
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        minDistance={12}
        maxDistance={45}
        maxPolarAngle={Math.PI / 2.1}
      />

      {/* Enhanced lighting for clear visibility */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[15, 20, 15]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-10, 15, -10]} intensity={0.8} />
      <pointLight position={[0, 12, 0]} intensity={0.6} color="#ffffff" />

      <group ref={groupRef}>
        {/* EXPLODED FLOORS - Floating ABOVE the surface */}
        <ExplodedFloor position={[0, 8, 0]} floorNumber={3} label="Floor 3" />
        <ExplodedFloor position={[0, 5.5, 0]} floorNumber={2} label="Floor 2" />
        <ExplodedFloor position={[0, 3, 0]} floorNumber={1} label="Floor 1" />

        {/* GROUND LEVEL - Clear separation */}
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[24, 24]} />
          <meshStandardMaterial 
            color="#3a3a3a" 
            roughness={0.85}
            metalness={0.15}
          />
        </mesh>

        {/* Ground grid */}
        <gridHelper args={[24, 24, '#4a4a4a', '#3a3a3a']} position={[0, 0.01, 0]} />

        {/* Surface buildings on ground */}
        <SurfaceBuilding position={[-5, 0, -5]} width={2.2} depth={2} />
        <SurfaceBuilding position={[5, 0, -4]} width={2.5} depth={2.2} />
        <SurfaceBuilding position={[-4, 0, 5]} width={2} depth={2.3} />
        <SurfaceBuilding position={[4, 0, 4]} width={2.4} depth={2.1} />

        {/* Trees on surface */}
        <Tree position={[-2, 0, 1.5]} />
        <Tree position={[2, 0, -2]} />
        <Tree position={[-6, 0, -1]} />
        <Tree position={[6, 0, 2]} />
        <Tree position={[0, 0, 6]} />
        <Tree position={[-1.5, 0, -6]} />

        {/* Ground layer separator - visual marker */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[11, 0.2, 11]} />
          <meshStandardMaterial 
            color="#2a2a2a" 
            metalness={0.5} 
            roughness={0.5}
          />
        </mesh>

        {/* UNDERGROUND TUNNEL SYSTEM - Below ground */}
        {/* Main tunnel network */}
        <TunnelCorridor position={[0, -2.5, 0]} length={12} />
        <TunnelCorridor position={[0, -2.5, 0]} rotation={[0, Math.PI / 2, 0]} length={12} />
        
        {/* Cross tunnels */}
        <TunnelCorridor position={[4, -2.5, 0]} rotation={[0, Math.PI / 2, 0]} length={6} />
        <TunnelCorridor position={[-4, -2.5, 0]} rotation={[0, Math.PI / 2, 0]} length={6} />
        <TunnelCorridor position={[0, -2.5, 4]} length={6} />
        <TunnelCorridor position={[0, -2.5, -4]} length={6} />

        {/* Deeper tunnel level */}
        <TunnelCorridor position={[2, -4.5, 2]} length={8} />
        <TunnelCorridor position={[-2, -4.5, -2]} rotation={[0, Math.PI / 2, 0]} length={8} />
      </group>

      {/* Subtle fog for depth */}
      <fog attach="fog" args={['#0a0a0a', 25, 60]} />
    </>
  );
};

export const EnvironmentLayers3D = () => {
  return (
    <div className="w-full h-[600px] lg:h-[700px] rounded-xl overflow-hidden bg-[#0a0a0a] shadow-lg">
      <Canvas shadows gl={{ antialias: true, alpha: false }}>
        <color attach="background" args={['#0a0a0a']} />
        <ExplodedViewScene />
      </Canvas>
    </div>
  );
};
