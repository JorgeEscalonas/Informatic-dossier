<template>
  <section class="hero">
    <div class="hero-background">
      <div class="image-container">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10a2f0c4221be23c238934528bab97e8.jpg-mBgb42XDuxwGyRZjB0vYDq6wT9iTyt.jpeg" 
          alt="Developer workspace" 
          class="hero-image"
        />
        <div class="image-overlay"></div>
      </div>
    </div>
    <div class="hero-content">
      <div class="content-wrapper">
        <div class="title-container">
          <span class="accent-line"></span>
          <h1 class="hero-title">Carrera de<br/><span class="text-accent">Informática</span></h1>
        </div>
        <p class="hero-subtitle">Diseña el futuro digital con responsabilidad e innovación.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin-left: calc(-50vw + 50%); /* Break out of container */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-container {
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.1) brightness(0.7) saturate(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(10, 25, 47, 0.85) 0%,
    rgba(10, 25, 47, 0.7) 50%,
    rgba(10, 25, 47, 0.85) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: var(--container-width);
  padding: 0 var(--spacing-md);
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.title-container {
  position: relative;
  padding-left: var(--spacing-md);
}

.accent-line {
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--color-accent-primary) 0%, rgba(100, 255, 218, 0) 100%);
  border-radius: var(--border-radius-full);
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  text-transform: uppercase;
  margin: 0;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: var(--color-text-secondary);
  font-weight: 400;
  line-height: 1.6;
  max-width: 600px;
  margin: 0;
}

/* Animations */
.content-wrapper > * {
  animation: fadeIn 1s ease-out forwards;
}

.hero-title {
  animation-delay: 0.2s;
}

.hero-subtitle {
  animation-delay: 0.4s;
}

@media (max-width: 768px) {
  .title-container {
    padding-left: var(--spacing-sm);
  }
}
</style>