<template>
  <div class="section-title">
    <span class="section-title__meta">{{ meta }}</span>
    <h2 class="section-title__heading">{{ title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  meta: { type: String, default: 'Section' },
  title: { type: String, required: true }
})
</script>
