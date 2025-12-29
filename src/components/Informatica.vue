<template>
  <section class="informatica-section">
    <div class="container">
      <div class="content">
        <div class="title-wrapper reveal-on-scroll" v-intersection>
          <h1 class="title">
            ¿Qué es la Informática?
            <div class="underline"></div>
          </h1>
        </div>

        <div class="grid">
          <div class="text-content">
            <p v-intersection class="reveal-on-scroll delay-100">
              La Informática es la ciencia que estudia el procesamiento automático de la información 
              mediante sistemas computacionales. Abarca el diseño, desarrollo y aplicación de software 
              y hardware para resolver problemas y optimizar procesos en diversos campos del conocimiento.
            </p>
            
            <p v-intersection class="reveal-on-scroll delay-200">
              Esta disciplina fundamental combina principios matemáticos, lógica y creatividad para 
              impulsar la innovación tecnológica. La Informática es el motor detrás de la revolución 
              digital, permitiendo avances en áreas como la inteligencia artificial, el análisis de 
              datos y la ciberseguridad.
            </p>
          </div>

          <div class="image-wrapper reveal-on-scroll delay-300" v-intersection>
            <img 
              src="@/assets/images/informatica.jpg" 
              alt="Tecnología informática"
              class="feature-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import vIntersection from '../directives/vIntersection';
</script>

<style scoped>
.informatica-section {
  min-height: 80vh; /* Reduced height for better flow */
  color: var(--color-text-primary);
  padding: var(--spacing-xl) 0;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
}

.content {
  padding: 0 var(--spacing-md);
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-primary);
  position: relative;
}

.underline {
  width: 80px;
  height: 4px;
  background: var(--color-accent-primary);
  margin: 1rem auto 0;
  border-radius: 2px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.text-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
}

.image-wrapper {
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.image-wrapper:hover {
  transform: scale(1.02); 
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); 
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
}

.image-wrapper:hover .feature-image {
  transform: scale(1.05); 
  filter: brightness(1.1); 
}

/* Transitions controlled by directive class 'visible' */
/* Removed custom transition classes in favor of global .reveal-on-scroll */
/* .title-wrapper, .fade-element { ... }  <-- These are now handled by base.css */

.delay-100 { transition-delay: 0.1s; }
.delay-200 { transition-delay: 0.2s; }
.delay-300 { transition-delay: 0.3s; }

@media (max-width: 768px) {
  .informatica-section {
    padding: var(--spacing-lg) 0;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .title {
    font-size: 2rem;
  }
}
</style>