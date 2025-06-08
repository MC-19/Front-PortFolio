<template>
  <nav
    :style="navbarStyle"
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      opacity > 0 ? 'shadow-md' : ''
    ]"
  >
    <div class="w-full px-6 md:px-20 pt-6 pb-6 flex justify-between items-center">
      <h1 :class="textColor" class="text-xl font-bold transition-colors duration-300">
        Mario Cristian
      </h1>

      <!-- Botón hamburguesa -->
      <button
        class="md:hidden text-2xl"
        :class="textColor"
        @click="menuOpen = !menuOpen"
      >
        <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>

      <!-- Menú navegación -->
      <ul
        :class="[
          'transition-all duration-300 md:flex space-x-8',
          menuOpen
            ? 'absolute top-full left-0 w-full flex flex-col bg-violet-100/90 backdrop-blur-md px-6 py-4 md:static md:flex-row md:bg-transparent'
            : 'hidden md:flex'
        ]"
      >
        <li><a href="#inicio" :class="linkClass" @click="menuOpen = false">Inicio</a></li>
        <li><a href="#sobre-mi" :class="linkClass" @click="menuOpen = false">Sobre mí</a></li>
        <li><a href="#que-hago" :class="linkClass" @click="menuOpen = false">Especialidad</a></li>
        <li><a href="#skills" :class="linkClass" @click="menuOpen = false">Skills</a></li>
        <li><a href="#contacto" :class="linkClass" @click="menuOpen = false">Contacto</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const scrollY = ref(0)
const menuOpen = ref(false)
const isMobile = ref(window.innerWidth < 768)

const handleScroll = () => {
  scrollY.value = window.scrollY
  if (scrollY.value > 0) menuOpen.value = false
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})

const opacity = computed(() => Math.min(scrollY.value / 200, 1))

const navbarStyle = computed(() => {
  if (isMobile.value) {
    return {
      background: 'rgba(233, 213, 255, 0.95)',
      backdropFilter: 'blur(8px)'
    }
  }

  if (opacity.value === 0) {
    return { background: 'transparent' }
  }

  return {
    background: `linear-gradient(to bottom, rgba(233, 213, 255, ${opacity.value}), rgba(233, 213, 255, ${opacity.value}))`,
    backdropFilter: 'blur(8px)'
  }
})

const textColor = computed(() =>
  opacity.value > 0.5 || isMobile.value ? 'text-neutral-900' : 'text-white'
)

const linkClass = computed(() =>
  `text-lg transition duration-200 hover:scale-105 ${
    opacity.value > 0.5 || isMobile.value
      ? 'text-neutral-900 hover:text-black font-bold'
      : 'text-white hover:text-gray-300 font-normal'
  }`
)
</script>
