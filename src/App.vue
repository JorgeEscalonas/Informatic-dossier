<template>
  <div class="app">
    <ThreeBackground />
    <div class="hero-section">
      <Hero />
    </div>
    
    <div class="content-wrapper">
      <Informatica />
      
      <!-- Decorative Elements Wrapper with pointer-events: none to allow clicks through -->
      <div class="decorative-container">
        <img 
          src="@/assets/images/brain.png" 
          alt="" 
          class="decorative-element brain" 
          v-intersection 
          @mousemove="handle3DTilt"
          @mouseleave="resetTilt"
        />
        <img 
          src="@/assets/images/security.png" 
          alt="" 
          class="decorative-element security" 
          v-intersection 
          @mousemove="handle3DTilt"
          @mouseleave="resetTilt"
        />
        <Desafios />
      </div>
      
      <CodigoEtica />
      
      <div class="decorative-container">
        <img 
          src="@/assets/images/cloud.png" 
          alt="" 
          class="decorative-element cloud" 
          v-intersection 
          @mousemove="handle3DTilt"
          @mouseleave="resetTilt"
        />
        <img 
          src="@/assets/images/router.png" 
          alt="" 
          class="decorative-element router" 
          v-intersection 
          @mousemove="handle3DTilt"
          @mouseleave="resetTilt"
        />
        <CamposLaborales />
      </div>
      
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import Hero from './components/Hero.vue'
import vIntersection from './directives/vIntersection'

// Lazy load components for better performance
const Informatica = defineAsyncComponent(() => import('./components/Informatica.vue'))
const Desafios = defineAsyncComponent(() => import('./components/Desafios.vue'))
const CodigoEtica = defineAsyncComponent(() => import('./components/CodigoEtica.vue'))
const CamposLaborales = defineAsyncComponent(() => import('./components/CamposLaborales.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))
const ThreeBackground = defineAsyncComponent(() => import('./components/ThreeBackground.vue'))

// 3D Interaction Logic for floating elements
const handle3DTilt = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;
  
  el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  el.style.zIndex = "101"; // Bring slightly more forward on hover
};

const resetTilt = (e) => {
  const el = e.currentTarget;
  el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  el.style.zIndex = "100";
};

</script>

<style>
/* Global adjustments to allow decorative elements to break out */
body {
  overflow-x: hidden;
}

.app {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  position: relative;
}

.content-wrapper {
  position: relative;
  z-index: 1; /* Content group */
}

/* Container doesn't block clicks to things behind it */
.decorative-container {
  position: relative;
  pointer-events: none; 
}

/* But elements themselves DO accept interaction if we want to tilt them */
.decorative-element {
  position: absolute;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--transition-slow), transform 0.1s ease-out; /* Fast tilt response */
  z-index: 100; /* On top of everything */
  pointer-events: auto; /* Allow mouse interaction */
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
  will-change: transform;
}

.decorative-element.visible {
  opacity: 1 !important; /* Full opacity as requested */
  transform: translateY(0);
}

/* Animations - separated from the 3D tilt to avoid conflicts */
.decorative-element.visible:not(:hover) {
  animation: float-3d 8s ease-in-out infinite;
}

/* Specific positioning - Bringing them closer to be visible on most screens */
.brain {
  top: -60px;
  left: -100px;
  width: 14rem;
}

.security {
  top: 10%;
  right: -120px;
  width: 16rem;
}

.cloud {
  top: -100px;
  left: -110px;
  width: 15rem;
}

.router {
  bottom: -40px;
  right: -100px;
  width: 13rem;
}

@keyframes float-3d {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

@media (max-width: 1600px) {
  /* On medium-large screens, tuck them in even more */
  .brain { left: -50px; width: 10rem; }
  .security { right: -60px; width: 12rem; }
  .cloud { left: -60px; width: 11rem; }
  .router { right: -50px; width: 10rem; }
}

@media (max-width: 1200px) {
  /* On screens smaller than the container, hide them or move them behind */
  .decorative-element {
    opacity: 0.3 !important; /* Make them very subtle if they overlap content */
    z-index: -1; /* Move behind content */
  }
}

@media (max-width: 1024px) {
  .decorative-element {
    display: none; /* Hide for tablets/mobile */
  }
}
</style>
