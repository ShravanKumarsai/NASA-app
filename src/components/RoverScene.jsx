import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

const gold = '#bd9a43';
const darkGold = '#80652d';
const graphite = '#252a2b';
const selected = '#d4ff64';

function Wheel({ position, active, onClick }) {
  const wheelRef = useRef(null);
  const lugs = Array.from({ length: 12 }, (_, index) => {
    const angle = (index / 12) * Math.PI * 2;
    return [Math.cos(angle) * 0.34, Math.sin(angle) * 0.34, 0];
  });

  useFrame((_, delta) => {
    if (wheelRef.current && active) wheelRef.current.rotation.x += delta * 1.5;
  });

  return (
    <group ref={wheelRef} position={position} rotation={[0, 0, Math.PI / 2]} onClick={(event) => { event.stopPropagation(); onClick(); }}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.31, 0.31, 0.22, 24]} />
        <meshStandardMaterial color={active ? selected : graphite} metalness={0.55} roughness={0.48} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.13, 0.13, 0.235, 20]} />
        <meshStandardMaterial color={gold} metalness={0.58} roughness={0.35} />
      </mesh>
      {lugs.map((lug, index) => (
        <mesh key={index} position={lug}>
          <boxGeometry args={[0.095, 0.075, 0.235]} />
          <meshStandardMaterial color={active ? selected : '#5d6260'} metalness={0.25} roughness={0.72} />
        </mesh>
      ))}
    </group>
  );
}

function Rover({ selectedPart, onSelectPart, demo }) {
  const armJoint = useRef(null);
  const wheels = [
    [-1.05, -0.2, -0.77], [-1.05, -0.2, 0], [-1.05, -0.2, 0.77],
    [1.05, -0.2, -0.77], [1.05, -0.2, 0], [1.05, -0.2, 0.77],
  ];

  useFrame((state) => {
    if (armJoint.current) {
      const target = demo ? -0.33 + Math.sin(state.clock.elapsedTime * 1.4) * 0.14 : -0.33;
      armJoint.current.rotation.x += (target - armJoint.current.rotation.x) * 0.06;
    }
  });

  return (
    <group position={[0, -0.12, 0]} rotation={[0.04, -0.12, 0]}>
      <mesh position={[0, -0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.75, 0.34, 1.22]} />
        <meshStandardMaterial color={selectedPart === 'deck' ? selected : gold} metalness={0.46} roughness={0.56} />
      </mesh>

      <group onClick={(event) => { event.stopPropagation(); onSelectPart('panel'); }}>
        <mesh position={[0, 0.19, 0]}>
          <boxGeometry args={[1.67, 0.05, 1.13]} />
          <meshStandardMaterial color={selectedPart === 'panel' ? selected : '#8d7948'} metalness={0.24} roughness={0.7} />
        </mesh>
        {Array.from({ length: 8 }, (_, index) => (
          <mesh key={index} position={[-0.73 + index * 0.21, 0.223, 0]}>
            <boxGeometry args={[0.15, 0.012, 1.02]} />
            <meshStandardMaterial color="#34404a" metalness={0.62} roughness={0.35} />
          </mesh>
        ))}
      </group>

      <group onClick={(event) => { event.stopPropagation(); onSelectPart('deck'); }}>
        <mesh position={[0, 0.25, 0.02]}>
          <boxGeometry args={[1.23, 0.19, 0.84]} />
          <meshStandardMaterial color={selectedPart === 'deck' ? selected : '#c2a050'} metalness={0.45} roughness={0.56} />
        </mesh>
        <mesh position={[0, 0.37, 0.02]}>
          <boxGeometry args={[0.93, 0.08, 0.54]} />
          <meshStandardMaterial color="#30383a" metalness={0.38} roughness={0.48} />
        </mesh>
      </group>

      {wheels.map((position, index) => (
        <group key={index}>
          <mesh position={[position[0] * 0.66, -0.08, position[2] * 0.68]} rotation={[0, 0, position[0] < 0 ? -0.27 : 0.27]}>
            <cylinderGeometry args={[0.055, 0.055, 0.55, 8]} />
            <meshStandardMaterial color={darkGold} metalness={0.52} roughness={0.44} />
          </mesh>
          <Wheel position={position} active={demo} onClick={() => onSelectPart('wheels')} />
        </group>
      ))}

      <group onClick={(event) => { event.stopPropagation(); onSelectPart('mast'); }}>
        <mesh position={[0, 0.65, -0.27]}>
          <cylinderGeometry args={[0.045, 0.055, 0.58, 12]} />
          <meshStandardMaterial color={selectedPart === 'mast' ? selected : '#929995'} metalness={0.68} roughness={0.32} />
        </mesh>
        <mesh position={[0, 0.99, -0.27]}>
          <boxGeometry args={[0.43, 0.24, 0.24]} />
          <meshStandardMaterial color={selectedPart === 'mast' ? selected : graphite} metalness={0.55} roughness={0.34} />
        </mesh>
        {[-0.105, 0.105].map((x) => (
          <mesh key={x} position={[x, 0.99, -0.402]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.055, 0.055, 0.032, 18]} />
            <meshStandardMaterial color="#85a8b1" metalness={0.8} roughness={0.14} />
          </mesh>
        ))}
      </group>

      <group onClick={(event) => { event.stopPropagation(); onSelectPart('antenna'); }}>
        <mesh position={[0.56, 0.57, 0.3]} rotation={[0, 0, -0.22]}>
          <cylinderGeometry args={[0.035, 0.035, 0.48, 10]} />
          <meshStandardMaterial color={selectedPart === 'antenna' ? selected : '#bcc1b7'} metalness={0.72} roughness={0.29} />
        </mesh>
        <mesh position={[0.62, 0.83, 0.3]} rotation={[0.24, 0.1, -0.15]}>
          <coneGeometry args={[0.2, 0.14, 24, 1, true]} />
          <meshStandardMaterial color={selectedPart === 'antenna' ? selected : '#b8c0b8'} side={2} metalness={0.58} roughness={0.3} />
        </mesh>
      </group>

      <group ref={armJoint} position={[-0.51, 0.28, -0.54]} onClick={(event) => { event.stopPropagation(); onSelectPart('arm'); }}>
        <mesh position={[-0.17, -0.3, -0.18]} rotation={[0, 0, -0.5]}>
          <cylinderGeometry args={[0.037, 0.037, 0.64, 10]} />
          <meshStandardMaterial color={selectedPart === 'arm' ? selected : '#aeb2a8'} metalness={0.63} roughness={0.33} />
        </mesh>
        <mesh position={[-0.39, -0.58, -0.21]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.055, 0.055, 0.16, 12]} />
          <meshStandardMaterial color={selectedPart === 'arm' ? selected : darkGold} metalness={0.55} roughness={0.48} />
        </mesh>
      </group>
    </group>
  );
}

