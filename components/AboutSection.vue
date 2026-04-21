<template>
  <section class="section" id="about">
    <SectionTitle :meta="t.about.title" :title="t.about.presentation" />
    <div class="about">
      <div class="about__content">
        <div class="about__card">
          <h3>{{ t.about.title }}</h3>
          <p>{{ t.about.presentation }}</p>
          <div class="about__grid">
            <div v-for="card in t.about.cards" :key="card.label" class="about__item">
              <strong>{{ card.label }}</strong>
              <span>{{ card.value }}</span>
            </div>
          </div>
          <div class="social-links">
            <a v-for="social in socials" :key="social.label" :href="social.link" target="_blank" rel="noreferrer" :aria-label="social.label">
              <img :src="social.icon" :alt="social.label" />
            </a>
          </div>
          <div class="hero__actions">
            <a class="button button--primary" href="/resumeLeticiaLopes.pdf" download>{{ t.about.download }}</a>
            <a class="button button--secondary" href="mailto:leticiazlzlima@gmail.com">{{ t.about.contact }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
const profileImage = '/profile.jpeg'
const socials = [
  { label: 'Email', link: 'mailto:leticiazlzlima@gmail.com', icon: '/icons/gmail.svg' },
  { label: 'GitHub', link: 'https://github.com/leticiazlopes', icon: '/icons/github-circle-svgrepo-com.svg' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/leticiazlopes', icon: '/icons/linkedin.svg' }
]
</script>
