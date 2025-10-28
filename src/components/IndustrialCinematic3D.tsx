import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Tunnel segment component
const TunnelSegment = ({ position, rotation }: { position: [number, number, number], rotation?: [number, number, number] }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Tunnel ring */}
      <mesh>
        <torusGeometry args={[3, 0.15, 16, 32]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#1a1a1a"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Support beams */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
        <mesh key={i} position={[Math.cos(angle) * 2.8, Math.sin(angle) * 2.8, 0]}>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
};

// Industrial building component
const Building = ({ position, width, height, depth }: { 
  position: [number, number, number], 
  width: number, 
  height: number, 
  depth: number 
}) => {
  return (
    <group position={position}>
      {/* Main building body */}
      <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial 
          color="#4a4a4a" 
          metalness={0.3} 
          roughness={0.7}
        />
      </mesh>
      
      {/* Roof detail */}
      <mesh position={[0, height + 0.1, 0]}>
        <boxGeometry args={[width + 0.1, 0.2, depth + 0.1]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Windows */}
      {Array.from({ length: Math.floor(height / 1.5) }).map((_, floor) => (
        <group key={floor}>
          {Array.from({ length: Math.floor(width / 1.2) }).map((_, i) => (
            <mesh 
              key={i} 
              position={[
                -width/2 + 0.6 + i * 1.2, 
                0.5 + floor * 1.5, 
                depth/2 + 0.01
              ]}
            >
              <planeGeometry args={[0.4, 0.6]} />
              <meshStandardMaterial 
                color="#2a2a2a" 
                emissive="#404040"
                emissiveIntensity={0.3}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
};

// Animated camera scene
const CinematicScene = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const timeRef = useRef(0);

  // Create tunnel segments
  const tunnelSegments = useMemo(() => {
    const segments = [];
    for (let i = 0; i < 30; i++) {
      segments.push(
        <TunnelSegment 
          key={i} 
          position={[0, -15 + i * 0.5, -i * 3]} 
          rotation={[0, 0, (i * Math.PI) / 16]}
        />
      );
    }
    return segments;
  }, []);

  // Animate camera
  useFrame((state, delta) => {
    if (!cameraRef.current) return;
    
    timeRef.current += delta * 0.15;
    const t = timeRef.current % 10; // 10 second loop
    
    if (t < 5) {
      // Underground tunnel phase (0-5s)
      const progress = t / 5;
      cameraRef.current.position.z = -85 + progress * 85;
      cameraRef.current.position.y = -15 + progress * 8;
      cameraRef.current.position.x = Math.sin(progress * Math.PI) * 2;
      cameraRef.current.lookAt(0, -10 + progress * 10, cameraRef.current.position.z + 10);
    } else {
      // Surface phase (5-10s)
      const progress = (t - 5) / 5;
      const smoothProgress = progress * progress * (3 - 2 * progress); // Smooth step
      
      cameraRef.current.position.z = 0 + smoothProgress * 20;
      cameraRef.current.position.y = -7 + smoothProgress * 15;
      cameraRef.current.position.x = Math.sin(progress * Math.PI * 2) * 8;
      cameraRef.current.lookAt(0, 2, 0);
    }
  });

  return (
    <>
      <PerspectiveCamera 
        ref={cameraRef} 
        makeDefault 
        position={[0, -15, -85]} 
        fov={75}
        near={0.1}
        far={200}
      />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[20, 30, 20]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={100}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />
      <directionalLight position={[-10, 10, -10]} intensity={0.3} />
      
      {/* Tunnel lights */}
      {Array.from({ length: 15 }).map((_, i) => (
        <pointLight
          key={i}
          position={[0, -15 + i, -i * 6]}
          intensity={0.5}
          distance={10}
          color="#ff9a3d"
        />
      ))}

      {/* Tunnel segments */}
      {tunnelSegments}

      {/* Underground ground/walls */}
      <mesh position={[0, -18, -45]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 90]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>

      {/* Surface ground */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          roughness={0.95}
          metalness={0.1}
        />
      </mesh>

      {/* Grid lines on surface */}
      <gridHelper args={[80, 40, '#3a3a3a', '#2a2a2a']} position={[0, 0.01, 0]} />

      {/* Industrial buildings */}
      <Building position={[-8, 0, -8]} width={4} height={6} depth={4} />
      <Building position={[8, 0, -6]} width={5} height={8} depth={5} />
      <Building position={[-10, 0, 6]} width={3.5} height={5} depth={3} />
      <Building position={[6, 0, 8]} width={4.5} height={7} depth={4} />
      <Building position={[0, 0, -15]} width={6} height={9} depth={5} />
      
      {/* Smaller structures */}
      <Building position={[-15, 0, -2]} width={2.5} height={3} depth={2.5} />
      <Building position={[14, 0, 2]} width={3} height={4} depth={3} />

      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0a0a', 20, 80]} />
    </>
  );
};

export const IndustrialCinematic3D = () => {
  return (
    <div className="w-full h-[500px] lg:h-[600px] rounded-xl overflow-hidden bg-[#0a0a0a]">
      <Canvas shadows gl={{ antialias: true, alpha: false }}>
        <color attach="background" args={['#0a0a0a']} />
        <CinematicScene />
      </Canvas>
    </div>
  );
};
