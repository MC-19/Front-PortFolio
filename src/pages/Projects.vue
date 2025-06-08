<template>
  <section id="proyectos" class="bg-neutral-900 text-white py-24 px-6 md:px-16 lg:px-24">
    <h2 class="text-4xl font-bold mb-16 border-b-2 border-violet-300 inline-block pb-2">
      Proyectos
    </h2>

    <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      <!-- GrupoClavD -->
      <div
        @click="openModal('grupoclavd')"
        role="button"
        class="cursor-pointer bg-[#f4f0fa] text-neutral-900 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
      >
        <img src="/images/GrupoClavD.png" alt="GrupoClavD" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">GrupoClavD</h3>
          <p class="text-sm text-neutral-700 mb-4">
            Empresa de rotulación e instalaciones operando a nivel nacional e internacional.
          </p>
          <div class="flex flex-wrap gap-2 text-xs text-violet-600 font-medium">
            <span>Wix</span><span>HTML</span><span>CSS</span><span>Diseño Web</span>
          </div>
        </div>
      </div>

      <!-- MC-Software -->
      <div
        @click="openModal('mcsoftware')"
        role="button"
        class="cursor-pointer bg-white text-neutral-900 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
      >
        <img src="/images/mc_software_instagram.png" alt="MC-Software" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">MC-Software (Próximamente)</h3>
          <p class="text-sm text-neutral-700 mb-4">
            Plataforma para el desarrollo de software profesional, actualmente en construcción.
          </p>
          <div class="flex flex-wrap gap-2 text-xs text-violet-600 font-medium">
            <span>Vue</span><span>Tailwind</span><span>Node.js</span><span>TypeScript</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedProject"
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
              :src="selectedProject === 'grupoclavd'
                ? '/images/GrupoClavD.png'
                : '/images/mc_software_instagram.png'"
              class="rounded"
              alt="Imagen proyecto"
            />
          </div>

          <!-- Columna: contenido -->
          <div class="md:w-1/2">
            <h3 class="text-3xl font-bold mb-4">
              {{ selectedProject === 'grupoclavd' ? 'GrupoClavD' : 'MC-Software' }}
            </h3>

            <p class="text-gray-800 mb-6 text-base leading-relaxed">
              {{
                selectedProject === 'grupoclavd'
                  ? 'Empresa de rotulación e instalaciones que opera a nivel nacional e internacional. Página web desarrollada con Wix, orientada a mostrar campañas visuales, servicios e instalaciones realizadas.'
                  : 'Proyecto personal para el desarrollo de soluciones digitales. Esta plataforma servirá como base para futuros proyectos de software orientados a pymes y autónomos. Actualmente en construcción.'
              }}
            </p>

            <div class="flex flex-wrap gap-2 text-sm mb-6 text-violet-600 font-medium">
              <template v-if="selectedProject === 'grupoclavd'">
                <span>Wix</span><span>HTML</span><span>CSS</span><span>Diseño Web</span>
              </template>
              <template v-else>
                <span>Vue</span><span>Tailwind</span><span>Node.js</span><span>TypeScript</span>
              </template>
            </div>

            <div>
              <a
                v-if="selectedProject === 'grupoclavd'"
                href="https://grupoclavd.com"
                target="_blank"
                class="inline-block border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white px-6 py-2 rounded transition"
              >
                Ver sitio web
              </a>
              <button
                v-else
                disabled
                class="inline-block bg-violet-100 text-violet-600 px-6 py-2 rounded cursor-not-allowed"
              >
                Próximamente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedProject = ref<string | null>(null)

function openModal(project: string) {
  selectedProject.value = project
}

function closeModal() {
  selectedProject.value = null
}
</script>
