"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface Model3DProps {
  darkMode: boolean;
}

export default function Model3D({ darkMode }: Model3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const objectRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Crear escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Configurar cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Configurar renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
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
      "/models/scene.gltf", // Asegúrate de que la ruta sea correcta
      (gltf: GLTF) => {
        const object = gltf.scene;

        object.scale.set(2, 2, 2);

        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.sub(center);

        scene.add(object);
        objectRef.current = object;
      },
      (xhr: ProgressEvent<EventTarget>) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% cargado");
      },
      (error: ErrorEvent) => {
        console.error("Error al cargar el modelo:", error);
      }
    );

    // Habilitar controles de órbita (si quieres usarlos)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Animación
    function animate() {
      animationIdRef.current = requestAnimationFrame(animate);

      if (objectRef.current) {
        objectRef.current.rotation.y +=
          (mouseRef.current.x * 0.5 - objectRef.current.rotation.y) * 0.05;
        objectRef.current.rotation.x +=
          (mouseRef.current.y * 0.2 - objectRef.current.rotation.x) * 0.05;

        objectRef.current.rotation.y += 0.002;
      }

      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Movimiento del mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        mouseRef.current.x =
          (e.clientX / containerRef.current.clientWidth) * 2 - 1;
        mouseRef.current.y =
          -(e.clientY / containerRef.current.clientHeight) * 2 + 1;
      }
    };

    // Redimensionar
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current)
        return;

      cameraRef.current.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[300px] md:h-[400px]"
      style={{ cursor: "grab" }}
    />
  );
}
