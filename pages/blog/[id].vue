<template>
  <div class="blog-post-page">
    <Navbar />

    <main class="section blog-post__content">
      <div v-if="errorMessage" class="alert alert--error">
        <p>{{ errorMessage }}</p>
      </div>

      <div v-else-if="!post || !post.title" class="alert alert--info">
        <p>{{ t.blog.empty }}</p>
      </div>

      <article v-else class="post-card">
        <div class="post-header">
          <span class="card__tag">{{ post.date }}</span>
          <h1 class="post-title">{{ post.title }}</h1>
        </div>

        <div class="post-body">
          <template v-for="block in post.content" :key="block.id">
            <p v-if="block.tag === 'p'">{{ block.text }}</p>
            <h1 v-else-if="block.tag === 'h1'">{{ block.text }}</h1>
            <h2 v-else-if="block.tag === 'h2'">{{ block.text }}</h2>
            <h3 v-else-if="block.tag === 'h3'">{{ block.text }}</h3>
            <blockquote v-else-if="block.tag === 'blockquote'">{{ block.text }}</blockquote>
            <div v-else-if="block.listType === 'bulleted'" class="post-list-item">• {{ block.text }}</div>
            <div v-else-if="block.listType === 'numbered'" class="post-list-item">1. {{ block.text }}</div>
            <p v-else>{{ block.text }}</p>
          </template>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useAsyncData } from '#app'
import Navbar from '@/components/Navbar.vue'
import { useLanguage } from '@/composables/useLanguage'

const route = useRoute()
const { t } = useLanguage()
const postId = String(route.params.id || '')

const { data, error } = await useAsyncData(`blog-post-${postId}`, () => $fetch(`/api/posts/${postId}`))

const post = computed(() => (data.value?.error ? null : data.value ?? null))
const errorMessage = computed(() => {
  if (data.value?.error) {
    return data.value.error + (data.value.details ? `: ${data.value.details}` : '')
  }
  return error?.message || ''
})
</script>
