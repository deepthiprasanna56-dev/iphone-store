import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, Play, Pause, Compass } from 'lucide-react';

export const ThreeIPhoneCanvas = ({ activeColor, className = '' }) => {
  const containerRef = useRef(null);
  const [isRotating, setIsRotating] = useState(true);
  const isRotatingRef = useRef(isRotating);
  const [hasInteracted, setHasInteracted] = useState(false);
  const phoneGroupRef = useRef(null);
  const materialsRef = useRef({});
  const initialColorRef = useRef(activeColor?.hex || '#6b4fa0');

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();

    // Camera
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.8);

    // High-performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Studio Lighting Rig (Purple & Titanium Specular Highlights)
    const ambientLight = new THREE.AmbientLight(0x1a0f2e, 2.2);
    scene.add(ambientLight);

    // Key Light (Crisp White Specular Rim)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    // Neon Purple Fill Light (Left Accent)
    const purpleLight = new THREE.PointLight(0xa855f7, 5.5, 25);
    purpleLight.position.set(-6, 2, 5);
    scene.add(purpleLight);

    // Fuchsia / Magenta Rim Light (Back Corner)
    const magentaLight = new THREE.PointLight(0xec4899, 4.8, 20);
    magentaLight.position.set(4, -4, -4);
    scene.add(magentaLight);

    // Orbiting Specular Glare Light
    const orbitLight = new THREE.PointLight(0xc084fc, 3.5, 15);
    orbitLight.position.set(0, 4, 3);
    scene.add(orbitLight);

    // Master Phone Hierarchy
    const phoneGroup = new THREE.Group();
    phoneGroupRef.current = phoneGroup;
    scene.add(phoneGroup);

    // Initial Angle
    phoneGroup.rotation.x = 0.08;
    phoneGroup.rotation.y = -0.42;

    // Helper: Rounded Rectangle
    const createRoundedRectShape = (w, h, r) => {
      const shape = new THREE.Shape();
      const x = -w / 2;
      const y = -h / 2;
      shape.moveTo(x + r, y);
      shape.lineTo(x + w - r, y);
      shape.quadraticCurveTo(x + w, y, x + w, y + r);
      shape.lineTo(x + w, y + h - r);
      shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      shape.lineTo(x + r, y + h);
      shape.quadraticCurveTo(x, y + h, x, y + h - r);
      shape.lineTo(x, y + r);
      shape.quadraticCurveTo(x, y, x + r, y);
      return shape;
    };

    const phoneWidth = 3.25;
    const phoneHeight = 6.65;
    const phoneThickness = 0.28;
    const cornerRadius = 0.46;

    // 1. Titanium Chassis
    const phoneShape = createRoundedRectShape(phoneWidth, phoneHeight, cornerRadius);
    const extrudeSettings = {
      depth: phoneThickness,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 1,
      bevelSize: 0.045,
      bevelThickness: 0.045
    };

    const chassisGeometry = new THREE.ExtrudeGeometry(phoneShape, extrudeSettings);
    chassisGeometry.center();

    const titaniumColor = new THREE.Color(initialColorRef.current || '#6b4fa0');
    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: titaniumColor,
      metalness: 0.92,
      roughness: 0.18
    });
    materialsRef.current.titanium = titaniumMaterial;

    const phoneMesh = new THREE.Mesh(chassisGeometry, titaniumMaterial);
    phoneGroup.add(phoneMesh);

    // 2. High-Gloss OLED Display Face
    const screenShape = createRoundedRectShape(phoneWidth - 0.12, phoneHeight - 0.12, cornerRadius - 0.04);
    const screenGeo = new THREE.ShapeGeometry(screenShape);

    // Gorgeous OLED Screen Texture with Glowing Siri / Apple Intelligence Ribbon
    const wallpaperCanvas = document.createElement('canvas');
    wallpaperCanvas.width = 1024;
    wallpaperCanvas.height = 2048;
    const wCtx = wallpaperCanvas.getContext('2d');
    if (wCtx) {
      // Midnight Cosmic Gradient
      const bgGrad = wCtx.createLinearGradient(0, 0, 1024, 2048);
      bgGrad.addColorStop(0, '#04020a');
      bgGrad.addColorStop(0.3, '#1e0b3c');
      bgGrad.addColorStop(0.65, '#4a1575');
      bgGrad.addColorStop(0.88, '#7e22ce');
      bgGrad.addColorStop(1, '#06020f');
      wCtx.fillStyle = bgGrad;
      wCtx.fillRect(0, 0, 1024, 2048);

      // Glowing Apple Intelligence Perimeter Ribbon (Iconic iOS Border Aura)
      wCtx.lineWidth = 18;
      const ribbonGrad = wCtx.createLinearGradient(0, 0, 1024, 2048);
      ribbonGrad.addColorStop(0, '#38bdf8');
      ribbonGrad.addColorStop(0.35, '#c084fc');
      ribbonGrad.addColorStop(0.65, '#f472b6');
      ribbonGrad.addColorStop(1, '#fb923c');
      wCtx.strokeStyle = ribbonGrad;
      wCtx.shadowBlur = 35;
      wCtx.shadowColor = 'rgba(192, 132, 252, 0.9)';
      wCtx.strokeRect(20, 20, 984, 2008);
      wCtx.shadowBlur = 0;

      // Concentric light waves
      wCtx.strokeStyle = 'rgba(236, 72, 153, 0.55)';
      wCtx.lineWidth = 28;
      wCtx.beginPath();
      wCtx.ellipse(680, 1050, 480, 720, Math.PI / 4, 0, Math.PI * 2);
      wCtx.stroke();

      wCtx.strokeStyle = 'rgba(168, 85, 247, 0.75)';
      wCtx.lineWidth = 16;
      wCtx.beginPath();
      wCtx.ellipse(560, 950, 360, 580, Math.PI / 4, 0, Math.PI * 2);
      wCtx.stroke();

      // Top Status Bar (9:41, 5G, Full Battery)
      wCtx.fillStyle = '#ffffff';
      wCtx.font = 'bold 36px -apple-system, sans-serif';
      wCtx.fillText('9:41', 120, 110);
      wCtx.font = '600 28px -apple-system, sans-serif';
      wCtx.textAlign = 'right';
      wCtx.fillText('5G  100%', 920, 110);

      // Center Apple Clock & Date
      wCtx.textAlign = 'center';
      wCtx.font = '500 36px -apple-system, sans-serif';
      wCtx.fillStyle = '#e9d5ff';
      wCtx.fillText('Friday, November 13', 512, 360);

      wCtx.font = 'bold 150px -apple-system, sans-serif';
      wCtx.fillStyle = '#ffffff';
      wCtx.shadowBlur = 20;
      wCtx.shadowColor = 'rgba(0,0,0,0.6)';
      wCtx.fillText('9:41', 512, 510);
      wCtx.shadowBlur = 0;

      // Sub-badge: Beyond The Ordinary
      wCtx.font = 'bold 32px -apple-system, sans-serif';
      wCtx.fillStyle = '#c084fc';
      wCtx.fillText('BEYOND THE ORDINARY', 512, 580);
      wCtx.font = '500 24px -apple-system, sans-serif';
      wCtx.fillStyle = '#a1a1aa';
      wCtx.fillText('Built for Apple Intelligence • A19 Pro', 512, 625);

      // Bottom Lockscreen Flashlight & Camera Icons
      wCtx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      wCtx.beginPath();
      wCtx.arc(140, 1860, 50, 0, Math.PI * 2);
      wCtx.arc(884, 1860, 50, 0, Math.PI * 2);
      wCtx.fill();

      // Home Bar Indicator
      wCtx.fillStyle = '#ffffff';
      wCtx.beginPath();
      wCtx.roundRect(362, 1980, 300, 10, 5);
      wCtx.fill();
    }
    const screenTexture = new THREE.CanvasTexture(wallpaperCanvas);

    const screenMaterial = new THREE.MeshStandardMaterial({
      map: screenTexture,
      roughness: 0.08,
      metalness: 0.12
    });

    const screenMesh = new THREE.Mesh(screenGeo, screenMaterial);
    screenMesh.position.z = phoneThickness / 2 + 0.048;
    phoneGroup.add(screenMesh);

    // 3. Dynamic Island Pill with Camera Eye
    const pillShape = createRoundedRectShape(0.74, 0.23, 0.115);
    const pillGeo = new THREE.ShapeGeometry(pillShape);
    const pillMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const pillMesh = new THREE.Mesh(pillGeo, pillMat);
    pillMesh.position.set(0, phoneHeight / 2 - 0.46, phoneThickness / 2 + 0.052);
    phoneGroup.add(pillMesh);

    // Front Camera Lens Dot inside Dynamic Island
    const dotGeo = new THREE.CircleGeometry(0.04, 16);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0x112233 });
    const dotMesh = new THREE.Mesh(dotGeo, dotMat);
    dotMesh.position.set(0.18, phoneHeight / 2 - 0.46, phoneThickness / 2 + 0.053);
    phoneGroup.add(dotMesh);

    // 4. Rear Camera Island Plateau
    const camIslandShape = createRoundedRectShape(1.42, 1.48, 0.34);
    const camIslandExtrude = {
      depth: 0.16,
      bevelEnabled: true,
      bevelSegments: 6,
      bevelSize: 0.035,
      bevelThickness: 0.035
    };
    const camIslandGeo = new THREE.ExtrudeGeometry(camIslandShape, camIslandExtrude);
    camIslandGeo.center();

    const camIslandMat = new THREE.MeshStandardMaterial({
      color: titaniumColor,
      metalness: 0.85,
      roughness: 0.2
    });
    materialsRef.current.camIsland = camIslandMat;

    const camIslandMesh = new THREE.Mesh(camIslandGeo, camIslandMat);
    camIslandMesh.position.set(-0.66, phoneHeight / 2 - 1.16, -(phoneThickness / 2 + 0.1));
    phoneGroup.add(camIslandMesh);

    // 5. Triple Camera System with Titanium Bezels & Sapphire Lenses
    const lensPositions = [
      { x: -0.94, y: phoneHeight / 2 - 0.85 },
      { x: -0.94, y: phoneHeight / 2 - 1.47 },
      { x: -0.38, y: phoneHeight / 2 - 1.16 }
    ];

    const lensRingGeo = new THREE.CylinderGeometry(0.27, 0.27, 0.09, 36);
    const lensGlassGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.105, 36);
    const innerIrisGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.11, 36);

    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.95,
      roughness: 0.12
    });

    const lensGlassMat = new THREE.MeshStandardMaterial({
      color: 0x1a0f2e,
      metalness: 0.9,
      roughness: 0.04
    });

    const innerIrisMat = new THREE.MeshStandardMaterial({
      color: 0x3b0764,
      metalness: 0.7,
      roughness: 0.1
    });

    lensPositions.forEach((pos) => {
      // Knurled Titanium Outer Ring
      const ring = new THREE.Mesh(lensRingGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(pos.x, pos.y, -(phoneThickness / 2 + 0.22));
      phoneGroup.add(ring);

      // Sapphire Glass Outer Lens
      const lens = new THREE.Mesh(lensGlassGeo, lensGlassMat);
      lens.rotation.x = Math.PI / 2;
      lens.position.set(pos.x, pos.y, -(phoneThickness / 2 + 0.225));
      phoneGroup.add(lens);

      // Iridescent Inner Sensor Iris
      const iris = new THREE.Mesh(innerIrisGeo, innerIrisMat);
      iris.rotation.x = Math.PI / 2;
      iris.position.set(pos.x, pos.y, -(phoneThickness / 2 + 0.228));
      phoneGroup.add(iris);
    });

    // True Tone Flash & LiDAR Sensor
    const flashGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.05, 16);
    const flashMat = new THREE.MeshStandardMaterial({ color: 0xfff4d6, roughness: 0.2 });
    const flashMesh = new THREE.Mesh(flashGeo, flashMat);
    flashMesh.rotation.x = Math.PI / 2;
    flashMesh.position.set(-0.38, phoneHeight / 2 - 0.76, -(phoneThickness / 2 + 0.18));
    phoneGroup.add(flashMesh);

    const lidarGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.05, 16);
    const lidarMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1 });
    const lidarMesh = new THREE.Mesh(lidarGeo, lidarMat);
    lidarMesh.rotation.x = Math.PI / 2;
    lidarMesh.position.set(-0.38, phoneHeight / 2 - 1.55, -(phoneThickness / 2 + 0.18));
    phoneGroup.add(lidarMesh);

    // 6. Polished Mirror Apple Logo on Back
    const logoCanvas = document.createElement('canvas');
    logoCanvas.width = 256;
    logoCanvas.height = 256;
    const lCtx = logoCanvas.getContext('2d');
    if (lCtx) {
      lCtx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      lCtx.beginPath();
      lCtx.arc(128, 136, 56, 0, Math.PI * 2);
      lCtx.fill();
    }
    const logoTexture = new THREE.CanvasTexture(logoCanvas);
    const logoGeo = new THREE.PlaneGeometry(0.65, 0.65);
    const logoMat = new THREE.MeshBasicMaterial({
      map: logoTexture,
      transparent: true,
      opacity: 0.45
    });
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    logoMesh.position.set(0, 0, -(phoneThickness / 2 + 0.048));
    logoMesh.rotation.y = Math.PI;
    phoneGroup.add(logoMesh);

    // 7. Hardware Side Buttons (Camera Control, Action Button, Volume)
    const buttonMat = new THREE.MeshStandardMaterial({ color: titaniumColor, metalness: 0.9, roughness: 0.15 });

    // Action Button (Left Top)
    const actionGeo = new THREE.BoxGeometry(0.05, 0.24, 0.07);
    const actionBtn = new THREE.Mesh(actionGeo, buttonMat);
    actionBtn.position.set(-(phoneWidth / 2 + 0.05), phoneHeight / 2 - 1.2, 0);
    phoneGroup.add(actionBtn);

    // Volume Up & Down
    const volUpBtn = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.38, 0.07), buttonMat);
    volUpBtn.position.set(-(phoneWidth / 2 + 0.05), phoneHeight / 2 - 1.7, 0);
    phoneGroup.add(volUpBtn);

    const volDownBtn = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.38, 0.07), buttonMat);
    volDownBtn.position.set(-(phoneWidth / 2 + 0.05), phoneHeight / 2 - 2.2, 0);
    phoneGroup.add(volDownBtn);

    // Camera Control Button (Right Bottom - Tactile Capacitive)
    const camCtrlGeo = new THREE.BoxGeometry(0.05, 0.48, 0.06);
    const camCtrlMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8, roughness: 0.2 });
    const camCtrlBtn = new THREE.Mesh(camCtrlGeo, camCtrlMat);
    camCtrlBtn.position.set(phoneWidth / 2 + 0.048, -(phoneHeight / 2 - 2.2), 0);
    phoneGroup.add(camCtrlBtn);

    // 8. Interactive Drag to Rotate with Smooth Damping
    let isDragging = false;
    let previousPointerPosition = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };

    const onPointerDown = (e) => {
      isDragging = true;
      setHasInteracted(true);
      previousPointerPosition = {
        x: e.clientX || e.touches?.[0]?.clientX || 0,
        y: e.clientY || e.touches?.[0]?.clientY || 0
      };
      velocity = { x: 0, y: 0 };
    };

    const onPointerMove = (e) => {
      const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
      const clientY = e.clientY || e.touches?.[0]?.clientY || 0;

      if (isDragging) {
        const deltaX = clientX - previousPointerPosition.x;
        const deltaY = clientY - previousPointerPosition.y;

        velocity.x = deltaX * 0.012;
        velocity.y = deltaY * 0.008;

        phoneGroup.rotation.y += velocity.x;
        phoneGroup.rotation.x += velocity.y;

        previousPointerPosition = { x: clientX, y: clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Continuous Slow Floating Motion
      phoneGroup.position.y = Math.sin(elapsedTime * 0.85) * 0.12;

      // Orbiting Specular Glare Movement
      orbitLight.position.x = Math.sin(elapsedTime * 0.5) * 4;
      orbitLight.position.z = 3 + Math.cos(elapsedTime * 0.5) * 2;

      // Drag Inertia Damping
      if (!isDragging) {
        velocity.x *= 0.92;
        velocity.y *= 0.92;
        phoneGroup.rotation.y += velocity.x;
        phoneGroup.rotation.x += velocity.y;
      }

      // Slow Continuous Ambient Rotation (when enabled and not dragging)
      if (isRotatingRef.current && !isDragging) {
        phoneGroup.rotation.y += 0.0035;
        phoneGroup.rotation.x = 0.06 + Math.sin(elapsedTime * 0.45) * 0.035;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
      chassisGeometry.dispose();
      screenGeo.dispose();
      camIslandGeo.dispose();
    };
  }, []);

  // Update Titanium Color on prop change
  useEffect(() => {
    if (materialsRef.current.titanium && activeColor?.hex) {
      const targetColor = new THREE.Color(activeColor.hex);
      materialsRef.current.titanium.color.set(targetColor);
      if (materialsRef.current.camIsland) {
        materialsRef.current.camIsland.color.set(targetColor);
      }
    }
  }, [activeColor]);

  const handleSetAngle = (angle) => {
    if (!phoneGroupRef.current) return;
    if (angle === 'front') {
      phoneGroupRef.current.rotation.x = 0;
      phoneGroupRef.current.rotation.y = 0;
      setIsRotating(false);
    } else if (angle === 'back') {
      phoneGroupRef.current.rotation.x = 0;
      phoneGroupRef.current.rotation.y = Math.PI;
      setIsRotating(false);
    } else if (angle === 'showcase') {
      phoneGroupRef.current.rotation.x = 0.08;
      phoneGroupRef.current.rotation.y = -0.42;
      setIsRotating(true);
    }
  };

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* 3D WebGL Canvas Stage */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Click and drag to rotate in 360°"
      />

      {/* Floating 3D Control Bar with Angle Presets */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#120824]/90 backdrop-blur-2xl px-4 py-2 rounded-full border border-purple-500/35 text-xs shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        {/* Toggle 360 Spin */}
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="flex items-center gap-1.5 text-purple-200 hover:text-white transition-colors"
          title={isRotating ? 'Pause 360 rotation' : 'Resume 360 rotation'}
        >
          {isRotating ? <Pause className="w-3.5 h-3.5 text-pink-400" /> : <Play className="w-3.5 h-3.5 text-[#c084fc]" />}
          <span className="font-medium">{isRotating ? '360° Active' : 'Paused'}</span>
        </button>

        <span className="text-white/20">|</span>

        {/* Angle Presets */}
        <button
          onClick={() => handleSetAngle('front')}
          className="text-gray-300 hover:text-white px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
          title="Front Display View"
        >
          Front
        </button>

        <button
          onClick={() => handleSetAngle('back')}
          className="text-gray-300 hover:text-white px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
          title="Rear Camera Array View"
        >
          Cameras
        </button>

        <button
          onClick={() => handleSetAngle('showcase')}
          className="flex items-center gap-1 text-gray-400 hover:text-white px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
          title="Reset to showcase 3D angle"
        >
          <RotateCcw className="w-3 h-3 text-[#c084fc]" />
          <span>Reset</span>
        </button>

        {!hasInteracted && (
          <>
            <span className="text-white/20 hidden md:inline">|</span>
            <span className="text-[10px] text-pink-400 font-semibold hidden md:inline-flex items-center gap-1">
              <Compass className="w-3 h-3 animate-spin" /> Drag to spin
            </span>
          </>
        )}
      </div>
    </div>
  );
};
