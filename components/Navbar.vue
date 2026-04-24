<template>
  <header>
    <nav class="navbar">
      <div class="navbar__brand">
        <a href="#home">devLeticia</a>
        <span class="navbar__tag">Portfolio</span>
      </div>
      <button class="navbar__toggle" type="button" @click="toggleMenu" :aria-expanded="isOpen" aria-label="Toggle navigation">
        <span class="navbar__burger"></span>
      </button>
      <transition name="nav-menu">
        <ul :class="['navbar__list', { 'navbar__list--open': isOpen }]">
          <li class="navbar__item"><a href="#about" @click="closeMenu">{{ t.nav.about }}</a></li>
          <li class="navbar__item"><a href="#projects" @click="closeMenu">{{ t.nav.projects }}</a></li>
          <li class="navbar__item"><a href="#blog" @click="closeMenu">{{ t.nav.blog }}</a></li>
          <li class="navbar__item"><a href="#skills" @click="closeMenu">{{ t.nav.skills }}</a></li>
          <li class="navbar__item"><a href="#contact" @click="closeMenu">{{ t.nav.contact }}</a></li>
        </ul>
      </transition>
      <button class="button button--secondary navbar__lang" type="button" @click="toggleLanguage">
        {{ t.nav.toggle }}
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const { t, toggleLanguage } = useLanguage()
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const closeMenu = () => {
  isOpen.value = false
}
</script>
