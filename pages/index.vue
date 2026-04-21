<template>
  <div>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <!-- <ProjectsSection /> -->
      <!-- <BlogSection /> -->
      <SkillsSection />
      <FooterSection />
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
// import ProjectsSection from '@/components/ProjectsSection.vue'
// import BlogSection from '@/components/BlogSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
