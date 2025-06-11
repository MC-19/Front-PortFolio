<template>
  <section
    id="que-hago"
    class="relative text-white py-24 px-4 md:px-12 lg:px-20 bg-cover bg-center bg-no-repeat scroll-mt-32"
    style="background-image: url('/images/services-md.jpg')"
  >
    <!-- Capa oscura -->
    <div class="absolute inset-0 bg-black/70"></div>

    <div class="relative z-10 w-full">
      <h2 class="text-4xl font-bold mb-16 border-b border-violet-300 inline-block pb-2">
        ¿Qué es lo que hago?
      </h2>

      <div class="grid md:grid-cols-2 relative text-white">
        <!-- Línea vertical -->
        <div class="hidden md:block absolute left-1/2 top-0 h-full w-px bg-violet-300 z-20"></div>
        <!-- Línea horizontal -->
        <div class="absolute top-1/2 left-0 w-full h-px bg-violet-300 z-20"></div>

        <!-- 1. Desarrollo Fullstack -->
        <div class="p-6 md:p-10 lg:p-14 z-10">
          <h3 class="font-bold text-xl uppercase mb-2 flex items-center gap-3">
            <i class="fa-solid fa-code text-violet-300"></i>
            Desarrollo Web Fullstack
          </h3>
          <p class="text-gray-300">
            Desarrollo soluciones web completas, desde la interfaz hasta el servidor. Utilizo tecnologías modernas como Vue, TypeScript y Node.js para crear sistemas robustos, eficientes y visualmente atractivos.
          </p>
        </div>

        <!-- 2. Código seguro -->
        <div class="p-6 md:p-10 lg:p-14 z-10">
          <h3 class="font-bold text-xl uppercase mb-2 flex items-center gap-3">
            <i class="fa-solid fa-shield-halved text-violet-300"></i>
            Código Seguro y Limpio
          </h3>
          <p class="text-gray-300">
            Programar bien también implica hacerlo de forma segura. Aplico principios de ciberseguridad desde el inicio del proyecto, con buenas prácticas, validaciones y una mentalidad ética.
          </p>
        </div>

        <!-- 3. Interfaces usables -->
        <div class="p-6 md:p-10 lg:p-14 z-10">
          <h3 class="font-bold text-xl uppercase mb-2 flex items-center gap-3">
            <i class="fa-solid fa-object-group text-violet-300"></i>
            Interfaces Útiles y Usables
          </h3>
          <p class="text-gray-300">
            Me enfoco en crear interfaces limpias, comprensibles y rápidas. Diseño pensando siempre en el usuario, buscando una experiencia clara, intuitiva y agradable.
          </p>
        </div>

        <!-- 4. Mentalidad de solución -->
        <div class="p-6 md:p-10 lg:p-14 z-10">
          <h3 class="font-bold text-xl uppercase mb-2 flex items-center gap-3">
            <i class="fa-solid fa-diagram-project text-violet-300"></i>
            Mentalidad Orientada a Proyectos
          </h3>
          <p class="text-gray-300">
            No solo desarrollo software: resuelvo problemas reales. Me gusta trabajar en proyectos que ayuden a autónomos, pequeñas empresas o ideas personales a convertirse en soluciones útiles y escalables.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
</script>
