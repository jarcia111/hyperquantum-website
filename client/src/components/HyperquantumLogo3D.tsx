import { useRef, useEffect, useState } from 'react';
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
  
  // Referencias para animaciones avanzadas
  const centerNode = useRef<THREE.Mesh | null>(null);
  const connectorLines = useRef<THREE.Line[]>([]);
  const mainNodes = useRef<THREE.Mesh[]>([]);
  const smallNodes = useRef<THREE.Mesh[]>([]);
  const energyPulses = useRef<THREE.Mesh[]>([]);
  const pulseTimers = useRef<number[]>([]);
  
  // Estado para controlar cuándo iniciar los pulsos
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Limpieza de cualquier referencia previa
    centerNode.current = null;
    connectorLines.current = [];
    mainNodes.current = [];
    smallNodes.current = [];
    energyPulses.current = [];
    pulseTimers.current = [];

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
    
    // Iluminación mejorada para efectos más dramáticos
    const primaryLight = new THREE.DirectionalLight(0xffffff, 1.5);
    primaryLight.position.set(1, 1, 1);
    scene.current.add(primaryLight);
    
    const secondaryLight = new THREE.DirectionalLight(0x00D1FF, 0.8);
    secondaryLight.position.set(-1, -1, -1);
    scene.current.add(secondaryLight);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.current.add(ambientLight);
    
    // Añadir una luz puntual en el centro para efecto de resplandor
    const pointLight = new THREE.PointLight(new THREE.Color(logoColor), 1.2, 150);
    pointLight.position.set(0, 0, 0);
    group.add(pointLight);
    
    // Material para el nodo central (más brillante y energético)
    const centerNodeMaterial = new THREE.MeshPhysicalMaterial({ 
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.95,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.2,
      emissive: new THREE.Color(logoColor),
      emissiveIntensity: 0.5
    });
    
    // Material para los nodos principales con emisión
    const nodeMaterial = new THREE.MeshPhysicalMaterial({ 
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.9,
      roughness: 0.3,
      metalness: 0.7,
      clearcoat: 0.8,
      emissive: new THREE.Color(logoColor),
      emissiveIntensity: 0.3
    });
    
    // Material para los nodos pequeños
    const smallNodeMaterial = new THREE.MeshPhysicalMaterial({ 
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.85,
      roughness: 0.4,
      metalness: 0.6,
      emissive: new THREE.Color(logoColor),
      emissiveIntensity: 0.2
    });
    
    // Material para las líneas de conexión
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: new THREE.Color(logoColor),
      linewidth: 2,
      opacity: 0.8,
      transparent: true
    });
    
    // Material para los pulsos de energía
    const pulseMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.7
    });

    // Create center node (larger sphere) con geometría más compleja
    const centerGeometry = new THREE.SphereGeometry(15, 32, 32);
    const center = new THREE.Mesh(centerGeometry, centerNodeMaterial);
    centerNode.current = center;
    group.add(center);
    
    // Añadir un halo alrededor del nodo central
    const haloGeometry = new THREE.SphereGeometry(17, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    group.add(halo);

    // Define connection points - ajustados para mayor dinamismo
    const connectionPositions = [
      new THREE.Vector3(0, -150, 20),    // Top
      new THREE.Vector3(120, -80, 0),    // Top-right
      new THREE.Vector3(150, 30, -20),   // Right
      new THREE.Vector3(100, 100, 0),    // Bottom-right
      new THREE.Vector3(0, 130, 20),     // Bottom
      new THREE.Vector3(-100, 80, 0),    // Bottom-left
      new THREE.Vector3(-120, -20, -20), // Left
      new THREE.Vector3(-80, -100, 0),   // Top-left
    ];

    // Create connection lines and endpoint nodes
    connectionPositions.forEach((position, index) => {
      // Create line from center to endpoint con geometría tubular
      const curve = new THREE.LineCurve3(
        new THREE.Vector3(0, 0, 0),
        position.clone()
      );
      
      // Línea principal
      const linePoints = [
        new THREE.Vector3(0, 0, 0),
        position.clone()
      ];
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      connectorLines.current.push(line);
      group.add(line);
      
      // Create endpoint node
      const nodeGeometry = new THREE.SphereGeometry(7.5, 24, 24);
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(position);
      mainNodes.current.push(node);
      group.add(node);
      
      // Crear objetos para los pulsos de energía
      const pulseGeometry = new THREE.SphereGeometry(3, 16, 16);
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial.clone());
      pulse.position.copy(new THREE.Vector3(0, 0, 0)); // Inicia en el centro
      pulse.scale.set(0.1, 0.1, 0.1); // Inicialmente pequeño
      pulse.userData = { 
        path: position.clone(),
        distance: 0,
        speed: 0.02 + Math.random() * 0.01,
        active: false,
        delay: index * 500 // Retraso escalonado para cada pulso
      };
      energyPulses.current.push(pulse);
      group.add(pulse);
      pulse.visible = false; // Inicialmente invisible
    });

    // Add smaller nodes around the center
    const smallNodePositions = [
      // Inner small nodes
      new THREE.Vector3(30, -40, 10),
      new THREE.Vector3(50, -10, 5),
      new THREE.Vector3(40, 30, 0),
      new THREE.Vector3(10, 40, 5),
      new THREE.Vector3(-20, 30, 10),
      new THREE.Vector3(-40, 0, 5),
      new THREE.Vector3(-30, -25, 0),
      
      // Outer small nodes
      new THREE.Vector3(70, -60, -10),
      new THREE.Vector3(85, 20, -5),
      new THREE.Vector3(60, 55, 0),
      new THREE.Vector3(-10, 60, 10),
      new THREE.Vector3(-65, 40, 5),
      new THREE.Vector3(-70, -45, -5),
      new THREE.Vector3(-20, -70, -10),
      new THREE.Vector3(40, -90, 0),
    ];

    // Create small nodes with more complex geometry
    smallNodePositions.forEach(position => {
      const smallNodeGeometry = new THREE.SphereGeometry(4, 16, 16);
      const smallNode = new THREE.Mesh(smallNodeGeometry, smallNodeMaterial);
      smallNode.position.copy(position);
      // Guardar posición original como userData para animaciones
      smallNode.userData = { 
        originalPos: position.clone(),
        phaseOffset: Math.random() * Math.PI * 2,
        amplitude: 0.3 + Math.random() * 0.3
      };
      smallNodes.current.push(smallNode);
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
    
    // Función para iniciar un pulso de energía
    const startPulse = (index: number) => {
      if (!energyPulses.current[index]) return;
      
      const pulse = energyPulses.current[index];
      pulse.visible = true;
      pulse.position.set(0, 0, 0);
      pulse.scale.set(0.5, 0.5, 0.5);
      pulse.userData.distance = 0;
      pulse.userData.active = true;
      
      // Programar el próximo pulso
      const nextPulseTime = 3000 + Math.random() * 2000; // Entre 3-5 segundos
      pulseTimers.current[index] = window.setTimeout(() => {
        startPulse(index);
      }, nextPulseTime);
    };
    
    // Iniciar pulsos después de un retraso inicial
    setTimeout(() => {
      setIsInitialized(true);
      energyPulses.current.forEach((_, index) => {
        setTimeout(() => {
          startPulse(index);
        }, index * 700); // Escalonado para no iniciar todos a la vez
      });
    }, 500);
    
    // Animation loop con movimientos más dinámicos
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      
      if (logoGroup.current) {
        // Rotación más dinámica
        const time = Date.now() * 0.001; // convertir a segundos
        logoGroup.current.rotation.x = Math.sin(time * 0.3) * 0.15;
        logoGroup.current.rotation.y = Math.cos(time * 0.4) * 0.2;
        logoGroup.current.rotation.z = Math.sin(time * 0.2) * 0.08;
        
        // Animación de "respiración" para el nodo central
        if (centerNode.current) {
          const breathScale = 1 + Math.sin(time * 1.5) * 0.04;
          centerNode.current.scale.set(breathScale, breathScale, breathScale);
          
          // Variación en la intensidad emisiva del material
          const material = centerNode.current.material as THREE.MeshPhysicalMaterial;
          material.emissiveIntensity = 0.4 + Math.sin(time * 2) * 0.2;
        }
        
        // Animar nodos principales para que pulsen sutilmente
        mainNodes.current.forEach((node, i) => {
          const nodeScale = 1 + Math.sin(time * 1.2 + i * 0.2) * 0.08;
          node.scale.set(nodeScale, nodeScale, nodeScale);
          
          // Variación en la intensidad emisiva
          const nodeMat = node.material as THREE.MeshPhysicalMaterial;
          nodeMat.emissiveIntensity = 0.2 + Math.sin(time * 1.5 + i * 0.3) * 0.15;
        });
        
        // Movimiento fluido de los nodos pequeños
        smallNodes.current.forEach((node, i) => {
          const originalPos = node.userData.originalPos;
          const phaseOffset = node.userData.phaseOffset;
          const amplitude = node.userData.amplitude;
          
          // Movimiento orbital sutil
          node.position.x = originalPos.x + Math.sin(time * 0.8 + phaseOffset) * amplitude * 3;
          node.position.y = originalPos.y + Math.cos(time * 0.7 + phaseOffset) * amplitude * 3;
          node.position.z = originalPos.z + Math.sin(time * 0.5 + phaseOffset) * amplitude * 2;
          
          // Pulsar tamaño
          const smallNodeScale = 1 + Math.sin(time * 2 + i * 0.4) * 0.15;
          node.scale.set(smallNodeScale, smallNodeScale, smallNodeScale);
        });
        
        // Animar las líneas de conexión (pulso sutil)
        connectorLines.current.forEach((line, i) => {
          const lineMat = line.material as THREE.LineBasicMaterial;
          lineMat.opacity = 0.6 + Math.sin(time * 1.2 + i * 0.25) * 0.2;
        });
        
        // Animar los pulsos de energía que viajan por las líneas
        energyPulses.current.forEach(pulse => {
          if (!pulse.userData.active) return;
          
          const path = pulse.userData.path;
          const speed = pulse.userData.speed;
          
          // Avanzar a lo largo de la línea
          pulse.userData.distance += speed;
          
          if (pulse.userData.distance >= 1) {
            // Llegó al final, hacerlo invisible
            pulse.visible = false;
            pulse.userData.active = false;
          } else {
            // Calcular posición a lo largo de la línea
            const x = pulse.userData.distance * path.x;
            const y = pulse.userData.distance * path.y;
            const z = pulse.userData.distance * path.z;
            
            pulse.position.set(x, y, z);
            
            // Efecto de "estela" con opacidad
            const pulseMat = pulse.material as THREE.MeshBasicMaterial;
            pulseMat.opacity = 0.8 - pulse.userData.distance * 0.3;
            
            // Efecto de que el pulso se alarga a medida que avanza
            const stretching = 1 + pulse.userData.distance * 0.8;
            const normalDirection = new THREE.Vector3().copy(path).normalize();
            pulse.scale.set(
              0.7 * (1 + pulse.userData.distance * 0.5), 
              0.7 * (1 + pulse.userData.distance * 0.5),
              0.7 * stretching
            );
            
            // Orientar el pulso a lo largo de la dirección
            const lookAtTarget = new THREE.Vector3().copy(pulse.position).add(normalDirection);
            pulse.lookAt(lookAtTarget);
          }
        });
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
      
      // Limpiar temporizadores
      pulseTimers.current.forEach(timerId => {
        if (timerId) clearTimeout(timerId);
      });
      
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