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
    
    // Add lights for better 3D appearance
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(1, 1, 1);
    scene.current.add(directionalLight);
    
    // Luz secundaria para mejor efecto 3D
    const secondaryLight = new THREE.DirectionalLight(0x00D1FF, 0.5);
    secondaryLight.position.set(-1, -1, -1);
    scene.current.add(secondaryLight);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.current.add(ambientLight);
    
    // Material para el nodo central (más grande y brillante)
    const centerNodeMaterial = new THREE.MeshPhongMaterial({ 
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.95,
      shininess: 120,
      specular: new THREE.Color(0xffffff)
    });
    
    // Material para los nodos principales en las conexiones
    const nodeMaterial = new THREE.MeshPhongMaterial({ 
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.9,
      shininess: 100,
      specular: new THREE.Color(0xffffff)
    });
    
    // Material para los nodos pequeños (ligeramente más tenues)
    const smallNodeMaterial = new THREE.MeshPhongMaterial({ 
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.8,
      shininess: 80,
      specular: new THREE.Color(0xffffff)
    });
    
    // Material para las líneas de conexión
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: new THREE.Color(logoColor),
      linewidth: 2
    });

    // Create center node (larger sphere)
    const centerGeometry = new THREE.SphereGeometry(15, 32, 32);
    const centerNode = new THREE.Mesh(centerGeometry, centerNodeMaterial);
    group.add(centerNode);

    // Define connection points - with bottom node position adjusted
    const connectionPositions = [
      new THREE.Vector3(0, -150, 20),   // Top
      new THREE.Vector3(120, -80, 0),   // Top-right
      new THREE.Vector3(150, 30, -20),  // Right
      new THREE.Vector3(100, 100, 0),   // Bottom-right
      new THREE.Vector3(0, 130, 20),    // Bottom (ajustado para evitar superposición)
      new THREE.Vector3(-100, 80, 0),   // Bottom-left
      new THREE.Vector3(-120, -20, -20),// Left
      new THREE.Vector3(-80, -100, 0),  // Top-left
    ];

    // Create connection lines and endpoint nodes
    connectionPositions.forEach(position => {
      // Create line from center to endpoint
      const linePoints = [
        new THREE.Vector3(0, 0, 0),
        position.clone()
      ];
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      group.add(line);
      
      // Create endpoint node
      const nodeGeometry = new THREE.SphereGeometry(7.5, 16, 16);
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(position);
      group.add(node);
    });

    // Add smaller nodes around the center - posiciones ajustadas para la parte inferior
    const smallNodePositions = [
      // Inner small nodes
      new THREE.Vector3(30, -40, 10),
      new THREE.Vector3(50, -10, 5),
      new THREE.Vector3(40, 30, 0),
      new THREE.Vector3(10, 40, 5),      // Ajustado
      new THREE.Vector3(-20, 30, 10),    // Ajustado
      new THREE.Vector3(-40, 0, 5),
      new THREE.Vector3(-30, -25, 0),
      
      // Outer small nodes
      new THREE.Vector3(70, -60, -10),
      new THREE.Vector3(85, 20, -5),
      new THREE.Vector3(60, 55, 0),      // Ajustado
      new THREE.Vector3(-10, 60, 10),    // Ajustado significativamente
      new THREE.Vector3(-65, 40, 5),     // Ajustado
      new THREE.Vector3(-70, -45, -5),
      new THREE.Vector3(-20, -70, -10),
      new THREE.Vector3(40, -90, 0),
    ];

    // Create small nodes
    smallNodePositions.forEach(position => {
      const smallNodeGeometry = new THREE.SphereGeometry(4, 12, 12);
      const smallNode = new THREE.Mesh(smallNodeGeometry, smallNodeMaterial);
      smallNode.position.copy(position);
      group.add(smallNode);
    });

    // Add logo group to scene
    scene.current.add(group);
    
    // Scale the logo to fit in the container
    group.scale.set(0.5, 0.5, 0.5);
    
    // Handle window resize
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
    window.addEventListener('resize', handleResize);
    
    // Animation loop - subtle rotation like Resend logo
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      
      if (logoGroup.current) {
        // Rotation basada en tiempo para asegurar animación consistente
        const time = Date.now() * 0.001; // convertir a segundos
        logoGroup.current.rotation.x = Math.sin(time * 0.3) * 0.1;
        logoGroup.current.rotation.y = Math.cos(time * 0.5) * 0.15;
        logoGroup.current.rotation.z = Math.sin(time * 0.2) * 0.05;
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