"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Model3DProps {
  darkMode: boolean;
}

export default function Model3D({ darkMode }: Model3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const objectRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationIdRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Crear escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Configurar cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 11; // Alejado más para ver el modelo completo
    camera.position.y = 1; // Ligeramente elevado para mejor ángulo
    cameraRef.current = camera;

    // Configurar renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Agregar luces
    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(5, 5, 5);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.5);
    frontLight.position.set(0, 0, 5);
    scene.add(frontLight);

    // Cargar modelo GLTF
    const loader = new GLTFLoader();
    loader.load(
      "/models/scene.gltf",
      (gltf) => {
        const object = gltf.scene;
        object.scale.set(1.5, 1.5, 1.5); // Reducido para mejor vista
        
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.sub(center);
        
        scene.add(object);
        objectRef.current = object;
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% cargado");
      },
      (error) => {
        console.error("Error al cargar el modelo:", error);
      }
    );

    // Controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = false;
    controlsRef.current = controls;

    // Función de animación
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (objectRef.current) {
        // Rotación continua suave en el eje Y
        objectRef.current.rotation.y += 0.005;
        
        // Pequeña inclinación en X para mejor vista
        objectRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;
      }

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      renderer.render(scene, camera);
    };

    // Iniciar animación
    animate();

    // Manejar movimiento del mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (container) {
        mouseRef.current.x = (e.clientX / container.clientWidth) * 2 - 1;
        mouseRef.current.y = -(e.clientY / container.clientHeight) * 2 + 1;
      }
    };

    // Manejar resize
    const handleResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = container.clientWidth / container.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      
      if (container && rendererRef.current?.domElement) {
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  // Usar darkMode para evitar warning
  useEffect(() => {
    if (darkMode) {
      // Modo oscuro activo
    }
  }, [darkMode]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[300px] md:h-[400px]"
      style={{ cursor: "grab" }}
    />
  );
}