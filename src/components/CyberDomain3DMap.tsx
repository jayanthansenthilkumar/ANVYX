import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { 
  ArrowLeft, 
  RotateCcw, 
  X, 
  Zap, 
  ArrowRight, 
  Bot, 
  ShieldCheck, 
  HeartPulse, 
  Leaf, 
  Factory, 
  Sparkles,
  Maximize2
} from "lucide-react";
import { anvyx27Config, DomainTrack } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover, playCyberOpen, playCyberClose } from "../utils/audio";

interface CyberDomain3DMapProps {
  selectedSector: DomainTrack | null;
  onSelectSector: (sector: DomainTrack) => void;
  onResetView: () => void;
  isFullScreen?: boolean;
  onToggleFullScreen?: () => void;
  onCloseFullScreen?: () => void;
  onRegisterClick?: (sectorId: string) => void;
}

const DISTRICT_MAPPING: Record<string, string> = {
  district_1: "ai-smart-solutions",
  district_2: "cyber-defense-security",
  district_3: "industry-automation",
  district_4: "open-innovation-future",
  district_5: "green-sustainable-tech",
  district_6: "health-wellness-tech"
};

const CITY_CODES: Record<string, string> = {
  "ai-smart-solutions": "AITech",
  "cyber-defense-security": "CyberSec",
  "health-wellness-tech": "HealthTech",
  "green-sustainable-tech": "GreenTech",
  "industry-automation": "SmartIndustry",
  "open-innovation-future": "Innovation"
};

const FOCUS_AREAS: Record<string, string[]> = {
  "ai-smart-solutions": ["Generative AI & LLMs", "Computer Vision & NLP", "Predictive Analytics", "Intelligent Automation"],
  "cyber-defense-security": ["Threat Detection & SIEM", "Zero-Trust & Encryption", "Vulnerability Research", "AI Cyber Defense"],
  "health-wellness-tech": ["AI Clinical Diagnostics", "Vital Health Monitoring", "Mental Wellness Apps", "Smart Telemedicine"],
  "green-sustainable-tech": ["Renewable Energy Grids", "Smart Agriculture IoT", "Carbon Tracking & Waste", "Clean Tech Systems"],
  "industry-automation": ["Industrial IoT & Sensors", "Robotics & Process Auto", "Digital Twins", "Smart Manufacturing"],
  "open-innovation-future": ["Wildcard Hardware & IoT", "Spatial AR/VR Systems", "Quantum & Edge Compute", "Uncharted Tech"]
};

