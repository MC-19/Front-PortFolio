<!-- Seccion About.vue -->
<template>
  <section id="sobre-mi" class="bg-neutral-900 text-white py-20 px-6 md:px-24 scroll-mt-32">
    <div 
      v-motion-slide-visible-once-bottom
      class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      <!-- Columna izquierda: texto -->
      <div class="flex-1 text-left">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('about.title') }}</h2>
        <p class="text-lg md:text-xl text-gray-300 font-medium mb-4">
          {{ $t('about.subtitle') }}
        </p>
        <div class="w-16 h-[2px] bg-violet-300 mb-6"></div>
        <p class="text-gray-400 leading-relaxed">
          {{ $t('about.p1') }}
        </p>
        <p class="mt-4 text-gray-400">
          {{ $t('about.p2') }}
        </p>
      </div>
      <!-- Columna derecha: foto -->
      <div class="flex-1 flex justify-center">
        <img
          src="/images/yo.jpg"
          alt="Mario Cristian"
          loading="lazy"
          decoding="async"
          class="w-60 h-60 rounded-full object-cover shadow-lg border-4 border-neutral-800"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
