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
      toggle: 'EN',
      cv: 'CV',
      ct: 'Contato'
    },
    hero: {
      badge: 'Desenvolvedora de Software',
      title: 'Olá, eu sou Letícia Lopes.',
      text: 'Desenvolvedora Full Stack com foco em interfaces dinâmicas e APIs escaláveis. Apaixonada por código limpo, testes e colaboração — pós-graduanda em Sistemas Distribuídos pelo IFPB.',
      primary: 'Ver projetos',
      secondary: 'Sobre mim'
    },
    about: {
      title: 'Sobre mim',
      presentation: 'Desenvolvedora de software com experiência em projetos que integram interfaces dinâmicas e APIs escaláveis. Minha trajetória equilibra a entrega de soluções práticas no mercado com o aprofundamento em fundamentos de computação. Valorizo código limpo, testes e a partilha de conhecimento — acreditando que evoluímos mais juntos.',
      cards: [
        { label: 'Formação', value: 'IFPB — Sistemas para Internet + Pós-grad. Sistemas Distribuídos' },
        { label: 'Especialidade', value: 'Full Stack · APIs Python · Front-end Vue.js' },
        { label: 'Ferramentas', value: 'Python, Flask, FastAPI, Vue.js, AWS, Docker' },
        { label: 'Objetivo', value: 'Resolver problemas complexos e contribuir para sistemas eficientes' }
      ],
      download: 'Download CV',
      preview: 'Ver CV',
      contact: 'Entrar em contato'
    },
    cv: {
      title: 'Visualize antes de baixar',
      description: 'Veja o currículo completo em PDF antes de fazer o download.',
      download: 'Baixar CV',
      back: 'Voltar'
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
      title: 'Tecnologias',
      groups: [
        {
          category: 'Linguagens',
          items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'SQL', 'PHP']
        },
        {
          category: 'Frameworks & Bibliotecas',
          items: ['Flask', 'FastAPI', 'Vue.js', 'Nuxt.js', 'React', 'Tailwind CSS', 'Spring Boot']
        },
        {
          category: 'Cloud & DevOps',
          items: ['AWS Lambda', 'AWS S3', 'AWS Bedrock', 'Docker', 'Git', 'CI/CD', 'Linux']
        },
        {
          category: 'Conceitos',
          items: ['Sistemas Distribuídos', 'Microsserviços', 'Clean Code', 'SOLID', 'Testes Unitários']
        }
      ]
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
    },
    contact: {
      badge: 'Entre em contato',
      title: 'Vamos conversar?',
      subtitle: 'Estou aberta a oportunidades, colaborações e trocas sobre tecnologia.',
      emailLabel: 'E-mail',
      locationLabel: 'Localização',
      location: 'João Pessoa, PB — Brasil',
      availability: 'Disponível para oportunidades remotas',
      socialLabel: 'Redes sociais',
}
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      skills: 'Skills',
      contact: 'Contact',
      toggle: 'PT',
      cv: 'CV',
      ct: 'Contact'
    },
    hero: {
      badge: 'Software Developer',
      title: "Hi, I'm Letícia Lopes.",
      text: 'Full Stack developer focused on dynamic interfaces and scalable APIs. Passionate about clean code, testing, and collaboration — graduate student in Distributed Systems at IFPB.',
      primary: 'View projects',
      secondary: 'About me'
    },
    about: {
      title: 'About me',
      presentation: 'Software developer with experience in projects that blend dynamic interfaces and scalable APIs. My journey balances delivering practical solutions in the market with deepening my understanding of computing fundamentals. I value clean code, testing, and knowledge sharing — believing we grow more together.',
      cards: [
        { label: 'Education', value: 'IFPB — Internet Systems + Grad. Distributed Systems' },
        { label: 'Expertise', value: 'Full Stack · Python APIs · Vue.js Front-end' },
        { label: 'Tools', value: 'Python, Flask, FastAPI, Vue.js, AWS, Docker' },
        { label: 'Goal', value: 'Solve complex problems and contribute to efficient systems' }
      ],
      download: 'Download CV',
      preview: 'View CV',
      contact: 'Get in touch'
    },
    cv: {
      title: 'Preview before download',
      description: 'See the full resume in PDF before downloading.',
      download: 'Download CV',
      back: 'Back'
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
      title: 'Technologies',
      groups: [
        {
          category: 'Languages',
          items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'SQL', 'PHP']
        },
        {
          category: 'Frameworks & Libraries',
          items: ['Flask', 'FastAPI', 'Vue.js', 'Nuxt.js', 'React', 'Tailwind CSS', 'Spring Boot']
        },
        {
          category: 'Cloud & DevOps',
          items: ['AWS Lambda', 'AWS S3', 'AWS Bedrock', 'Docker', 'Git', 'CI/CD', 'Linux']
        },
        {
          category: 'Concepts',
          items: ['Distributed Systems', 'Microservices', 'Clean Code', 'SOLID', 'Unit Testing']
        }
      ]
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
    },
    contact: {
      badge: 'Get in touch',
      title: "Let's talk?",
      subtitle: 'Open to opportunities, collaborations, and conversations about tech.',
      emailLabel: 'Email',
      locationLabel: 'Location',
      location: 'João Pessoa, PB — Brazil',
      availability: 'Available for remote opportunities',
      socialLabel: 'Social links',
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