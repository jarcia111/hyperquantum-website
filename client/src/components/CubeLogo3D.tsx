import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface CubeLogo3DProps {
  size?: number;
  color?: string;
  lineColor?: string;
  className?: string;
}

export default function CubeLogo3D({ 
  size = 300, 
  color = "#1B1F3B", 
  lineColor = "#00D1FF",
  className = ""
}: CubeLogo3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const cube = useRef<THREE.Object3D | null>(null);
  const frameId = useRef<number | null>(null);

  // Setup scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Create the scene
    scene.current = new THREE.Scene();
    
    // Create camera with perspective
    camera.current = new THREE.PerspectiveCamera(
      75, // Field of view
      1, // Aspect ratio (will be updated on resize)
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );
    camera.current.position.z = 4;
    
    // Create WebGL renderer
    renderer.current = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Transparent background
    });
    renderer.current.setPixelRatio(window.devicePixelRatio);
    
    // Add renderer to the DOM
    containerRef.current.appendChild(renderer.current.domElement);
    
    // Create a 3x3x3 cube
    const size = 3;
    const cubeSize = 0.25;
    const spacing = 0.5;
    
    // Group to hold all small cubes
    const cubeGroup = new THREE.Group();
    
    // Material for cubes
    const cubeMaterial = new THREE.MeshBasicMaterial({ 
      color: new THREE.Color(color),
      side: THREE.DoubleSide
    });
    
    // Material for edges
    const edgeMaterial = new THREE.LineBasicMaterial({ 
      color: new THREE.Color(lineColor),
      transparent: true,
      opacity: 0.8
    });
    
    // Create the grid of small cubes
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          // Skip some cubes to create a more interesting pattern
          // Only create cubes on the outer layer
          if (x > 0 && x < size-1 && y > 0 && y < size-1 && z > 0 && z < size-1) {
            continue;
          }
          
          // Create cube geometry
          const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
          
          // Create cube mesh
          const cubeMesh = new THREE.Mesh(geometry, cubeMaterial);
          
          // Position cube in the grid with spacing
          cubeMesh.position.x = (x - (size-1)/2) * spacing;
          cubeMesh.position.y = (y - (size-1)/2) * spacing;
          cubeMesh.position.z = (z - (size-1)/2) * spacing;
          
          // Create edges for each cube
          const edges = new THREE.EdgesGeometry(geometry);
          const line = new THREE.LineSegments(edges, edgeMaterial);
          line.position.copy(cubeMesh.position);
          
          // Add cube and its edges to the group
          cubeGroup.add(cubeMesh);
          cubeGroup.add(line);
        }
      }
    }
    
    // Add the group to the scene
    scene.current.add(cubeGroup);
    cube.current = cubeGroup;
    
    // Create ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.current.add(ambientLight);
    
    // Create directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.current.add(directionalLight);
    
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
    
    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      
      if (cube.current) {
        // Rotate cube slightly on each frame
        cube.current.rotation.x += 0.003;
        cube.current.rotation.y += 0.005;
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
  }, [color, lineColor]);
  
  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className}`}
      style={{ width: size, height: size }}
    />
  );
}