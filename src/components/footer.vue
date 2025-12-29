<template>
  <footer class="footer">
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Carrera de Informática. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  background-color: transparent;
  color: var(--color-text-secondary);
  padding: var(--spacing-xl) var(--spacing-md) var(--spacing-md);
  font-family: var(--font-sans);
}

.footer-bottom {
  margin-top: var(--spacing-md);
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  border-top: 1px solid rgba(136, 146, 176, 0.1);
  padding-top: var(--spacing-md);
}
</style>
