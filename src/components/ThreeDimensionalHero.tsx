import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const ThreeDimensionalHero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGL()) {
      setWebGLSupported(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080A12, 0.04);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for the entire ANVYX sculptural installation
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. SCULPTURAL "X" GEOMETRY
    // Bar dimensions
    const barWidth = 0.55;
    const barHeight = 4.2;
    const barDepth = 0.65;
    const boxGeo = new THREE.BoxGeometry(barWidth, barHeight, barDepth, 2, 2, 2);

    // Chrome Metallic Material
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1A2238,
      metalness: 0.95,
      roughness: 0.15,
      wireframe: false,
    });

    // Crystalline Luminous Core Material
    const crystalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x58E6FF,
      emissive: 0x1A2A48,
      roughness: 0.2,
      metalness: 0.3,
      transparent: true,
      opacity: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    // Create the two diagonal arms forming the ANVYX X
    const arm1 = new THREE.Mesh(boxGeo, chromeMaterial);
    arm1.rotation.z = Math.PI / 4; // 45 degrees
    sculptureGroup.add(arm1);

    const arm2 = new THREE.Mesh(boxGeo, chromeMaterial);
    arm2.rotation.z = -Math.PI / 4; // -45 degrees
    sculptureGroup.add(arm2);

    // Glowing crystalline inner core facet
    const coreGeo = new THREE.OctahedronGeometry(1.1, 0);
    const coreMesh = new THREE.Mesh(coreGeo, crystalMaterial);
    coreMesh.scale.set(1.1, 1.1, 0.8);
    sculptureGroup.add(coreMesh);

    // Surrounding orbital halo ring
    const ringGeo = new THREE.TorusGeometry(2.6, 0.025, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x9878FF,
      emissive: 0x483088,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.6
    });
    const haloRing = new THREE.Mesh(ringGeo, ringMat);
    haloRing.rotation.x = Math.PI / 3;
    sculptureGroup.add(haloRing);

    // Second counter-angled halo ring
    const haloRing2 = new THREE.Mesh(ringGeo, ringMat);
    haloRing2.rotation.x = -Math.PI / 3;
    haloRing2.rotation.y = Math.PI / 6;
    sculptureGroup.add(haloRing2);

    // 2. PARTICLES FIELD
    const particleCount = 500;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 16;
      positions[i + 2] = (Math.random() - 0.5) * 16;
      scales[i / 3] = Math.random() * 0.04 + 0.01;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x58E6FF,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. LIGHTING RIG
    // Ambient
    const ambientLight = new THREE.AmbientLight(0x080A12, 2.5);
    scene.add(ambientLight);

    // Cyan Key Light (Rim / Top Left)
    const cyanLight = new THREE.DirectionalLight(0x58E6FF, 3.5);
    cyanLight.position.set(-4, 5, 4);
    scene.add(cyanLight);

    // Violet Rim Light (Bottom Right)
    const violetLight = new THREE.PointLight(0x9878FF, 5, 12);
    violetLight.position.set(4, -3, 3);
    scene.add(violetLight);

    // Soft Front Fill
    const fillLight = new THREE.DirectionalLight(0xF4F6FF, 1.2);
    fillLight.position.set(0, 0, 5);
    scene.add(fillLight);

    // POINTER INTERACTION (Gentle Parallax)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Base sculptural rotation
      sculptureGroup.rotation.y = elapsedTime * 0.25 + targetX * 0.4;
      sculptureGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15 - targetY * 0.3;
      sculptureGroup.rotation.z = Math.cos(elapsedTime * 0.2) * 0.08;

      // Subtle breathing float on Y
      sculptureGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;

      // Halo counter-rotations
      haloRing.rotation.z = -elapsedTime * 0.4;
      haloRing2.rotation.y = elapsedTime * 0.35;

      // Particle slow vertical drift
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      boxGeo.dispose();
      chromeMaterial.dispose();
      crystalMaterial.dispose();
      coreGeo.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 select-none">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#58E6FF]/10 blur-3xl animate-pulse"></div>
          <svg viewBox="0 0 100 100" className="w-48 h-48 text-[#58E6FF] animate-spin" style={{ animationDuration: "30s" }}>
            <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <circle cx="50" cy="50" r="14" fill="#10162A" stroke="#9878FF" strokeWidth="2" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full absolute inset-0 pointer-events-none cursor-default"
      aria-hidden="true"
    />
  );
};
