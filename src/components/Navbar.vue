<template>
  <nav
    :style="navbarStyle"
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      opacity > 0 ? 'shadow-md' : ''
    ]"
  >
    <div class="w-full px-6 md:px-20 pt-6 pb-6 flex justify-between items-center">
      <a href="#inicio" class="pl-1 md:pl-2 flex items-center">
        <img
          :src="logoSrc"
          alt="Logo Mario Cristian"
          class="h-10 md:h-14 w-auto transition-all duration-300"
        />
      </a>

      <!-- Controles: Idioma y Menú -->
      <div class="flex items-center gap-4 ml-auto md:ml-0">
        <!-- Selector Idioma (Tipo Pill) -->
        <div 
          class="flex items-center backdrop-blur-md rounded-full p-1 border transition-colors duration-300"
          :class="opacity > 0.5 || isMobile ? 'bg-neutral-200/50 border-neutral-300' : 'bg-black/20 border-white/20'"
        >
          <button
            @click="setLanguage('es')"
            class="px-3 py-1 text-xs font-bold rounded-full transition-all duration-300"
            :class="locale === 'es' ? 'bg-violet-400 text-neutral-900 shadow-sm' : (opacity > 0.5 || isMobile ? 'text-neutral-600 hover:text-neutral-900' : 'text-gray-300 hover:text-white')"
          >
            ES
          </button>
          <button
            @click="setLanguage('en')"
            class="px-3 py-1 text-xs font-bold rounded-full transition-all duration-300"
            :class="locale === 'en' ? 'bg-violet-400 text-neutral-900 shadow-sm' : (opacity > 0.5 || isMobile ? 'text-neutral-600 hover:text-neutral-900' : 'text-gray-300 hover:text-white')"
          >
            EN
          </button>
        </div>

        <!-- Botón hamburguesa -->
        <button
          class="md:hidden text-2xl"
          :class="textColor"
          @click="menuOpen = !menuOpen"
        >
          <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>

      <!-- Menú navegación -->
      <ul
        :class="[
          'transition-all duration-300 md:flex md:items-center space-x-0 md:space-x-8',
          menuOpen
            ? 'absolute top-full left-0 w-full flex flex-col gap-4 bg-violet-100/95 backdrop-blur-md px-6 py-6 border-b border-violet-200 md:static md:flex-row md:bg-transparent md:border-none md:gap-0 md:p-0'
            : 'hidden md:flex'
        ]"
      >
        <li><a href="#inicio" :class="linkClass" @click="menuOpen = false">{{ $t('nav.home') }}</a></li>
        <li><a href="#sobre-mi" :class="linkClass" @click="menuOpen = false">{{ $t('nav.about') }}</a></li>
        <li><a href="#que-hago" :class="linkClass" @click="menuOpen = false">{{ $t('nav.specialty') }}</a></li>
        <li><a href="#skills" :class="linkClass" @click="menuOpen = false">{{ $t('nav.skills') }}</a></li>
        <li><a href="#proyectos" :class="linkClass" @click="menuOpen = false">{{ $t('nav.projects') }}</a></li>
        <li><a href="#contacto" :class="linkClass" @click="menuOpen = false">{{ $t('nav.contact') }}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function setLanguage(lang: 'es' | 'en') {
  locale.value = lang
  localStorage.setItem('user-locale', lang)
}

const scrollY = ref(0)
const menuOpen = ref(false)
const isMobile = ref(window.innerWidth < 768)

const logoSrc = computed(() =>
  opacity.value > 0.5 || isMobile.value
    ? '/logo.png'
    : '/logo_blanco.png'
)


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
