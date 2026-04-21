<template>
  <footer class="footer" id="contact">
    <p>{{ t.footer.contactText }}</p>
    <p>
      <a href="mailto:leticiazlzlima@gmail.com">leticiazlzlima@gmail.com</a>
    </p>
  </footer>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>
