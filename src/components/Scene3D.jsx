import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import './Scene3D.css';

// This is the actual 3D object that rotates
function RotatingShape() {
  const meshRef = useRef();
  
  // This runs 60 times per second (animation loop)
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.3;
  });
  
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial 
        color="#6366f1" 
        wireframe={false}
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
}

// This is the container for your 3D scene
function Scene3D() {
  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Your 3D object */}
        <RotatingShape />
        
        {/* Allows mouse interaction */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Scene3D;