<template>
  <section class="desafios-eticos">
    <div class="title-container" v-intersection>
      <h2 class="title">Desafíos Éticos</h2>
    </div>
    
    <div class="grid-container">
      <div 
        v-for="(desafio, index) in desafios" 
        :key="index" 
        class="grid-item reveal-on-scroll"
        :class="[`item-${index + 1}`]"
        v-intersection
        @mouseenter="rotarTarjeta"
        @mouseleave="resetearTarjeta"
      >
        <div class="desafio-icon">
          <component :is="desafio.icon" size="35" stroke-width="1.5" />
        </div>
        <h3 class="desafio-title">{{ desafio.title }}</h3>
        <p class="desafio-description">{{ desafio.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Shield, Eye, Brain, Users, Database, Globe, Lock, Briefcase, Code, Signal } from 'lucide-vue-next'
import vIntersection from '../directives/vIntersection'

const desafios = [
  { icon: Shield, title: "Privacidad y Seguridad", description: "Proteger la información personal y los sistemas mediante cifrado y educación sobre ciberamenazas." },
  { icon: Eye, title: "Vigilancia y Libertad", description: "Equilibrar la seguridad pública con el derecho a la privacidad individual." },
  { icon: Brain, title: "IA Ética", description: "Desarrollar IA responsable, evitando sesgos y garantizando transparencia." },
  { icon: Users, title: "Inclusión", description: "Tecnología accesible y beneficiosa para todos, sin barreras." },
  { icon: Database, title: "Big Data", description: "Manejo ético de grandes volúmenes de datos." },
  { icon: Globe, title: "Impacto Ambiental", description: "Optimizar recursos para reducir la huella de carbono digital." },
  { icon: Lock, title: "Ciberseguridad", description: "Combatir ataques y fraudes que amenazan a la sociedad." },
  { icon: Briefcase, title: "Automatización", description: "Gestionar el impacto laboral y fomentar la reconversión." },
  { icon: Code, title: "Desarrollo Ético", description: "Evitar patrones oscuros y software adictivo." },
  { icon: Signal, title: "Desinformación", description: "Combatir fake news y manipulación algorítmica." },
];

function rotarTarjeta(event) {
  const tarjeta = event.currentTarget
  const rect = tarjeta.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  tarjeta.style.transform = `perspective(1000px) rotateX(${(y - rect.height / 2) / 40}deg) rotateY(${-(x - rect.width / 2) / 40}deg) scale(1.02)`
}

function resetearTarjeta(event) {
  event.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
}
</script>

<style scoped>
.desafios-eticos {
  padding: var(--spacing-lg) 0;
  min-height: 80vh;
}

.title {
  color: var(--color-text-primary);
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
}

.title-container {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.title-container.visible {
  opacity: 1;
  transform: translateY(0);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  max-width: var(--container-width);
  margin: 0 auto;
}

.grid-item {
  background-color: rgba(17, 34, 64, 0.5); /* Glass effect base */
  backdrop-filter: blur(5px);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border-hover, rgba(136, 146, 176, 0.2));
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.grid-item.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Layout logic for first and last rows to center items if needed */


.desafio-icon {
  margin-bottom: var(--spacing-sm);
  color: var(--color-accent-primary);
  transition: color var(--transition-normal);
}

.grid-item:hover .desafio-icon {
  color: var(--color-accent-secondary);
}

.desafio-title {
  font-size: 1.25rem;
  color: var(--color-text-primary);
  font-weight: bold;
  margin-bottom: var(--spacing-xs);
}

.desafio-description {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Hover effects */
.grid-item:hover {
  border-color: var(--color-accent-primary);
  background-color: rgba(17, 34, 64, 0.8);
  transform: translateY(-5px) scale(1.02); /* Ensure scale is present */
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; 
  }
}
</style>
