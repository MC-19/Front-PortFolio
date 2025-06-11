<template>
<section
  id="inicio"
  class="relative min-h-screen bg-fixed bg-center bg-no-repeat bg-cover"
  :class="{
    'bg-[url(/images/playa-pc.jpg)]': !isMobile,
    'bg-[url(/images/playa-mobile.jpg)]': isMobile
  }"
>
  <div
    class="absolute inset-0 z-0"
    :class="isMobile
      ? 'bg-violet-900/70'
      : 'bg-gradient-to-b from-black/80 via-black/20 to-black/40'
    "
  ></div>

  <div class="relative z-10 flex flex-col justify-center items-center text-white text-center px-4 pt-32 md:pt-[15%]">
    <h1 class="text-4xl md:text-6xl font-light tracking-wide leading-tight max-w-4xl">
      Hola, soy <span class="font-semibold">Mario Cristian Dascalu Marisca</span>
    </h1>
    <p class="text-gray-300 mt-4 text-lg md:text-xl">
      Fullstack Developer & Ciberseguridad Enthusiast
    </p>

    <a
      href="#sobre-mi"
      class="mt-16 group transition duration-300 p-3 rounded-full border border-violet-400 hover:border-purple-300"
    >
      <img src="/logo.png" alt="logo" class="w-8 h-8 filter invert group-hover:hidden" />
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 hidden group-hover:block text-gray-200 hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  </div>
</section>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(window.innerWidth < 768)
const updateIsMobile = () => { isMobile.value = window.innerWidth < 768 }

onMounted(() => window.addEventListener('resize', updateIsMobile))
onUnmounted(() => window.removeEventListener('resize', updateIsMobile))
</script>

