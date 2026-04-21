<template>
  <section class="section blog-section" id="blog">
    <SectionTitle :meta="t.blog.title" :title="t.blog.subtitle" />
    <div class="cards">
      <article v-for="post in t.blog.posts" :key="post.title" class="card card--blog">
        <div class="card__content">
          <span class="card__tag">{{ post.date }}</span>
          <h3 class="card__title">{{ post.title }}</h3>
          <p class="card__description">{{ post.summary }}</p>
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
