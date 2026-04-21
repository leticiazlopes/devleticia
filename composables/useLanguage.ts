import { computed } from 'vue'

declare function useState<T>(key: string, init: () => T): import('vue').Ref<T>

export type LanguageCode = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      blog: 'Blog',
      skills: 'Skills',
      contact: 'Contato',
      toggle: 'EN'
    },
    hero: {
      badge: 'Desenvolvedora de Software',
      title: 'Olá, eu sou Letícia Lopes.',
      text: 'Desenvolvedora Full Stack com foco em Sistemas Distribuídos, APIs Python e infraestrutura em nuvem. Mestranda em TI pelo IFPB.',
      primary: 'Ver projetos',
      secondary: 'Sobre mim'
    },
    about: {
      title: 'Sobre mim',
      presentation: 'Letícia Lopes Lima, desenvolvedora de software com experiência em back-end Python, arquitetura de microsserviços e AWS. Mestranda em TI pelo IFPB, com atuação em projetos de pesquisa, empresa júnior e estágios na indústria.',
      cards: [
        { label: 'Formação', value: 'IFPB — Sistemas para Internet + Mestrado em TI' },
        { label: 'Especialidade', value: 'Back-end · Sistemas Distribuídos · Cloud' },
        { label: 'Ferramentas', value: 'Python, FastAPI, Vue, AWS, Docker' },
        { label: 'Objetivo', value: 'Construir sistemas confiáveis e escaláveis' }
      ],
      download: 'Download CV',
      contact: 'Entrar em contato'
    },
    projects: {
      title: 'Projetos em destaque',
      items: [
        {
          title: "Let's Brownie",
          description: 'Landing page para loja de doces desenvolvida com React.',
          link: 'https://github.com/leticiazlopes/letsbrownie-ls',
          stack: 'JavaScript · React'
        },
        {
          title: 'PlannerCamp',
          description: 'Sistema de gerenciamento de eventos com modelagem e consultas em SQL.',
          link: 'https://github.com/leticiazlopes/plannerCampSQL',
          stack: 'SQL · Modelagem de Dados'
        },
        {
          title: 'Nutrif',
          description: 'Aplicação de comunicação via sockets para consultório nutricional.',
          link: 'https://github.com/leticiazlopes/projeto-socket-api',
          stack: 'Python · Sockets'
        }
      ],
      button: 'Ver no GitHub'
    },
    skills: {
      title: 'Tecnologias'
    },
    blog: {
      title: 'Blog',
      subtitle: 'Reflexões sobre engenharia de software, sistemas distribuídos e carreira em TI.',
      posts: [
        {
          title: 'Interfaces modernas com Vue.js',
          summary: 'Boas práticas para criar UIs responsivas, acessíveis e performáticas com Vue.',
          date: '20 de abril de 2026'
        },
        {
          title: 'Como estruturar um portfólio eficiente',
          summary: 'O que priorizar ao apresentar projetos e trajetória profissional.',
          date: '15 de abril de 2026'
        },
        {
          title: 'Mulheres na tecnologia: por onde começar',
          summary: 'Caminhos práticos para iniciar e crescer na área de TI.',
          date: '10 de abril de 2026'
        }
      ]
    },
    footer: {
      contactText: 'Desenvolvido com Nuxt 3 e Vue.js · Letícia Lopes Lima',
      email: 'Enviar e-mail'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      skills: 'Skills',
      contact: 'Contact',
      toggle: 'PT'
    },
    hero: {
      badge: 'Software Developer',
      title: "Hi, I'm Letícia Lopes.",
      text: 'Full Stack developer focused on Distributed Systems, Python APIs, and cloud infrastructure. Graduate student in IT at IFPB.',
      primary: 'View projects',
      secondary: 'About me'
    },
    about: {
      title: 'About me',
      presentation: 'Letícia Lopes Lima, software developer with experience in Python back-end, microservices architecture, and AWS. Graduate student in IT at IFPB, with work across research, a junior company, and industry internships.',
      cards: [
        { label: 'Education', value: 'IFPB — Internet Systems + M.Sc. in IT' },
        { label: 'Expertise', value: 'Back-end · Distributed Systems · Cloud' },
        { label: 'Tools', value: 'Python, FastAPI, Vue, AWS, Docker' },
        { label: 'Goal', value: 'Build reliable and scalable systems' }
      ],
      download: 'Download CV',
      contact: 'Get in touch'
    },
    projects: {
      title: 'Featured projects',
      items: [
        {
          title: "Let's Brownie",
          description: 'Landing page for a dessert shop built with React.',
          link: 'https://github.com/leticiazlopes/letsbrownie-ls',
          stack: 'JavaScript · React'
        },
        {
          title: 'PlannerCamp',
          description: 'Event management system with SQL modeling and queries.',
          link: 'https://github.com/leticiazlopes/plannerCampSQL',
          stack: 'SQL · Data Modeling'
        },
        {
          title: 'Nutrif',
          description: 'Socket-based communication app for a nutrition clinic.',
          link: 'https://github.com/leticiazlopes/projeto-socket-api',
          stack: 'Python · Sockets'
        }
      ],
      button: 'View on GitHub'
    },
    skills: {
      title: 'Technologies'
    },
    blog: {
      title: 'Blog',
      subtitle: 'Insights on software engineering, distributed systems, and tech careers.',
      posts: [
        {
          title: 'Modern interfaces with Vue.js',
          summary: 'Best practices for building responsive, accessible, and performant UIs with Vue.',
          date: 'April 20, 2026'
        },
        {
          title: 'How to build an effective portfolio',
          summary: 'What to prioritize when presenting your projects and professional journey.',
          date: 'April 15, 2026'
        },
        {
          title: 'Women in tech: where to start',
          summary: 'Practical steps to enter and grow in the technology field.',
          date: 'April 10, 2026'
        }
      ]
    },
    footer: {
      contactText: 'Built with Nuxt 3 and Vue.js · Letícia Lopes Lima',
      email: 'Send email'
    }
  }
}

export const useLanguage = () => {
  const language = useState<LanguageCode>('language', () => 'en')
  const toggleLanguage = () => {
    language.value = language.value === 'pt' ? 'en' : 'pt'
  }
  const t = computed(() => translations[language.value] as (typeof translations)['en'])
  return { language, toggleLanguage, t }
}