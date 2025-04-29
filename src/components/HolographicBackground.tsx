import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HolographicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Create a larger, more elegant grid
    const gridSize = 60;
    const gridDivisions = 40;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, new THREE.Color(0x9b87f5), new THREE.Color(0x1EAEDB));
    gridHelper.position.y = -10;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.15;
    scene.add(gridHelper);
    
    // Create more elegant floating particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 800;
    const posArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 60;
      posArray[i + 1] = (Math.random() - 0.5) * 60;
      posArray[i + 2] = (Math.random() - 0.5) * 60;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.2,
      transparent: true,
      opacity: 0.8,
      color: 0x33C3F0,
      blending: THREE.AdditiveBlending,
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    
    // Create a larger holographic orb
    const orbGeometry = new THREE.SphereGeometry(6, 32, 32);
    const orbMaterial = new THREE.MeshPhongMaterial({
      color: 0x9b87f5,
      transparent: true,
      opacity: 0.15,
      wireframe: true,
      emissive: 0x9b87f5,
      emissiveIntensity: 0.3,
    });
    
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    orb.position.set(0, 0, -10);
    scene.add(orb);
    
    // Add enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x9b87f5, 0.4);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0x33C3F0, 0.6, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x1EAEDB, 0.6, 100);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);
    
    // Smooth mouse movement effect
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    const onDocumentMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX - window.innerWidth / 2) / 200;
      targetY = (event.clientY - window.innerHeight / 2) / 200;
    };
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth camera movement
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      camera.position.x += (currentX - camera.position.x) * 0.1;
      camera.position.y += (-currentY - camera.position.y) * 0.1;
      camera.lookAt(scene.position);
      
      // Rotate grid with a different speed
      gridHelper.rotation.y += 0.001;
      
      // Animate orb with different rotation speeds
      orb.rotation.x += 0.002;
      orb.rotation.y += 0.003;
      
      // Animate particles
      particleSystem.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      renderer.dispose();
    };
  }, []);
  
  return <canvas ref={canvasRef} className="holo-bg-canvas" />;
};

export default HolographicBackground;
