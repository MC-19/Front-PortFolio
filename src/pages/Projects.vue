<template>
  <section id="proyectos" class="bg-neutral-900 text-white py-24 px-6 md:px-16 lg:px-24 scroll-mt-32">
    <h2 
      v-motion-slide-visible-once-bottom
      class="text-4xl font-bold mb-16 border-b-2 border-violet-300 inline-block pb-2"
    >
      {{ $t('projects.title') }}
    </h2>

    <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="proj in projectsList"
        :key="proj.id"
        v-motion-slide-visible-once-bottom
        @click="openModal(proj)"
        role="button"
        class="cursor-pointer bg-white text-neutral-900 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
        :class="{ 'bg-[#f4f0fa]': proj.id === 'grupoclavd' }"
      >
        <img :src="proj.image" :alt="proj.title" loading="lazy" decoding="async" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ proj.title }}</h3>
          <p class="text-sm text-neutral-700 mb-4">
            {{ proj.shortDesc }}
          </p>
          <div class="flex flex-wrap gap-2 text-xs text-violet-600 font-medium">
            <span v-for="tag in proj.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedProject"
      @click.self="closeModal"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
    >
      <div class="bg-white text-neutral-900 rounded-xl max-w-4xl w-full p-8 relative shadow-xl">
        <!-- Botón cerrar -->
        <button
          @click="closeModal"
          class="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        <!-- Contenido en 2 columnas -->
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Columna: imagen -->
          <div class="md:w-1/2">
            <img
              :src="selectedProject.image"
              loading="lazy"
              decoding="async"
              class="rounded"
              alt="Imagen proyecto"
            />
          </div>

          <!-- Columna: contenido -->
          <div class="md:w-1/2">
            <h3 class="text-3xl font-bold mb-4">
              {{ selectedProject.title }}
            </h3>

            <p class="text-gray-800 mb-6 text-base leading-relaxed">
              {{ selectedProject.longDesc }}
            </p>

            <div class="flex flex-wrap gap-2 text-sm mb-6 text-violet-600 font-medium">
              <span v-for="tag in selectedProject.tags" :key="tag">{{ tag }}</span>
            </div>

            <div>
              <a
                v-if="!selectedProject.disabled && selectedProject.link"
                :href="selectedProject.link"
                target="_blank"
                class="inline-block border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white px-6 py-2 rounded transition"
              >
                {{ $t('projects.visit') }}
              </a>
              <button
                v-else
                disabled
                class="inline-block bg-violet-100 text-violet-600 px-6 py-2 rounded cursor-not-allowed"
              >
                {{ $t('projects.coming_soon') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

type ProjectInfo = {
  id: string;
  image: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  link?: string;
  disabled?: boolean;
}

const projectsList = computed<ProjectInfo[]>(() => [
  {
    id: 'grupoclavd',
    image: '/images/GrupoClavD.png',
    title: 'GrupoClavD',
    shortDesc: t('projects.desc_grupoclavd_short'),
    longDesc: t('projects.desc_grupoclavd_long'),
    tags: ['Wix', 'HTML', 'CSS', 'Diseño Web'],
    link: 'https://grupoclavd.com'
  },
  {
    id: 'mcsoftware',
    image: '/images/mc_software_instagram.png',
    title: 'MC-Software (' + t('projects.coming_soon') + ')',
    shortDesc: t('projects.desc_mc_short'),
    longDesc: t('projects.desc_mc_long'),
    tags: ['Vue', 'Tailwind', 'Node.js', 'TypeScript'],
    disabled: true
  }
]);

const selectedProject = ref<ProjectInfo | null>(null)

function openModal(project: ProjectInfo) {
  selectedProject.value = project
  document.body.style.overflow = 'hidden' // prevent background scrolling
}

function closeModal() {
  selectedProject.value = null
  document.body.style.overflow = ''
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && selectedProject.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
