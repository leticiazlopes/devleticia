<template>
  <section class="hero" id="home">
    <div class="hero__content">
      <span class="hero__badge">{{ t.hero.badge }}</span>
      <h1 class="hero__title">{{ t.hero.title }}</h1>
      <p class="hero__text">{{ t.hero.text }}</p>
      <div class="hero__actions">
        <a class="button button--primary" href="/cv">{{ t.nav.cv }}</a>
        <a class="button button--secondary" href="/contact">{{ t.nav.contact }}</a>
      </div>
    </div>

    <div class="hero__image">
      <img :src="profileImage" alt="Foto de Letícia Lopes" />
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
const profileImage = '/profile.jpeg'
</script>
