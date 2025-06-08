<template>
  <footer class="bg-neutral-900 text-white py-10">
    <div class="flex justify-center mb-6 space-x-4">
      <a v-for="link in socialLinks" :key="link.href" :href="link.href" target="_blank" rel="noopener" class="bg-neutral-800 hover:bg-violet-300 transition-colors p-3 rounded">
        <i :class="link.icon" class="text-xl"></i>
      </a>
    </div>

    <div class="flex justify-center mb-4">
      <i class="fas fa-rocket text-white text-2xl"></i>
    </div>

    <p class="text-center text-gray-400 text-sm">© Mario Cristian 2025</p>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = [
  //{ href: 'https://facebook.com', icon: 'fab fa-facebook-f' },
  //{ href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { href: 'https://www.instagram.com/__djmc_1/', icon: 'fab fa-instagram' },
  { href: 'https://github.com/MC-19', icon: 'fab fa-github' },
  { href: 'https://www.linkedin.com/in/cristian-dascalu-mc', icon: 'fab fa-linkedin-in' }
]
</script>
