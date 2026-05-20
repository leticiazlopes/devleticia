<template>
  <div>
    <Navbar />
    <main>
      <HeroSection />
      <BlogPreviewSection />
      <SkillsSection />
      <FooterSection />
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import BlogPreviewSection from '@/components/BlogPreviewSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
