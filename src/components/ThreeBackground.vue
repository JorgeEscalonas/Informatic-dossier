<template>
  <div ref="container" class="three-background"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

const container = ref(null);
let scene, camera, renderer, particlesMesh;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

// Store original positions for waves
let originalPositions = null;

const createCircleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
  gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 32, 32);
  
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
};

const onDocumentMouseMove = (event) => {
  mouseX = (event.clientX - windowHalfX) * 0.5;
  mouseY = (event.clientY - windowHalfY) * 0.5;
};

const onWindowResize = () => {
  if (!container.value) return;
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const init = () => {
  if (!container.value) return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 1000;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.value.appendChild(renderer.domElement);

  // Particles setup
  const count = 2000;// Increased count for better visibility
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  originalPositions = new Float32Array(count * 3);

  const color = new THREE.Color();
  const palette = [0x64ffda, 0x00f7ff, 0xccd6f6, 0x112240]; 

  for (let i = 0; i < count * 3; i += 3) {
    // Spread
    positions[i] = (Math.random() - 0.5) * 2000;
    positions[i + 1] = (Math.random() - 0.5) * 2000;
    positions[i + 2] = (Math.random() - 0.5) * 2000;

    originalPositions[i] = positions[i];
    originalPositions[i + 1] = positions[i + 1];
    originalPositions[i + 2] = positions[i + 2];

    // Colors
    color.setHex(palette[Math.floor(Math.random() * palette.length)]);
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 8, // Increased size even more
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    map: createCircleTexture(),
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  particlesMesh = new THREE.Points(geometry, material);
  scene.add(particlesMesh);

  document.addEventListener('mousemove', onDocumentMouseMove);
  window.addEventListener('resize', onWindowResize);
};

const animate = () => {
  if (!renderer) return;
  requestAnimationFrame(animate);

  const time = Date.now() * 0.001;
  const positions = particlesMesh.geometry.attributes.position.array;

  // Wave motion and global rotation
  particlesMesh.rotation.y += 0.0005;
  
  for (let i = 0; i < 3000; i++) {
    const i3 = i * 3;
    // Morph Y based on X and Time
    positions[i3 + 1] = originalPositions[i3 + 1] + Math.sin((time + originalPositions[i3] * 0.01)) * 30;
  }
  particlesMesh.geometry.attributes.position.needsUpdate = true;

  // Camera lerp
  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
};

onMounted(() => {
  init();
  animate();
});

onUnmounted(() => {
  document.removeEventListener('mousemove', onDocumentMouseMove);
  window.removeEventListener('resize', onWindowResize);
  if (renderer) {
    renderer.dispose();
  }
  if (particlesMesh) {
    particlesMesh.geometry.dispose();
    particlesMesh.material.dispose();
  }
});
</script>

<style scoped>
.three-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: radial-gradient(circle at center, #112240 0%, #0a192f 100%);
  pointer-events: none;
}
</style>
