<template>
<nav
  :style="navbarStyle"
  :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
    opacity > 0 ? 'shadow-md' : ''
  ]"
>

    <div class="w-full px-20 pt-6 pb-6 flex justify-between items-center">
      <h1 :class="textColor" class="text-xl font-bold transition-colors duration-300">
        Mario Cristian
      </h1>

      <ul class="flex space-x-8">
        <li><a href="#inicio" :class="linkClass">Inicio</a></li>
        <li><a href="#sobre-mi" :class="linkClass">Sobre mí</a></li>
        <li><a href="#que-hago" :class="linkClass">Especialidad</a></li>
        <li><a href="#skills" :class="linkClass">Skills</a></li>
        <li><a href="#contacto" :class="linkClass">Contacto</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Progresión de opacidad hasta 1 al hacer scroll
const opacity = computed(() => Math.min(scrollY.value / 200, 1))

// Color final → violet-200: rgb(233, 213, 255)
const navbarStyle = computed(() => ({
  background: `linear-gradient(to bottom, rgba(233, 213, 255, ${opacity.value}), rgba(233, 213, 255, ${opacity.value}))`,
}))

const textColor = computed(() =>
  opacity.value > 0.5 ? 'text-neutral-900' : 'text-white'
)

const linkClass = computed(() =>
  `text-lg transition duration-200 hover:scale-105 ${
    opacity.value > 0.5
      ? 'text-neutral-900 hover:text-black font-bold'
      : 'text-white hover:text-gray-300 font-normal'
  }`
)
</script>
