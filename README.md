# Informática Dossier

Este proyecto es una plataforma interactiva diseñada para presentar conceptos fundamentales, desafíos éticos y campos laborales de la carrera de Informática. La aplicación ha sido desarrollada con un enfoque en la experiencia de usuario (UX) moderna, utilizando efectos visuales avanzados y animaciones fluidas para destacar la importancia de la tecnología en la sociedad actual.

## Características Principales

### Interfaz Interactiva

- **Fondo Fluido**: Implementación de una simulación de partículas en 3D utilizando Three.js que reacciona de manera sutil al movimiento del usuario.
- **Elementos Decorativos 3D**: Imágenes con efecto de inclinación (tilt) que responden a la interacción del mouse, manteniendo una disposición coherente dentro del flujo de la página.
- **Transiciones de Scroll**: Sistema de animaciones unificado que utiliza un Intersection Observer personalizado para revelar elementos con efectos de desenfoque y escalado cinematográfico.

### Secciones Especializadas

- **Introducción a la Informática**: Definiciones claras y concisas con soporte visual optimizado.
- **Desafíos Éticos**: Grilla interactiva que detalla los retos contemporáneos del sector informático.
- **Código de Ética**: Ventana de edición de código estilizada que presenta el manifiesto profesional con una estética moderna y profesional.
- **Campos Laborales**: Galería filtrable de áreas de especialización dentro de la informática.

## Tecnologías Utilizadas

- **Framework**: Vue.js 3 (Composition API)
- **Gráficos 3D**: Three.js
- **Iconografía**: Lucide Vue Next
- **Estilos**: Vanilla CSS con arquitectura basada en variables para consistencia temática
- **Herramientas de Construcción**: Vite

## Estándares de Desarrollo

La aplicación ha sido refactorizada siguiendo los principios SOLID para garantizar un código mantenible y escalable. Se ha implementado:

- **Carga Diferida (Lazy Loading)**: Los componentes pesados se cargan de forma asíncrona para mejorar el tiempo de respuesta inicial.
- **Optimización de Activos**: Gestión organizada de imágenes y recursos multimedia.
- **Directivas Personalizadas**: Reutilización de lógica de interacción mediante directivas Vue para reducir la redundancia de código.

## Instalación y Uso

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npm run dev` para iniciar el servidor de desarrollo local.
4. Ejecutar `npm run build` para generar la versión de producción.

---
Proyecto desarrollado como una demostración técnica de integración de interfaces web avanzadas y conceptos de la carrera de Informática.
