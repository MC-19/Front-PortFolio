<template>
  <section id="skills" class="bg-neutral-900 text-white py-24 px-6 md:px-16 lg:px-24">
    <h2 class="text-4xl font-bold mb-20 border-b-2 border-violet-300 inline-block pb-2">
      Habilidades
    </h2>

    <div class="grid gap-6 lg:grid-cols-3">
      <!-- Columna izquierda -->
      <div class="space-y-10 relative top-20">
        <SkillBlock
          title="Frontend + Backend"
          :items="[
            'HTML', 'CSS', 'JavaScript', 'TypeScript',
            'Vue', 'React', 'Tailwind CSS', 'Vite',
            'Node.js', 'Express.js', 'NestJS',
            'Java', 'Python'
          ]"
        />
      </div>

      <!-- Columna central -->
      <div class="space-y-10 relative -top-6">
        <SkillBlock
          title="Diseño & Soft Skills"
          :items="[
            'Figma', 'Diseño UI/UX', 'Diseño responsivo',
            'Gestión de proyectos',
            'Rumano nativo', 'Español nativo',
            'Comunicación', 'Adaptabilidad', 'Trabajo en equipo'
          ]"
        />
        <SkillBlock
          title="Ciberseguridad"
          class="relative top-6"
          :items="[
            'Hacking Ético', 'Linux', 'Burp Suite',
            'Pentesting', 'Escaneo de Redes', 'Cracking de Contraseñas', 'Seguridad Web',
            'Escalación de Privilegios', 'SIEM & Análisis de Logs'
          ]"
        />
      </div>

      <!-- Columna derecha -->
      <div class="space-y-10 relative top-20">
        <SkillBlock
          title="Cloud / DevOps & Herramientas"
          :items="[
            'Git', 'GitHub', 'GitHub Actions',
            'Docker', 'CI/CD',
            'VPS', 'Render', 'Vercel', 'Netlify',
            'Postman', 'REST APIs',
            'PostgreSQL', 'MongoDB'
          ]"
        />
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import SkillBlock from '../components/SkillBlock.vue'
</script>
