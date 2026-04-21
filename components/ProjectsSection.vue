<template>
  <section class="section" id="projects">
    <SectionTitle :meta="t.projects.title" :title="t.projects.title" />
    <div class="cards">
      <article v-for="project in t.projects.items" :key="project.title" class="card">
        <img :src="project.image" :alt="project.title" />
        <div class="card__content">
          <span class="card__tag">{{ project.stack }}</span>
          <h3 class="card__title">{{ project.title }}</h3>
          <p class="card__description">{{ project.description }}</p>
          <div class="card__footer">
            <a class="card__button" :href="project.link" target="_blank" rel="noreferrer">
              {{ t.projects.button }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>
