<!-- Seccion About.vue -->
<template>
  <section id="sobre-mi" class="bg-neutral-900 text-white py-20 px-6 md:px-24 scroll-mt-32">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <!-- Columna izquierda: texto -->
      <div class="flex-1 text-left">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Hey, soy Mario Cristian.</h2>
        <p class="text-lg md:text-xl text-gray-300 font-medium mb-4">
          Soy un desarrollador con mentalidad creativa y atención al detalle, apasionado por unir código limpio con buen diseño.
        </p>
        <div class="w-16 h-[2px] bg-violet-300 mb-6"></div>
        <p class="text-gray-400 leading-relaxed">
          Actualmente me especializo en desarrollo fullstack y ciberseguridad. Me encanta crear software útil, escalable y visualmente atractivo.
          Siempre estoy explorando nuevas tecnologías, buenas prácticas de código y formas de mejorar la experiencia del usuario.
        </p>
        <p class="mt-4 text-gray-400">
          Cuando no estoy programando, probablemente esté aprendiendo algo nuevo, mejorando proyectos personales o compartiendo conocimiento.
        </p>
      </div>
      <!-- Columna derecha: foto -->
      <div class="flex-1 flex justify-center">
        <img
          src="/images/yo.jpg"
          alt="Mario Cristian"
          class="w-60 h-60 rounded-full object-cover shadow-lg border-4 border-neutral-800"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
