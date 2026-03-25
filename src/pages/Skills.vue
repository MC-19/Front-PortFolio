<template>
  <section id="skills" class="bg-neutral-900 text-white py-24 px-6 md:px-16 lg:px-24 scroll-mt-32">
      <h2 
        v-motion-slide-visible-once-bottom
        class="text-4xl font-bold mb-20 border-b-2 border-violet-300 inline-block pb-2"
      >
        {{ $t('skills.title') }}
      </h2>

    <div class="grid gap-10 lg:grid-cols-3">
      <!-- Columna izquierda -->
      <div v-motion-fade-visible-once class="space-y-10 lg:pt-20">
        <SkillBlock
          :title="$t('skills.c1_title')"
          :items="[
            'HTML', 'CSS', 'JavaScript', 'TypeScript',
            'Vue', 'React', 'Tailwind CSS', 'Vite',
            'Node.js', 'Express.js', 'NestJS',
            'Java', 'Python'
          ]"
        />
      </div>

      <!-- Columna central -->
      <div v-motion-fade-visible-once class="space-y-10 lg:pt-0 lg:pb-10">
        <SkillBlock
          :title="$t('skills.c2_title')"
          :items="[
            'Figma', 'UI/UX Design', 'Responsive Design',
            'Project Management',
            $t('skills.s_native_ro'), $t('skills.s_native_es'),
            $t('skills.s_communication'), $t('skills.s_adaptability'), $t('skills.s_teamwork')
          ]"
        />
        <SkillBlock
          :title="$t('skills.c3_title')"
          :items="[
            'Ethical Hacking', 'Linux', 'Burp Suite',
            'Pentesting', 'Network Scanning', 'Password Cracking', 'Web Security',
            'Privilege Escalation', 'SIEM & Log Analysis'
          ]"
        />
      </div>

      <!-- Columna derecha -->
      <div v-motion-fade-visible-once class="space-y-10 lg:pt-20">
        <SkillBlock
          :title="$t('skills.c4_title')"
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
