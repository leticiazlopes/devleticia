<template>
  <header>
    <nav class="navbar">
      <div class="navbar__brand">
        <a href="/">devLeticia</a>
        <span class="navbar__tag">Portfolio</span>
      </div>
      <button class="navbar__toggle" type="button" @click="toggleMenu" :aria-expanded="isOpen" aria-label="Toggle navigation">
        <span class="navbar__burger"></span>
      </button>
      <transition name="nav-menu">
        <ul :class="['navbar__list', { 'navbar__list--open': isOpen }]">
          <!-- <li class="navbar__item"><a href="#hero" @click="closeMenu">{{ t.nav.about }}</a></li> -->
          <!-- <li class="navbar__item"><a href="#projects" @click="closeMenu">{{ t.nav.projects }}</a></li> -->
          <!-- <li class="navbar__item"><a href="#blog" @click="closeMenu">{{ t.nav.blog }}</a></li> -->
          <li class="navbar__item"><a href="#skills" @click="closeMenu">{{ t.nav.skills }}</a></li>
          <!-- <li class="navbar__item"><a href="#contact" @click="closeMenu">{{ t.nav.contact }}</a></li> -->
           <li class="navbar__item">
            <NuxtLink to="cv" @click="closeMenu">{{ t.nav.cv }}</NuxtLink>
          </li>
          <li class="navbar__item">
            <NuxtLink to="contact" @click="closeMenu">{{ t.nav.ct }}</NuxtLink>
          </li>

        </ul>
      </transition>

      <div class="navbar__lang-wrapper" ref="langDropdown">
        <button
          class="button button--secondary navbar__lang"
          type="button"
          @click="toggleDropdown"
          :aria-expanded="isDropdownOpen"
          aria-haspopup="listbox"
        >
          🌐 {{ language.toUpperCase() }}
          <span :class="['navbar__lang-chevron', { 'navbar__lang-chevron--open': isDropdownOpen }]">▾</span>
        </button>
        <transition name="dropdown">
          <ul v-if="isDropdownOpen" class="navbar__lang-dropdown" role="listbox">
            <li
              role="option"
              :aria-selected="language === 'pt'"
              :class="['navbar__lang-option', { 'navbar__lang-option--active': language === 'pt' }]"
              @click="selectLanguage('pt')"
            >
              🇧🇷 Português
            </li>
            <li
              role="option"
              :aria-selected="language === 'en'"
              :class="['navbar__lang-option', { 'navbar__lang-option--active': language === 'en' }]"
              @click="selectLanguage('en')"
            >
              🇺🇸 English
            </li>
          </ul>
        </transition>
      </div>

    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const { t, toggleLanguage, language } = useLanguage()

const isOpen = ref(false)
const isDropdownOpen = ref(false)
const langDropdown = ref(null)

const toggleMenu = () => { isOpen.value = !isOpen.value }
const closeMenu = () => { isOpen.value = false }
const toggleDropdown = () => { isDropdownOpen.value = !isDropdownOpen.value }

const selectLanguage = (lang) => {
  if (language.value !== lang) toggleLanguage()
  isDropdownOpen.value = false
}

const handleClickOutside = (e) => {
  if (langDropdown.value && !langDropdown.value.contains(e.target)) {
    isDropdownOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
.navbar__lang-wrapper {
  position: relative;
}

.navbar__lang {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Work Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.navbar__lang-chevron {
  font-size: 11px;
  transition: transform 0.2s ease;
  display: inline-block;
}

.navbar__lang-chevron--open {
  transform: rotate(180deg);
}

.navbar__lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border: 1px solid #f0c4d4;
  border-radius: 8px;
  padding: 4px;
  list-style: none;
  margin: 0;
  min-width: 140px;
  box-shadow: 0 4px 16px rgba(209, 123, 154, 0.15);
  z-index: 100;
}

.navbar__lang-option {
  font-family: 'Work Sans', sans-serif;
  font-size: 13px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
  color: #333;
}

.navbar__lang-option:hover {
  background: #fbeaf0;
}

.navbar__lang-option--active {
  color: #d17b9a;
  font-weight: 600;
  background: #fbeaf0;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>