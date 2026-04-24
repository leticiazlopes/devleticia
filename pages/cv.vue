<template>
  <div class="cv-page">
    <Navbar />

    <main class="section cv-section">
      <div class="cv-header">
        <div>
          <span class="section-title__meta">{{ t.cv.title }}</span>
          <h1>{{ t.cv.description }}</h1>
        </div>

        <div class="hero__actions cv-actions">
          <a class="button button--primary" :href="resumePdf" download>{{ t.cv.download }}</a>
          <NuxtLink class="button button--secondary" to="/">{{ t.cv.back }}</NuxtLink>
        </div>
      </div>

      <div class="cv-preview-card">
        <div class="cv-preview-toolbar">
          <!-- <div>
            <strong>{{ t.cv.title }}</strong>
            <p>{{ t.cv.description }}</p>
          </div> -->
          <!-- <div class="hero__actions cv-toolbar-actions">
            <a class="button button--primary" :href="resumePdf" download>{{ t.cv.download }}</a>
            <NuxtLink class="button button--secondary" to="/">{{ t.cv.back }}</NuxtLink>
          </div> -->
        </div>

        <div class="cv-preview">
          <iframe :src="resumePdf" title="CV Preview" frameborder="0" aria-label="CV Preview"></iframe>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t, language } = useLanguage()
const resumePdf = computed(() => language.value === 'pt' ? '/pt.pdf' : '/en.pdf')
</script>
