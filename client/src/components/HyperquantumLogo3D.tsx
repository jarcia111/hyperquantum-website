import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface HyperquantumLogo3DProps {
  size?: number;
  logoColor?: string;
  className?: string;
}

export default function HyperquantumLogo3D({ 
  size = 300, 
  logoColor = "#00D1FF",
  className = ""
}: HyperquantumLogo3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const logoGroup = useRef<THREE.Group | null>(null);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the scene
    scene.current = new THREE.Scene();
    
    // Create camera with perspective
    camera.current = new THREE.PerspectiveCamera(
      50, // Field of view
      1, // Aspect ratio (will be updated on resize)
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );
    camera.current.position.z = 200;
    
    // Create WebGL renderer
    renderer.current = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Transparent background
    });
    renderer.current.setPixelRatio(window.devicePixelRatio);
    
    // Add renderer to the DOM
    containerRef.current.appendChild(renderer.current.domElement);

    // Create a group for the logo
    const group = new THREE.Group();
    logoGroup.current = group;
    
    // Common material for all elements
    const material = new THREE.MeshBasicMaterial({ 
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.9
    });

    // Center node (larger sphere)
    const centerGeometry = new THREE.SphereGeometry(15, 32, 32);
    const centerNode = new THREE.Mesh(centerGeometry, material);
    group.add(centerNode);

    // Add connections and nodes in 3D space
    const connectionPositions = [
      new THREE.Vector3(100, -100, 0),  // Top-right
      new THREE.Vector3(150, 0, 0),     // Right
      new THREE.Vector3(100, 100, 0),   // Bottom-right
      new THREE.Vector3(0, 150, 0),     // Bottom
      new THREE.Vector3(-100, 100, 0),  // Bottom-left
      new THREE.Vector3(-150, 0, 0),    // Left
      new THREE.Vector3(-100, -100, 0), // Top-left
      new THREE.Vector3(0, -150, 0),    // Top
    ];

    // Add main connection lines and endpoint nodes
    connectionPositions.forEach(position => {
      // Create line
      const linePoints = [
        new THREE.Vector3(0, 0, 0),
        position.clone()
      ];
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: new THREE.Color(logoColor),
        linewidth: 3
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      group.add(line);
      
      // Create endpoint node
      const nodeGeometry = new THREE.SphereGeometry(7.5, 16, 16);
      const node = new THREE.Mesh(nodeGeometry, material);
      node.position.copy(position);
      group.add(node);
    });

    // Add smaller nodes around the center
    const smallNodePositions = [
      // Inner ring
      new THREE.Vector3(40, -60, 0),
      new THREE.Vector3(70, -40, 0),
      new THREE.Vector3(70, 40, 0),
      new THREE.Vector3(40, 70, 0),
      new THREE.Vector3(-40, 70, 0),
      new THREE.Vector3(-70, 40, 0),
      new THREE.Vector3(-70, -40, 0),
      new THREE.Vector3(-40, -70, 0),
      // Outer ring
      new THREE.Vector3(50, -100, 0),
      new THREE.Vector3(100, -50, 0),
      new THREE.Vector3(100, 50, 0),
      new THREE.Vector3(50, 100, 0),
      new THREE.Vector3(-50, 100, 0),
      new THREE.Vector3(-100, 50, 0),
      new THREE.Vector3(-100, -50, 0),
      new THREE.Vector3(-50, -100, 0),
    ];

    smallNodePositions.forEach(position => {
      const smallNodeGeometry = new THREE.SphereGeometry(4, 12, 12);
      const smallNode = new THREE.Mesh(smallNodeGeometry, material);
      smallNode.position.copy(position);
      group.add(smallNode);
    });

    // Add logo group to scene
    scene.current.add(group);
    
    // Scale the logo to fit in the container
    group.scale.set(0.5, 0.5, 0.5);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.current.add(ambientLight);
    
    // Handle resizing
    const handleResize = () => {
      if (!containerRef.current || !renderer.current || !camera.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.current.aspect = width / height;
      camera.current.updateProjectionMatrix();
      
      renderer.current.setSize(width, height);
    };
    
    // Initial sizing
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Animation loop - rotate the logo gently
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      
      if (logoGroup.current) {
        // Rotate logo slightly on each frame
        logoGroup.current.rotation.x += 0.002;
        logoGroup.current.rotation.y += 0.003;
      }
      
      if (renderer.current && scene.current && camera.current) {
        renderer.current.render(scene.current, camera.current);
      }
    };
    
    // Start animation
    animate();
    
    // Cleanup function
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      
      if (renderer.current && renderer.current.domElement) {
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.current.domElement);
        }
        renderer.current.dispose();
      }
      
      window.removeEventListener('resize', handleResize);
    };
  }, [logoColor]);
  
  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className}`}
      style={{ width: size, height: size }}
    />
  );
}