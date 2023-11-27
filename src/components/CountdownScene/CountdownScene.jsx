import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import "./CountdownScene.css";

export default function CountdownScene() {
  const backgroundColor = "rgb(10, 16, 26)";
  return (
    <div className="CountdownScene">
      <Canvas camera={{ position: [0, 0.35, 15] }}>
        <OrbitControls
          maxDistance={15}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          position={(10, 0, 10)}
          autoRotate
          autoRotateSpeed={-1}
        />

        <ambientLight intensity={0.5} />

        <Sparkles
          count={1400}
          size={[1, 2, 5]}
          scale={[25, 25, 25]}
          speed={2}
          noise={20}
        />

        <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry attach="geometry" args={[25, 25, 25]} />
          <meshPhongMaterial
            attach="material"
            color={new THREE.Color(backgroundColor)}
            opacity={0.3}
            depthWrite={false}
            transparent
          />
        </mesh>

        <fog
          attach="fog"
          color={new THREE.Color(backgroundColor)}
          near={1}
          far={15}
        />
      </Canvas>
    </div>
  );
}
