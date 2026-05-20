<template>
  <div class="blog-page">
    <Navbar />

    <main class="section blog-page__content">
      <SectionTitle :meta="t.blog.title" :title="t.blog.subtitle" />

      <div v-if="errorMessage" class="alert alert--error">
        <p>{{ errorMessage }}</p>
      </div>

      <div v-else-if="!posts || posts.length === 0" class="alert alert--info">
        <p>{{ t.blog.empty }}</p>
      </div>

      <div class="blog-feed" v-else>
        <article v-for="post in posts" :key="post.id" class="blog-feed-item">
          <NuxtLink :to="`/blog/${post.id}`" class="blog-feed-link">
            <time class="blog-feed-item__date">{{ post.date }}</time>
            <h2 class="blog-feed-item__title">{{ post.title }}</h2>
            <p class="blog-feed-item__summary">{{ post.summary }}</p>
            <span class="blog-feed-item__read-more">{{ t.blog.readMore }}</span>
          </NuxtLink>
        </article>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAsyncData } from '#app'
import SectionTitle from '@/components/SectionTitle.vue'
import Navbar from '@/components/Navbar.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

const { data, error } = await useAsyncData('notion-posts', () => $fetch('/api/posts'))

const posts = computed(() => (data.value?.error ? [] : data.value ?? []))
const errorMessage = computed(() => {
  if (data.value?.error) {
    return data.value.error + (data.value.details ? `: ${data.value.details}` : '')
  }
  return error?.message || ''
})
</script>
