<template>
    <Navbar />
  <main class="contact-page" id="contact">
    <section class="contact-hero">
      <span class="contact-badge">{{ t.contact.badge }}</span>
      <h1 class="contact-title">{{ t.contact.title }}</h1>
      <p class="contact-subtitle">{{ t.contact.subtitle }}</p>
    </section>

    <section class="contact-grid">
      <div class="contact-card contact-card--email">
        <span class="contact-card__icon">✉</span>
        <h2 class="contact-card__label">{{ t.contact.emailLabel }}</h2>
        <a href="mailto:leticiazlzlima@gmail.com" class="contact-card__link">
          leticiazlzlima@gmail.com
        </a>
      </div>

      <div class="contact-card contact-card--location">
        <span class="contact-card__icon">📍</span>
        <h2 class="contact-card__label">{{ t.contact.locationLabel }}</h2>
        <p class="contact-card__text">{{ t.contact.location }}</p>
        <p class="contact-card__availability">{{ t.contact.availability }}</p>
      </div>

      <div class="contact-card contact-card--social">
        <span class="contact-card__icon">🔗</span>
        <h2 class="contact-card__label">{{ t.contact.socialLabel }}</h2>
        <div class="contact-social-links">
          <a
            href="https://github.com/leticiazlopes"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-social-link"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="contact-social-link__icon">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/leticiazlopes"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-social-link"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="contact-social-link__icon">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://devleticia.com"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-social-link"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="contact-social-link__icon">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            devleticia.com
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage'
const { t } = useLanguage()
</script>

<style scoped>
.contact-page {
  font-family: 'Work Sans', sans-serif;
  max-width: 860px;
  margin: 0 auto;
  padding: 4rem 1.5rem 6rem;
}

.contact-hero {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #d17b9a;
  background: #fbeaf0;
  border: 1px solid #f0c4d4;
  border-radius: 20px;
  padding: 4px 14px;
  margin-bottom: 1rem;
}

.contact-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #d17b9a;
  margin: 0 0 0.75rem;
  line-height: 1.2;
}

.contact-subtitle {
  font-size: 16px;
  color: #555;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.contact-card {
  background: white;
  border: 1px solid #f0c4d4;
  border-radius: 16px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(209, 123, 154, 0.12);
}

.contact-card__icon {
  font-size: 24px;
  display: block;
  margin-bottom: 0.75rem;
}

.contact-card__label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #d17b9a;
  margin: 0 0 0.5rem;
}

.contact-card__link {
  font-size: 15px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s;
  word-break: break-all;
}

.contact-card__link:hover {
  color: #d17b9a;
}

.contact-card__text {
  font-size: 15px;
  color: #333;
  margin: 0 0 0.4rem;
  font-weight: 500;
}

.contact-card__availability {
  font-size: 13px;
  color: #888;
  margin: 0;
  font-style: italic;
}

.contact-social-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 8px;
  transition: background 0.15s, color 0.15s;
}

.contact-social-link:hover {
  background: #fbeaf0;
  color: #d17b9a;
}

.contact-social-link__icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .contact-page {
    padding: 2rem 1rem 4rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>