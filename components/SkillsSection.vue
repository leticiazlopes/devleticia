<template>
  <section class="section" id="skills">
    <SectionTitle :meta="t.skills.title" :title="t.skills.title" />
    <div class="groups-wrapper">
      <div
        v-for="group in t.skills.groups"
        :key="group.category"
        class="skill-group"
      >
        <h3 class="group-title">{{ group.category }}</h3>
        <div class="skill-grid">
          <span
            v-for="skill in group.items"
            :key="skill"
            class="skill-tag"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<style scoped>
.groups-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.skill-group {
  text-align: left;
}

.group-title {
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #d17b9a;
  margin: 0 0 0.75rem 0;
  padding-bottom: 0.4rem;
  border-bottom: 1.5px solid #f0c4d4;
}

.skill-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #b05a7a;
  background-color: #fbeaf0;
  border: 1px solid #f0c4d4;
  border-radius: 6px;
  padding: 5px 14px;
  transition: background 0.2s, transform 0.2s;
  cursor: default;
}

.skill-tag:hover {
  background-color: #f4c0d1;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .groups-wrapper {
    padding: 0.5rem;
  }
}
</style>