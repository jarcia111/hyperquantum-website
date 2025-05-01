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
  const connectionPositions = useRef<THREE.Vector3[]>([]);
  
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
    
    // Material para las líneas de conexión (más gruesas)
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: new THREE.Color(logoColor),
      linewidth: 4, // Aumentado de 2 a 4 (nota: hay un límite en WebGL para el ancho de línea)
      opacity: 0.9, // Aumentado de 0.8 a 0.9 para mayor visibilidad
      transparent: true
    });
    
    // Material para los pulsos de energía (más brillantes)
    const pulseMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.9, // Aumentado de 0.7 a 0.9
      emissive: new THREE.Color(logoColor),
      emissiveIntensity: 0.8, // Alta intensidad para efecto brillante
      roughness: 0.1,
      metalness: 0.9,
      clearcoat: 1.0, // Efecto de capa brillante
      clearcoatRoughness: 0.1
    });

    // Create center node (larger sphere) con geometría más compleja
    const centerGeometry = new THREE.SphereGeometry(20, 32, 32); // Aumentado de 15 a 20
    const center = new THREE.Mesh(centerGeometry, centerNodeMaterial);
    centerNode.current = center;
    group.add(center);
    
    // Añadir un halo alrededor del nodo central
    const haloGeometry = new THREE.SphereGeometry(24, 32, 32); // Aumentado de 17 a 24
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(logoColor),
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    group.add(halo);

    // Define connection points - ajustados para mayor dinamismo
    const positions = [
      new THREE.Vector3(0, -150, 20),    // Top
      new THREE.Vector3(120, -80, 0),    // Top-right
      new THREE.Vector3(150, 30, -20),   // Right
      new THREE.Vector3(100, 100, 0),    // Bottom-right
      new THREE.Vector3(0, 130, 20),     // Bottom
      new THREE.Vector3(-100, 80, 0),    // Bottom-left
      new THREE.Vector3(-120, -20, -20), // Left
      new THREE.Vector3(-80, -100, 0),   // Top-left
    ];
    
    // Guardar las posiciones en la referencia para uso en la animación
    connectionPositions.current = positions;

    // Create connection lines and endpoint nodes
    positions.forEach((position, index) => {
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
      
      // Create endpoint node (más grueso)
      const nodeGeometry = new THREE.SphereGeometry(12, 24, 24); // Aumentado de 7.5 a 12
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(position);
      mainNodes.current.push(node);
      group.add(node);
      
      // Crear objetos para los pulsos de energía (más grandes y brillantes)
      const pulseGeometry = new THREE.SphereGeometry(5, 16, 16); // Aumentado de 3 a 5
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial.clone());
      pulse.position.copy(new THREE.Vector3(0, 0, 0)); // Inicia en el centro
      pulse.scale.set(0.2, 0.2, 0.2); // Aumentado de 0.1 a 0.2 para que sea inicialmente más visible
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

    // Create small nodes with more complex geometry (más gruesos)
    smallNodePositions.forEach(position => {
      const smallNodeGeometry = new THREE.SphereGeometry(6.5, 16, 16); // Aumentado de 4 a 6.5
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
    
    // Animation loop con movimientos más dinámicos y giratorios
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      
      if (logoGroup.current) {
        // Rotación más dinámica con movimiento circular más pronunciado
        const time = Date.now() * 0.001; // convertir a segundos
        
        // Rotación continua y fluida en el eje Y (como un tiovivo)
        logoGroup.current.rotation.y += 0.005; // Rotación constante
        
        // Oscilación suave en X y Z para dar sensación de balance natural
        logoGroup.current.rotation.x = Math.sin(time * 0.3) * 0.2;
        logoGroup.current.rotation.z = Math.sin(time * 0.2) * 0.1;
        
        // Añadir un movimiento circular global al logo completo
        const circleRadius = 10;
        const circleSpeed = 0.2;
        logoGroup.current.position.x = Math.sin(time * circleSpeed) * circleRadius;
        logoGroup.current.position.y = Math.cos(time * circleSpeed) * circleRadius;
        
        // Animación de "respiración" para el nodo central
        if (centerNode.current) {
          const breathScale = 1 + Math.sin(time * 1.5) * 0.08; // Respiración más pronunciada
          centerNode.current.scale.set(breathScale, breathScale, breathScale);
          
          // Variación en la intensidad emisiva del material para efecto de pulso energético
          const material = centerNode.current.material as THREE.MeshPhysicalMaterial;
          material.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.3;
        }
        
        // Animar nodos principales para que pulsen y giren sutilmente en sus propios ejes
        mainNodes.current.forEach((node, i) => {
          // Escala pulsante
          const nodeScale = 1 + Math.sin(time * 1.2 + i * 0.2) * 0.12;
          node.scale.set(nodeScale, nodeScale, nodeScale);
          
          // Rotación individual de cada nodo
          node.rotation.x += 0.003 + (i % 3) * 0.001;
          node.rotation.y += 0.004 + (i % 2) * 0.002;
          
          // Movimiento circular orbital adicional
          const orbitRadius = 3;
          const orbitSpeed = 0.3 + (i * 0.05);
          const originalPosition = connectionPositions.current[i];
          const orbitPhase = (i * Math.PI / 4) + time * orbitSpeed;
          
          node.position.x = originalPosition.x + Math.sin(orbitPhase) * orbitRadius;
          node.position.y = originalPosition.y + Math.cos(orbitPhase) * orbitRadius;
          node.position.z = originalPosition.z + Math.sin(orbitPhase * 1.5) * orbitRadius * 0.5;
          
          // Variación en la intensidad emisiva
          const nodeMat = node.material as THREE.MeshPhysicalMaterial;
          nodeMat.emissiveIntensity = 0.3 + Math.sin(time * 1.5 + i * 0.3) * 0.2;
        });
        
        // Actualizar las líneas de conexión para que sigan a los nodos en movimiento
        connectorLines.current.forEach((line, i) => {
          // Obtener la posición actualizada del nodo principal
          const nodePosition = mainNodes.current[i].position.clone();
          
          // Actualizar la geometría de la línea
          const linePoints = [
            new THREE.Vector3(0, 0, 0), // Centro
            nodePosition // Nodo en movimiento
          ];
          
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
          line.geometry.dispose(); // Limpiar geometría anterior
          line.geometry = lineGeometry;
          
          // Efecto de pulso en la opacidad de las líneas
          const lineMat = line.material as THREE.LineBasicMaterial;
          lineMat.opacity = 0.6 + Math.sin(time * 1.2 + i * 0.25) * 0.35;
        });
        
        // Movimiento orbital más pronunciado para los nodos pequeños
        smallNodes.current.forEach((node, i) => {
          const originalPos = node.userData.originalPos;
          const phaseOffset = node.userData.phaseOffset;
          const amplitude = node.userData.amplitude;
          
          // Movimiento orbital más energético
          const orbitX = Math.sin(time * 1.2 + phaseOffset) * amplitude * 6;
          const orbitY = Math.cos(time * 1.0 + phaseOffset) * amplitude * 6;
          const orbitZ = Math.sin(time * 0.8 + phaseOffset * 2) * amplitude * 4;
          
          node.position.x = originalPos.x + orbitX;
          node.position.y = originalPos.y + orbitY;
          node.position.z = originalPos.z + orbitZ;
          
          // Rotación individual de cada nodo pequeño
          node.rotation.x += 0.01;
          node.rotation.y += 0.008;
          
          // Pulsar tamaño con efecto más vibrante
          const smallNodeScale = 1 + Math.sin(time * 3 + i * 0.4) * 0.25;
          node.scale.set(smallNodeScale, smallNodeScale, smallNodeScale);
        });
        
        // Animar los pulsos de energía que viajan por las líneas
        energyPulses.current.forEach((pulse, pulseIndex) => {
          if (!pulse.userData.active) return;
          
          const path = mainNodes.current[pulseIndex].position.clone(); // Usar la posición actualizada
          const speed = pulse.userData.speed;
          
          // Avanzar a lo largo de la línea
          pulse.userData.distance += speed;
          
          if (pulse.userData.distance >= 1) {
            // Llegó al final, hacerlo invisible
            pulse.visible = false;
            pulse.userData.active = false;
          } else {
            // Calcular posición a lo largo de la línea, ajustando a la posición actual del nodo
            const x = pulse.userData.distance * path.x;
            const y = pulse.userData.distance * path.y;
            const z = pulse.userData.distance * path.z;
            
            pulse.position.set(x, y, z);
            
            // Efecto de "estela" con opacidad más brillante
            const pulseMat = pulse.material as THREE.MeshBasicMaterial;
            pulseMat.opacity = 0.9 - pulse.userData.distance * 0.3;
            
            // Efecto de que el pulso se alarga y brilla más a medida que avanza
            const stretching = 1 + pulse.userData.distance * 1.2;
            const normalDirection = new THREE.Vector3().copy(path).normalize();
            pulse.scale.set(
              0.8 * (1 + pulse.userData.distance * 0.7), 
              0.8 * (1 + pulse.userData.distance * 0.7),
              0.8 * stretching
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