export const CyberDomain3DMap: React.FC<CyberDomain3DMapProps> = ({
  selectedSector,
  onSelectSector,
  onResetView,
  isFullScreen = false,
  onToggleFullScreen,
  onCloseFullScreen,
  onRegisterClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [hoveredSector, setHoveredSector] = useState<DomainTrack | null>(null);

  const badgeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const sectorMeshesRef = useRef<Array<{
    mesh: THREE.Mesh;
    sectorId: string;
    color: string;
    center: THREE.Vector3;
    borderLine: THREE.LineSegments;
    worldTriangles: Array<{ a: { x: number; z: number }; b: { x: number; z: number }; c: { x: number; z: number } }>;
  }>>([]);

  const activeSectorIdRef = useRef<string | null>(selectedSector ? selectedSector.id : null);
  activeSectorIdRef.current = selectedSector ? selectedSector.id : null;

  const targetCamPos = useRef<{ x: number; y: number; z: number }>({ x: 0, y: 22, z: 0.001 });
  const targetLookAt = useRef<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 });
  const currentLookAt = useRef<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 });

  // Handle escape key in fullscreen
  useEffect(() => {
    if (!isFullScreen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseFullScreen?.();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isFullScreen, onCloseFullScreen]);

  // Main Three.js Scene Setup & Model Loading
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    if (width === 0 || height === 0) return;

    const isMobile = window.innerWidth < 768;
    const initialCamY = isMobile ? 24 : 22;
    const initialCamZ = isMobile ? 2.5 : 0.001;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#050505");
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, initialCamY, initialCamZ);
    targetCamPos.current = { x: 0, y: initialCamY, z: initialCamZ };
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.touchAction = "none";

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xc7d2fe, 0.85);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x818cf8, 0x1e1b4b, 0.6);
    scene.add(hemiLight);

    const dirLight1 = new THREE.DirectionalLight(0xe0e7ff, 1.25);
    dirLight1.position.set(15, 45, 15);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.65);
    dirLight2.position.set(-20, 25, -20);
    scene.add(dirLight2);

    // Deep Dark Ground Plane
    const groundGeo = new THREE.PlaneGeometry(300, 300);
    const groundMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#050608") });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.5;
    scene.add(groundMesh);

    // Group for GLTF city
    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    // Load GLTF Campus & Districts Model
    const loader = new GLTFLoader();
    const sectorMeshes: typeof sectorMeshesRef.current = [];

    loader.load(
      "/map/cleanedmap.glb",
      (gltf) => {
        const rootScene = gltf.scene;
        rootScene.rotation.y = isMobile ? 0 : Math.PI / 2;

        const groundBuildingMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#080B12"),
          side: THREE.DoubleSide
        });

        const glowingBuildingMat = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#6366F1"),
          emissive: new THREE.Color("#4F46E5"),
          emissiveIntensity: 0.5,
          roughness: 0.25,
          metalness: 0.35,
          transparent: true,
          opacity: 0.88,
          depthWrite: true,
          side: THREE.FrontSide
        });

        const wireframeMat = new THREE.LineBasicMaterial({
          color: new THREE.Color("#A5B4FC"),
          linewidth: 1,
          transparent: true,
          opacity: 0.95
        });

        rootScene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const name = mesh.name.trim().toLowerCase();

            if (Object.keys(DISTRICT_MAPPING).includes(name)) {
              // Sector District Polygon Mesh
              const sectorId = DISTRICT_MAPPING[name];
              const domain = anvyx27Config.domains.find(d => d.id === sectorId);
              const colorHex = domain?.color || "#6366F1";

              mesh.geometry.computeVertexNormals();
              mesh.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(colorHex),
                emissive: new THREE.Color(colorHex),
                emissiveIntensity: 0.06,
                transparent: true,
                opacity: 0.07,
                depthWrite: false,
                side: THREE.DoubleSide
              });
              mesh.renderOrder = 5;

              // Glowing Polygon Border
              const edgesGeo = new THREE.EdgesGeometry(mesh.geometry, 6);
              const borderLine = new THREE.LineSegments(
                edgesGeo,
                new THREE.LineBasicMaterial({
                  color: new THREE.Color(colorHex),
                  linewidth: 2,
                  transparent: true,
                  opacity: 0.55
                })
              );
              borderLine.position.y = 0.005;
              borderLine.renderOrder = 25;
              mesh.add(borderLine);

              sectorMeshes.push({
                mesh,
                sectorId,
                color: colorHex,
                center: new THREE.Vector3(),
                borderLine,
                worldTriangles: []
              });
            } else {
              // Campus building or terrain mesh
              mesh.geometry.computeBoundingBox();
              const bb = mesh.geometry.boundingBox;
              const sx = bb ? Math.abs(bb.max.x - bb.min.x) : 0;
              const sy = bb ? Math.abs(bb.max.y - bb.min.y) : 0;
              const sz = bb ? Math.abs(bb.max.z - bb.min.z) : 0;
              const maxDim = Math.max(sx, sy, sz);

              if (
                name === "material2.103" ||
                name.includes("material3") ||
                name.includes("ground") ||
                name.includes("terrain") ||
                name.includes("base") ||
                name.includes("plane") ||
                (maxDim > 1200 && (sz < 2 || sy < 2))
              ) {
                mesh.material = groundBuildingMat;
                mesh.renderOrder = 1;
              } else {
                mesh.material = glowingBuildingMat;
                mesh.renderOrder = 20;
                try {
                  const edges = new THREE.EdgesGeometry(mesh.geometry, 15);
                  const lines = new THREE.LineSegments(edges, wireframeMat);
                  lines.renderOrder = 22;
                  mesh.add(lines);
                } catch {}
              }
            }
          }
        });

        cityGroup.add(rootScene);
        scene.updateMatrixWorld(true);

        // Center and scale the city model accurately
        const bbox = new THREE.Box3();
        sectorMeshes.forEach(s => bbox.expandByObject(s.mesh));
        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        bbox.getCenter(center);
        bbox.getSize(size);

        const maxCoord = Math.max(size.x, size.z);
        const scale = maxCoord > 0 ? 18 / maxCoord : 1;
        rootScene.scale.set(scale, scale, scale);
        rootScene.position.x = -center.x * scale;
        rootScene.position.y = -center.y * scale;
        rootScene.position.z = -center.z * scale;
        scene.updateMatrixWorld(true);

        // Compute 3D centers & world triangles for raycast picking
        sectorMeshes.forEach(s => {
          new THREE.Box3().setFromObject(s.mesh).getCenter(s.center);
          const posAttr = s.mesh.geometry.attributes.position;
          const indexAttr = s.mesh.geometry.index;
          const triangles: typeof s.worldTriangles = [];
          const vA = new THREE.Vector3();
          const vB = new THREE.Vector3();
          const vC = new THREE.Vector3();

          if (indexAttr) {
            for (let i = 0; i < indexAttr.count; i += 3) {
              const a = indexAttr.getX(i);
              const b = indexAttr.getX(i + 1);
              const c = indexAttr.getX(i + 2);
              vA.fromBufferAttribute(posAttr, a).applyMatrix4(s.mesh.matrixWorld);
              vB.fromBufferAttribute(posAttr, b).applyMatrix4(s.mesh.matrixWorld);
              vC.fromBufferAttribute(posAttr, c).applyMatrix4(s.mesh.matrixWorld);
              triangles.push({ a: { x: vA.x, z: vA.z }, b: { x: vB.x, z: vB.z }, c: { x: vC.x, z: vC.z } });
            }
          }
          s.worldTriangles = triangles;
        });

        sectorMeshesRef.current = sectorMeshes;
        setLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadProgress(Math.round((xhr.loaded / xhr.total) * 100));
        }
      },
      (err) => {
        console.warn("GLB model load warning:", err);
        setLoading(false);
      }
    );

    // Raycaster for Hover & Selection
    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();

    const pickSectorAtPoint = (clientX: number, clientY: number): string | null => {
      if (!cameraRef.current || sectorMeshesRef.current.length === 0) return null;
      const rect = renderer.domElement.getBoundingClientRect();
      mouseVec.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseVec.y = -(((clientY - rect.top) / rect.height) * 2) + 1;
      raycaster.setFromCamera(mouseVec, cameraRef.current);

      for (const item of sectorMeshesRef.current) {
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -item.center.y);
        const intersectPoint = new THREE.Vector3();
        if (raycaster.ray.intersectPlane(plane, intersectPoint)) {
          for (const tri of item.worldTriangles) {
            // Point in 2D triangle test on X-Z plane
            const pX = intersectPoint.x;
            const pZ = intersectPoint.z;
            const x1 = tri.a.x, z1 = tri.a.z;
            const x2 = tri.b.x, z2 = tri.b.z;
            const x3 = tri.c.x, z3 = tri.c.z;

            const d1 = (x2 - x1) * (pZ - z1) - (z2 - z1) * (pX - x1);
            const d2 = (x3 - x2) * (pZ - z2) - (z3 - z2) * (pX - x2);
            const d3 = (x1 - x3) * (pZ - z3) - (z1 - z3) * (pX - x3);

            const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
            const hasPos = d1 > 0 || d2 > 0 || d3 > 0;
            if (!(hasNeg && hasPos)) {
              return item.sectorId;
            }
          }
        }
      }
      return null;
    };

    // Mouse & Touch Pan / Interaction
    let isDragging = false;
    let didMove = false;
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      didMove = false;
      startX = e.clientX;
      startY = e.clientY;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        lastX = e.clientX;
        lastY = e.clientY;

        if (Math.hypot(e.clientX - startX, e.clientY - startY) > 8) {
          didMove = true;
        }

        if (didMove) {
          const panSpeed = isMobile ? 0.04 : 0.05;
          const newX = Math.max(-25, Math.min(25, targetCamPos.current.x - dx * panSpeed));
          const newZ = Math.max(-25, Math.min(25, targetCamPos.current.z - dy * panSpeed));
          const deltaX = newX - targetCamPos.current.x;
          const deltaZ = newZ - targetCamPos.current.z;

          targetCamPos.current.x = newX;
          targetCamPos.current.z = newZ;
          targetLookAt.current.x += deltaX;
          targetLookAt.current.z += deltaZ;
          return;
        }
      }

      // Hover Raycast
      const hitId = pickSectorAtPoint(e.clientX, e.clientY);
      if (hitId) {
        const domain = anvyx27Config.domains.find(d => d.id === hitId);
        if (domain) {
          setHoveredSector(domain);
          renderer.domElement.style.cursor = "pointer";
          return;
        }
      }
      setHoveredSector(null);
      renderer.domElement.style.cursor = "default";
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!didMove && isDragging) {
        const hitId = pickSectorAtPoint(e.clientX, e.clientY);
        if (hitId) {
          playCyberClick();
          const domain = anvyx27Config.domains.find(d => d.id === hitId);
          if (domain) {
            onSelectSector(domain);
          }
        }
      }
      isDragging = false;
      didMove = false;
    };

    const canvasEl = renderer.domElement;
    canvasEl.addEventListener("pointerdown", onPointerDown, { passive: true });
    canvasEl.addEventListener("pointermove", onPointerMove, { passive: true });
    canvasEl.addEventListener("pointerup", onPointerUp, { passive: true });

    // Animation Render Loop
    let reqId: number;
    const renderLoop = () => {
      reqId = requestAnimationFrame(renderLoop);

      // Camera position easing
      camera.position.x += (targetCamPos.current.x - camera.position.x) * 0.08;
      camera.position.y += (targetCamPos.current.y - camera.position.y) * 0.08;
      camera.position.z += (targetCamPos.current.z - camera.position.z) * 0.08;

      // LookAt easing
      currentLookAt.current.x += (targetLookAt.current.x - currentLookAt.current.x) * 0.08;
      currentLookAt.current.y += (targetLookAt.current.y - currentLookAt.current.y) * 0.08;
      currentLookAt.current.z += (targetLookAt.current.z - currentLookAt.current.z) * 0.08;
      camera.lookAt(currentLookAt.current.x, currentLookAt.current.y, currentLookAt.current.z);

      // Sector highlighting materials
      const activeId = activeSectorIdRef.current;
      sectorMeshesRef.current.forEach(({ sectorId, borderLine, color, mesh }) => {
        const lineMat = borderLine.material as THREE.LineBasicMaterial;
        const meshMat = mesh.material as THREE.MeshStandardMaterial;

        if (activeId === sectorId) {
          lineMat.opacity = 1;
          lineMat.color.set("#FFFFFF");
          meshMat.opacity = 0.22;
          meshMat.emissiveIntensity = 0.22;
        } else if (hoveredSector?.id === sectorId) {
          lineMat.opacity = 0.85;
          lineMat.color.set(color);
          meshMat.opacity = 0.14;
          meshMat.emissiveIntensity = 0.12;
        } else if (activeId) {
          lineMat.opacity = 0.22;
          lineMat.color.set(color);
          meshMat.opacity = 0.03;
          meshMat.emissiveIntensity = 0.03;
        } else {
          lineMat.opacity = 0.55;
          lineMat.color.set(color);
          meshMat.opacity = 0.07;
          meshMat.emissiveIntensity = 0.06;
        }
      });

      // Project 3D positions to 2D HTML Badges
      const w = container.clientWidth;
      const h = container.clientHeight;

      anvyx27Config.domains.forEach((domain) => {
        const badgeEl = badgeRefs.current[domain.id];
        if (!badgeEl) return;

        const meshInfo = sectorMeshesRef.current.find(s => s.sectorId === domain.id);
        const worldPos = new THREE.Vector3(
          domain.coordinates3D?.x || 0,
          (domain.coordinates3D?.y || 1) + 1.6,
          domain.coordinates3D?.z || 0
        );

        if (meshInfo && (meshInfo.center.x !== 0 || meshInfo.center.z !== 0)) {
          worldPos.set(meshInfo.center.x, meshInfo.center.y + 1.6, meshInfo.center.z);
        }

        const projected = worldPos.clone().project(camera);
        const screenX = (projected.x * 0.5 + 0.5) * w;
        const screenY = (-projected.y * 0.5 + 0.5) * h;

        // Hide badges if behind camera or if sector is focused
        if (projected.z < 1 && screenX >= 20 && screenX <= w - 20 && screenY >= 20 && screenY <= h - 20 && !activeId) {
          badgeEl.style.display = "block";
          badgeEl.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -100%)`;
        } else {
          badgeEl.style.display = "none";
        }
      });

      renderer.render(scene, camera);
    };

    renderLoop();

    // Resize Observer
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      if (nw === 0 || nh === 0) return;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      ro.disconnect();
      canvasEl.removeEventListener("pointerdown", onPointerDown);
      canvasEl.removeEventListener("pointermove", onPointerMove);
      canvasEl.removeEventListener("pointerup", onPointerUp);
      renderer.dispose();
    };
  }, []);

  // Fly Camera to Selected Sector
  useEffect(() => {
    activeSectorIdRef.current = selectedSector ? selectedSector.id : null;
    const isMobile = window.innerWidth < 768;

    if (!selectedSector) {
      targetCamPos.current = {
        x: 0,
        y: isMobile ? 24 : 22,
        z: isMobile ? 2.5 : 0.001
      };
      targetLookAt.current = { x: 0, y: 0, z: 0 };
      return;
    }

    const meshInfo = sectorMeshesRef.current.find(s => s.sectorId === selectedSector.id);
    if (meshInfo) {
      const { x, y, z } = meshInfo.center;
      targetLookAt.current = { x, y, z };
      targetCamPos.current = {
        x: x + (isMobile ? 2.8 : 3.5),
        y: isMobile ? 8.5 : 6.5,
        z: z + (isMobile ? 7 : 5.5)
      };
    } else if (selectedSector.coordinates3D) {
      const { x, y, z } = selectedSector.coordinates3D;
      targetLookAt.current = { x, y, z };
      targetCamPos.current = {
        x: x + (isMobile ? 2.8 : 3.5),
        y: isMobile ? 8.5 : 6.5,
        z: z + (isMobile ? 7 : 5.5)
      };
    }
  }, [selectedSector]);

  const getDomainIcon = (id: string) => {
    switch (id) {
      case "ai-smart-solutions":
        return <Bot className="w-5 h-5 text-[#6575F5]" />;
      case "cyber-defense-security":
        return <ShieldCheck className="w-5 h-5 text-[#9333EA]" />;
      case "health-wellness-tech":
        return <HeartPulse className="w-5 h-5 text-[#F43F5E]" />;
      case "green-sustainable-tech":
        return <Leaf className="w-5 h-5 text-[#10B981]" />;
      case "industry-automation":
        return <Factory className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <div className={`relative w-full h-full min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] bg-[#050505] overflow-hidden font-sans select-none ${isFullScreen ? "fixed inset-0 z-[150] min-h-screen" : "rounded-2xl border border-[rgba(100,110,160,0.22)] shadow-[0_0_50px_rgba(0,0,0,0.8)]"}`}>
      
      {/* Three.js Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing relative"
      />

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md flex flex-col items-center justify-center font-mono z-30 p-4">
          <div className="w-12 h-12 border-3 border-[#6575F5] border-t-[#55E5D2] rounded-full animate-spin mb-4" />
          <div className="text-xs font-bold text-[#55E5D2] uppercase tracking-widest animate-pulse">
            INITIALIZING 3D DOMAIN MATRIX...
          </div>
          <div className="w-56 bg-[#0B0D1B] h-2 mt-4 rounded-full overflow-hidden border border-white/10">
            <div 
              className="bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#55E5D2] h-full transition-all duration-300"
              style={{ width: `${loadProgress || 65}%` }}
            />
          </div>
          <span className="text-[10px] text-gray-500 mt-2 font-mono">
            {loadProgress}% LOADED // ASSETS PRIMED
          </span>
        </div>
      )}

      {/* FULLSCREEN HEADER BAR */}
      {isFullScreen ? (
        <header className="fixed top-0 left-0 right-0 z-40 h-[70px] sm:h-[74px] bg-[#020308]/92 backdrop-blur-xl border-b border-[rgba(100,110,160,0.16)] shadow-[0_4px_30px_rgba(0,0,0,0.8)] flex items-center justify-between px-4 sm:px-6 lg:px-8 font-mono">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playCyberClick();
                onCloseFullScreen?.();
              }}
              className="w-10 h-10 rounded-xl bg-[#060814]/90 hover:bg-[#6575F5]/20 border border-[rgba(100,110,160,0.25)] hover:border-[#6575F5]/60 text-[#6575F5] hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-lg active:scale-95 group"
              title="Return to Main Overview (Esc)"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="flex items-baseline">
              <span className="font-display font-black text-xl text-white tracking-tight">ANVYX</span>
              <span className="font-mono font-bold text-xs text-[#FF405F] ml-0.5">'27</span>
              <span className="text-[11px] text-gray-400 ml-2 hidden sm:inline">// 3D DOMAIN MATRIX</span>
            </div>
          </div>

          {/* Desktop Sector Selector Bar */}
          <nav className="hidden md:flex items-center gap-3 font-mono text-xs select-none">
            <button
              onClick={() => {
                playCyberClick();
                onResetView();
              }}
              className={`py-1.5 px-3 rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                !selectedSector 
                  ? "bg-[#6575F5] text-white font-bold shadow-[0_0_15px_rgba(101,117,245,0.5)]" 
                  : "text-gray-400 hover:text-white bg-white/5"
              }`}
            >
              ALL SECTORS
            </button>

            {anvyx27Config.domains.map((track, idx) => {
              const isSelected = selectedSector?.id === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => {
                    playCyberClick();
                    onSelectSector(track);
                  }}
                  className={`py-1.5 px-3 rounded-lg uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected 
                      ? "bg-[#6575F5] text-white font-bold shadow-[0_0_15px_rgba(101,117,245,0.5)]" 
                      : "text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <span className={`text-[10px] ${isSelected ? "text-[#55E5D2]" : "text-gray-500"}`}>
                    0{idx + 1}
                  </span>
                  <span>{track.cityCode || track.sectorCode}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {selectedSector ? (
              <button
                onClick={() => {
                  playCyberClick();
                  onResetView();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer text-xs font-bold"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#55E5D2]" />
                <span className="hidden sm:inline">RESET VIEW</span>
              </button>
            ) : (
              <div className="w-16" />
            )}
          </div>
        </header>
      ) : (
        /* CARD OVERLAY: TOP BADGE & CONTROLS */
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20 font-mono text-xs">
          {/* Top-Left Pill: DOMAIN NETWORK */}
          <div className="px-3 py-1.5 rounded-lg bg-[#0D0D12]/90 border border-white/15 text-indigo-300 flex items-center gap-2 pointer-events-auto shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#55E5D2] animate-pulse shadow-[0_0_8px_#55E5D2]" />
            <span className="font-bold tracking-widest text-[11px] text-white">
              {selectedSector ? `SECTOR // ${selectedSector.cityCode || selectedSector.sectorCode}` : "• DOMAIN NETWORK"}
            </span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            {selectedSector && (
              <button
                onClick={() => {
                  playCyberClick();
                  onResetView();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D0D12]/90 hover:bg-white/10 border border-white/15 text-gray-300 hover:text-white transition-all cursor-pointer backdrop-blur-md text-[11px] font-mono font-bold shadow-lg active:scale-95"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#55E5D2]" />
                <span className="hidden sm:inline">RESET</span>
              </button>
            )}

            {onToggleFullScreen && (
              <button
                onClick={() => {
                  playCyberClick();
                  onToggleFullScreen();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D0D12]/90 hover:bg-[#6575F5]/20 border border-white/15 hover:border-[#6575F5] text-gray-300 hover:text-white transition-all cursor-pointer backdrop-blur-md text-[11px] font-mono font-bold shadow-lg"
                title="Fullscreen Map View"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#6575F5]" />
                <span className="hidden sm:inline">EXPAND</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* BOTTOM-RIGHT BADGE: 06 SECTORS ACTIVE */}
      {!isFullScreen && (
        <div className="absolute bottom-4 right-4 bg-[#0D0D12]/90 border border-white/15 px-4 py-2 rounded-xl backdrop-blur-md pointer-events-none z-20 text-right">
          <div className="text-[10px] font-mono text-gray-400 font-medium uppercase tracking-wider">
            // HACKATHON DOMAINS
          </div>
          <div className="text-xs sm:text-sm font-bold font-mono text-[#55E5D2] leading-tight flex items-center justify-end gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55E5D2] animate-ping" />
            06 SECTORS ACTIVE
          </div>
        </div>
      )}

      {/* HOVER TOOLTIP FLOATING CARD */}
      {hoveredSector && !selectedSector && (
        <div className="absolute top-16 right-4 bg-[#0D0D12]/95 border border-[rgba(101,117,245,0.4)] p-4 rounded-2xl max-w-[240px] shadow-[0_0_30px_rgba(0,0,0,0.9)] backdrop-blur-xl pointer-events-none z-20 font-sans animate-fadeIn">
          <div className="flex items-center justify-between text-[10px] font-mono text-indigo-400 border-b border-white/10 pb-1.5 mb-1.5 font-bold">
            <span>[{hoveredSector.sectorCode}]</span>
            {getDomainIcon(hoveredSector.id)}
          </div>
          <div className="text-sm font-bold text-white">
            {hoveredSector.cityCode}
          </div>
          <div className="text-xs text-[#55E5D2] font-semibold truncate mb-1">
            {hoveredSector.name}
          </div>
          <p className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed">
            {hoveredSector.tagline}
          </p>
          <div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-1.5 font-mono text-[10px]">
            <span className="text-gray-500">SECTOR STATUS:</span>
            <span className="text-emerald-400 font-bold">READY TO HACK</span>
          </div>
        </div>
      )}

      {/* 3D PROJECTED HTML BADGES */}
      {!loading && !selectedSector && anvyx27Config.domains.map((domain) => (
        <div
          key={domain.id}
          ref={(el) => {
            badgeRefs.current[domain.id] = el;
          }}
          style={{ position: "absolute", top: 0, left: 0, display: "none", willChange: "transform" }}
          className="z-20 pointer-events-auto select-none"
        >
          <button
            onClick={() => {
              playCyberClick();
              onSelectSector(domain);
            }}
            onMouseEnter={playCyberHover}
            className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-xl border backdrop-blur-xl transition-all duration-300 shadow-2xl cursor-pointer ${
              hoveredSector?.id === domain.id
                ? "bg-[#0D0D12]/95 border-[#55E5D2] text-white scale-105 shadow-[0_0_20px_rgba(85,229,210,0.6)]"
                : "bg-[#060609]/90 border-white/20 text-slate-200 hover:border-[#6575F5] hover:text-white"
            }`}
          >
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1 font-mono text-[9px] text-indigo-300 font-bold uppercase tracking-wider">
                <span>{domain.sectorCode}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="font-display text-[11px] sm:text-xs font-bold whitespace-nowrap text-white">
                {domain.cityCode}
              </div>
            </div>
            {/* Downward pointer caret */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#0D0D12] border-r border-b border-white/20 rotate-45" />
          </button>
        </div>
      ))}

      {/* SELECTED SECTOR DOSSIER POPUP CARD */}
      {selectedSector && (
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-5 rounded-2xl bg-[#080616]/98 border border-[#6575F5]/40 shadow-[0_0_50px_rgba(0,0,0,0.95)] backdrop-blur-2xl text-white font-sans animate-fadeIn z-40 max-h-[75vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 font-mono text-xs">
            <span className="text-[#55E5D2] font-bold tracking-wider">
              // SECTOR DOSSIER
            </span>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                TARGET LOCKED
              </span>
              <button
                onClick={() => {
                  playCyberClose();
                  onResetView();
                }}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all cursor-pointer"
                title="Close dossier"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2.5 mb-1">
            {getDomainIcon(selectedSector.id)}
            <h3 className="font-display font-black text-lg text-white uppercase tracking-tight">
              {selectedSector.name}
            </h3>
          </div>

          <div className="text-xs font-mono text-[#55E5D2] mb-2">
            {selectedSector.cityCode} • {selectedSector.sectorCode}
          </div>

          <p className="text-xs text-gray-300 leading-relaxed mb-4">
            {selectedSector.description}
          </p>

          {/* Focus Protocols */}
          {FOCUS_AREAS[selectedSector.id] && (
            <div className="mb-4 space-y-1.5">
              <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider block">
                FOCUS PROTOCOLS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {FOCUS_AREAS[selectedSector.id].map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-[#6575F5]/15 border border-[#6575F5]/25 text-[10px] font-mono text-indigo-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action CTA */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                playCyberClick();
                onResetView();
              }}
              className="text-xs font-mono text-gray-400 hover:text-white underline cursor-pointer"
            >
              RESET VIEW
            </button>

            <button
              onClick={() => {
                playCyberClick();
                onRegisterClick?.(selectedSector.id);
              }}
              onMouseEnter={playCyberHover}
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(101,117,245,0.5)] hover:scale-102 active:scale-98 transition-all cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-yellow-300" />
              <span>REGISTER SQUAD FOR THIS SECTOR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* BOTTOM INSTRUCTIONS HINT */}
      <div className="absolute bottom-4 left-4 text-[10px] font-mono text-gray-500 pointer-events-none hidden md:block">
        Drag to Pan / Rotate City • Click Sector Badge or Building Cluster to Lock On
      </div>

    </div>
  );
};
