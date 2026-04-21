<template>
  <section class="section" id="skills">
    <SectionTitle :meta="t.skills.title" :title="t.skills.title" />
    <div class="skill-grid">
      <article v-for="skill in skills" :key="skill.name" class="skill-card">
        <img :src="skill.icon" :alt="skill.name" />
        <span>{{ skill.name }}</span>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
const skills = [
  { name: 'HTML5', icon: '/skills/HTML5.svg' },
  { name: 'CSS3', icon: '/skills/CSS3.svg' },
  { name: 'JavaScript', icon: '/skills/JavaScript.svg' },
  { name: 'Vue.js', icon: '/skills/React.svg' },
  { name: 'TypeScript', icon: '/skills/TypeScript.svg' },
  { name: 'Git', icon: '/skills/Git.png' },
  { name: 'Python', icon: '/skills/Python.svg' },
  { name: 'PHP', icon: '/skills/PHP.svg' },
  { name: 'AWS', icon: '/skills/AWS.svg' }
]
</script>
