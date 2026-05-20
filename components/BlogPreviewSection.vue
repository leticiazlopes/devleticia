<template>
  <section class="section blog-preview-section" id="blog">
    <SectionTitle :meta="t.blog.title" :title="t.blog.subtitle" />

    <div v-if="errorMessage" class="alert alert--error">
      <p>{{ errorMessage }}</p>
    </div>

    <div class="blog-preview-list" v-else-if="posts.length > 0">
      <div class="blog-feed">
        <article v-for="post in currentPosts" :key="post.id" class="blog-feed-item">
          <NuxtLink :to="`/blog/${post.id}`" class="blog-feed-link">
            <time class="blog-feed-item__date">{{ post.date }}</time>
            <h3 class="blog-feed-item__title">{{ post.title }}</h3>
            <p class="blog-feed-item__summary">{{ post.summary }}</p>
            <span class="blog-feed-item__read-more">{{ t.blog.readMore }}</span>
          </NuxtLink>
        </article>
      </div>

      <div class="blog-preview-pagination">
        <button class="button button--secondary" :disabled="page === 1" @click="page--">
          {{ t.blog.previous }}
        </button>
        <span>{{ page }} / {{ totalPages }}</span>
        <button class="button button--secondary" :disabled="page >= totalPages" @click="page++">
          {{ t.blog.next }}
        </button>
      </div>
    </div>

    <div class="alert alert--info" v-else>
      <p>{{ t.blog.empty }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useAsyncData } from '#app'
import SectionTitle from '@/components/SectionTitle.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
const page = ref(1)
const pageSize = 4

const { data } = await useAsyncData('blog-preview-posts', () => $fetch('/api/posts'))
const posts = computed(() => (data.value?.error ? [] : data.value ?? []))
const errorMessage = computed(() => {
  if (data.value?.error) {
    return data.value.error + (data.value.details ? `: ${data.value.details}` : '')
  }
  return ''
})
const totalPages = computed(() => Math.max(1, Math.ceil(posts.value.length / pageSize)))
const currentPosts = computed(() => {
  const start = (page.value - 1) * pageSize
  return posts.value.slice(start, start + pageSize)
})
</script>