function SceneContent({ selectedPart, onSelectPart, demo }) {
  return (
    <>
      <color attach="background" args={['#111a1d']} />
      <fog attach="fog" args={['#111a1d', 8, 18]} />
      <ambientLight intensity={1.45} />
      <directionalLight position={[4, 7, 5]} intensity={2.4} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight position={[-4, 2, -3]} intensity={14} color="#d4ff64" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.72, 0]} receiveShadow>
        <circleGeometry args={[4.8, 64]} />
        <meshStandardMaterial color="#263238" roughness={0.94} metalness={0.02} />
      </mesh>
      <gridHelper args={[9, 18, '#64716c', '#3a4546']} position={[0, -0.708, 0]} />
      <Rover selectedPart={selectedPart} onSelectPart={onSelectPart} demo={demo} />
      <OrbitControls enableDamping dampingFactor={0.09} minDistance={3.4} maxDistance={8.5} maxPolarAngle={Math.PI * 0.78} target={[0, 0.1, 0]} />
    </>
  );
}

export default function RoverScene({ selectedPart, onSelectPart, demo }) {
  return (
    <Canvas
      shadows
      frameloop={demo ? 'always' : 'demand'}
      dpr={[1, 1.5]}
      camera={{ position: [3.8, 2.6, 4.7], fov: 38, near: 0.1, far: 40 }}
      fallback={<div className="rover-loading">This browser cannot display the interactive 3D model. The component guide is still available here.</div>}
      gl={{ antialias: true, powerPreference: 'low-power' }}
    >
      <SceneContent selectedPart={selectedPart} onSelectPart={onSelectPart} demo={demo} />
    </Canvas>
  );
}
