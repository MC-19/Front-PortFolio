<template>
  <section
    id="que-hago"
    class="relative text-white py-24 px-4 md:px-12 lg:px-20 bg-cover bg-center bg-no-repeat scroll-mt-32"
    style="background-image: url('/images/services-md.jpg')"
  >
    <!-- Capa oscura -->
    <div class="absolute inset-0 bg-black/70"></div>

    <div class="relative z-10 w-full">
      <h2 
        v-motion-slide-visible-once-bottom
        class="text-4xl font-bold mb-16 border-b border-violet-300 inline-block pb-2"
      >
        {{ $t('whatido.title') }}
      </h2>

      <div class="grid md:grid-cols-2 relative text-white">
        <!-- Línea vertical -->
        <div class="hidden md:block absolute left-1/2 top-0 h-full w-px bg-violet-300 z-20"></div>
        <!-- Línea horizontal -->
        <div class="absolute top-1/2 left-0 w-full h-px bg-violet-300 z-20"></div>

        <!-- 1. Desarrollo Fullstack -->
        <div v-motion-fade-visible-once class="p-6 md:p-10 lg:p-14 z-10">
          <h3 class="font-bold text-xl uppercase mb-2 flex items-center gap-3">
            <i class="fa-solid fa-code text-violet-300"></i>
            {{ $t('whatido.c1_title') }}
          </h3>
          <p class="text-gray-300">
            {{ $t('whatido.c1_desc') }}
          </p>
        </div>

        <!-- 2. Código seguro -->
        <div v-motion-fade-visible-once class="p-6 md:p-10 lg:p-14 z-10">
          <h3 class="font-bold text-xl uppercase mb-2 flex items-center gap-3">
            <i class="fa-solid fa-shield-halved text-violet-300"></i>
            {{ $t('whatido.c2_title') }}
          </h3>
          <p class="text-gray-300">
            {{ $t('whatido.c2_desc') }}
          </p>
        </div>

        <!-- 3. Interfaces usables -->
        <div v-motion-fade-visible-once class="p-6 md:p-10 lg:p-14 z-10">
          <h3 class="font-bold text-xl uppercase mb-2 flex items-center gap-3">
            <i class="fa-solid fa-object-group text-violet-300"></i>
            {{ $t('whatido.c3_title') }}
          </h3>
          <p class="text-gray-300">
            {{ $t('whatido.c3_desc') }}
          </p>
        </div>

        <!-- 4. Mentalidad de solución -->
        <div v-motion-fade-visible-once class="p-6 md:p-10 lg:p-14 z-10">
          <h3 class="font-bold text-xl uppercase mb-2 flex items-center gap-3">
            <i class="fa-solid fa-diagram-project text-violet-300"></i>
            {{ $t('whatido.c4_title') }}
          </h3>
          <p class="text-gray-300">
            {{ $t('whatido.c4_desc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
</script>
