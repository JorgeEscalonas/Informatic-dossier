<template>
  <section class="campos-laborales">
    <div class="title-wrapper reveal-on-scroll" v-intersection>
      <h2 class="title">Campos Laborales</h2>
      <div class="filtros">
        <button 
          v-for="categoria in categorias" 
          :key="categoria" 
          @click="filtrarPor(categoria)" 
          :class="{ 'activo': categoriaActual === categoria }"
          class="btn-filtro"
        >
          {{ categoria }}
        </button>
      </div>
    </div>

    <transition-group name="campo-list" tag="div" class="campos-grid">
      <div 
        v-for="(campo, index) in camposFiltrados" 
        :key="campo.titulo" 
        class="campo-tarjeta reveal-on-scroll"
        v-intersection
        @mouseenter="rotarTarjeta"
        @mouseleave="resetearTarjeta"
      >
        <div class="campo-contenido">
          <div class="campo-icono">
            <component :is="campo.icono" size="35" stroke-width="1.5" />
          </div>
          <h3 class="campo-titulo">{{ campo.titulo }}</h3>
          <p class="campo-descripcion">{{ campo.descripcion }}</p>
        </div>
      </div>
    </transition-group>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Globe, Shield, BarChart, Brain, Smartphone, Cloud, Wifi, Blocks
} from 'lucide-vue-next'
import vIntersection from '../directives/vIntersection'

const categorias = ['Todos', 'Desarrollo', 'Seguridad', 'Datos', 'IA']
const categoriaActual = ref('Todos')

const campos = ref([
  { titulo: 'Desarrollo Web', descripcion: 'Creación de sitios y aplicaciones web', categoria: 'Desarrollo', icono: Globe },
  { titulo: 'Ciberseguridad', descripcion: 'Protección de sistemas y redes', categoria: 'Seguridad', icono: Shield },
  { titulo: 'Ciencia de Datos', descripcion: 'Análisis y visualización de datos', categoria: 'Datos', icono: BarChart },
  { titulo: 'Inteligencia Artificial', descripcion: 'Desarrollo de sistemas inteligentes', categoria: 'IA', icono: Brain },
  { titulo: 'Desarrollo Móvil', descripcion: 'Creación de apps para dispositivos móviles', categoria: 'Desarrollo', icono: Smartphone },
  { titulo: 'Cloud Computing', descripcion: 'Gestión de servicios en la nube', categoria: 'Desarrollo', icono: Cloud },
  { titulo: 'IoT', descripcion: 'Internet de las cosas y dispositivos conectados', categoria: 'Desarrollo', icono: Wifi },
  { titulo: 'Blockchain', descripcion: 'Desarrollo de tecnologías descentralizadas', categoria: 'Seguridad', icono: Blocks }
])

const camposFiltrados = computed(() => {
  if (categoriaActual.value === 'Todos') {
    return campos.value
  }
  return campos.value.filter(campo => campo.categoria === categoriaActual.value)
})

function filtrarPor(categoria) {
  categoriaActual.value = categoria
}

function rotarTarjeta(event) {
  const tarjeta = event.currentTarget
  const rect = tarjeta.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  tarjeta.style.transform = `perspective(1000px) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${-(x - rect.width / 2) / 20}deg) scale(1.05)`
}

function resetearTarjeta(event) {
  event.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
}
</script>

<style scoped>
.campos-laborales {
  padding: var(--spacing-xl) 0;
  color: var(--color-text-primary);
}

/* .title-wrapper, .campo-tarjeta custom transitions replaced by global .reveal-on-scroll */

.title {
  text-align: center;
  margin-bottom: var(--spacing-md);
  font-size: 2.5rem;
}

.filtros {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.btn-filtro {
  padding: 0.5rem 1.5rem;
  background: transparent;
  border: 1px solid var(--color-text-secondary);
  color: var(--color-text-secondary);
  cursor: pointer;
  border-radius: var(--border-radius-full);
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.btn-filtro:hover, .btn-filtro.activo {
  background: var(--color-accent-primary);
  border-color: var(--color-accent-primary);
  color: var(--color-bg-primary);
  transform: translateY(-2px);
}

.campos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
  max-width: var(--container-width);
  margin: 0 auto;
}

.campo-tarjeta {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid var(--color-border-hover, rgba(136, 146, 176, 0.2));
  border-radius: var(--border-radius-md);
  overflow: hidden;
  transition: all 0.3s ease;
  /* Removed local opacity/transform to let reveal-on-scroll handle it */
  backdrop-filter: blur(5px);
  min-height: 200px;
}

.campo-contenido {
  padding: var(--spacing-md);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.campo-icono {
  margin-bottom: var(--spacing-sm);
  color: var(--color-accent-primary);
}

.campo-titulo {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
}

.campo-descripcion {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
}

/* List Transitions */
.campo-list-enter-active,
.campo-list-leave-active {
  transition: all 0.5s ease;
}

.campo-list-enter-from,
.campo-list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>