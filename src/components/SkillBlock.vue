<template>
  <div :class="['bg-neutral-800 rounded-xl p-6 shadow-md hover:shadow-violet-400/100 transition', $attrs.class]">
    <h3 class="text-lg font-semibold uppercase mb-4 text-violet-300 tracking-wide">{{ title }}</h3>
<ul class="grid grid-cols-2 gap-y-2 gap-x-6 text-sm leading-relaxed">
  <li v-for="item in items" :key="item" class="list-disc list-inside marker:text-violet-200">
    {{ item }}
  </li>
</ul>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  items: string[]
}>()
</script>
