<template>
  <section class="ethics-section">
    <div class="container">
      <div class="title-wrapper reveal-on-scroll" v-intersection>
        <h2 class="title">Código de Ética Profesional</h2>
      </div>

      <div class="code-window reveal-on-scroll" v-intersection>
        <div class="window-header">
          <div class="controls">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="tab">ethics_manifesto.json</div>
          <div class="window-actions">
            <span class="action-icon">{}</span>
          </div>
        </div>
        
        <div class="code-content">
          <div class="line-numbers">
            <span v-for="n in lineCount" :key="n">{{ n < 10 ? '0' + n : n }}</span>
          </div>

          <div class="code-block">
            <div class="code-line comment">/**</div>
            <div class="code-line comment"> * @manifesto Ética en la Informática</div>
            <div class="code-line comment"> * Principios para un desarrollo responsable y humano</div>
            <div class="code-line comment"> */</div>
            <div class="code-line"><span class="keyword">const</span> <span class="variable">ethicsPrinciples</span> = {</div>
            <div class="principles-container">
              <div class="principle" v-for="(value, key, index) in principles" :key="key">
                <span class="property">"{{ key }}"</span>: 
                <span class="string">"{{ value }}"</span>{{ index === Object.keys(principles).length - 1 ? '' : ',' }}
              </div>
            </div>
            <div class="code-line">};</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import vIntersection from '../directives/vIntersection'

const principles = {
  responsabilidad_profesional: 'Compromiso total con la calidad y consecuencias del software desarrollado.',
  privacidad_y_seguridad: 'Protección absoluta de los datos y la integridad de los sistemas de información.',
  integridad_algoritmica: 'Eliminación activa de sesgos y garantizar la transparencia en procesos automatizados.',
  bienestar_social: 'Priorizar el impacto positivo de la tecnología en la sociedad y el medio ambiente.',
  aprendizaje_continuo: 'Actualización constante para enfrentar los desafíos éticos de las nuevas tecnologías.'
}

const lineCount = computed(() => {
  return 11 // Adjusted to match the number of lines precisely
})
</script>

<style scoped>
.ethics-section {
  min-height: 100vh;
  padding: var(--spacing-xl) 0;
  display: flex;
  align-items: center;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  width: 100%;
}

.title-wrapper {
  text-align: center;
  margin-bottom: var(--spacing-lg);
}

.title {
  margin-bottom: var(--spacing-xs);
}

.subtitle {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
}

.code-window {
  width: 100%;
  max-width: 1100px; /* Increased from 900px */
  margin: 0 auto;
  background-color: #0d1117; /* GitHub Dark style */
  border-radius: var(--border-radius-lg);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), var(--shadow-glow);
  border: 1px solid rgba(136, 146, 176, 0.2);
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}



.window-header {
  background-color: #161b22;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(136, 146, 176, 0.1);
}

.controls {
  display: flex;
  gap: 0.6rem;
}

.dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
}

.red { background-color: #ff5f56; }
.yellow { background-color: #ffbd2e; }
.green { background-color: #27c93f; }

.tab {
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  opacity: 0.8;
}

.window-actions {
  color: var(--color-accent-primary);
  font-family: var(--font-mono);
  font-weight: bold;
}

.code-content {
  padding: 2rem; /* Increased padding */
  display: flex;
  gap: 2rem;
  background: linear-gradient(to bottom right, #0d1117, #161b22);
}

.line-numbers {
  display: flex;
  flex-direction: column;
  color: #4b5563;
  user-select: none;
  text-align: right;
  font-family: var(--font-mono);
  font-size: 1rem;
  line-height: 2;
  border-right: 1px solid rgba(136, 146, 176, 0.1);
  padding-right: 1.5rem;
}

.code-block {
  flex: 1;
  font-family: var(--font-mono);
  font-size: 1.15rem; /* Increased font-size */
  line-height: 2;
  color: #e6edf3;
}

.comment { color: #8b949e; font-style: italic; }
.keyword { color: #ff7b72; display: inline; }
.variable { color: #79c0ff; display: inline; }
.property { color: #d2a8ff; }
.string { color: #a5d6ff; word-break: break-word; white-space: normal; }

.principles-container {
  padding-left: 2rem;
}

.principle {
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 992px) {
  .code-window {
    max-width: 100%;
  }
  
  .code-block {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .code-content {
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .line-numbers {
    display: none;
  }
  
  .code-block {
    font-size: 0.9rem;
  }
}
</style>