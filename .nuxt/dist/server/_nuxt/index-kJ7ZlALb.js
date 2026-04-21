import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { toRef, isRef, computed, ref, unref, useSSRContext, mergeProps } from "vue";
import { d as useNuxtApp } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const translations = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      blog: "Blog",
      skills: "Skills",
      contact: "Contato",
      toggle: "EN"
    },
    hero: {
      badge: "Desenvolvedora de Software",
      title: "Olá, eu sou a Letícia Lopes.",
      text: "Mestranda em TI pelo IFPB com expertise em Sistemas Distribuídos, Cloud Computing (AWS) e Arquitetura de Microsserviços. Desenvolvedora Full Stack especializada em Python, TDD e Clean Code.",
      primary: "Ver meus projetos",
      secondary: "Sobre mim"
    },
    about: {
      title: "Sobre mim",
      presentation: "Sou Letícia Lopes Lima, desenvolvedora de software com foco em Sistemas Distribuídos e infraestrutura escalável. Mestranda em TI pelo IFPB, tenho sólida experiência no ecossistema Python e integração com serviços de nuvem (AWS). Especialista em garantir a confiabilidade de sistemas através de Testes Automatizados (TDD), Clean Code e Arquitetura de Microsserviços. Entusiasta de tecnologias Cloud Native e automação de infraestrutura.",
      cards: [
        { label: "Formação", value: "Mestrado em TI (IFPB) - Sistemas Distribuídos" },
        { label: "Especialidade", value: "Backend & Cloud Computing" },
        { label: "Experiência", value: "Python, AWS, Microsserviços, Docker" },
        { label: "Foco", value: "Sistemas escaláveis e confiáveis" }
      ],
      download: "Download CV",
      contact: "Entrar em contato"
    },
    projects: {
      title: "Experiência Profissional",
      items: [
        {
          title: "Estagiária de Software (Full Stack)",
          description: "Laboratório Assert IFPB (2025-Presente) | APIs Python (FastAPI/Flask) com Vue.js, Arquitetura de Microsserviços, Code Review e processos ágeis.",
          link: "https://github.com/leticiazlopes",
          stack: "Python · FastAPI · Vue.js · Microsserviços"
        },
        {
          title: "Estagiária em Machine Learning",
          description: "Compass UOL (Mai 2024 - Out 2024) | Arquiteturas Serverless (AWS Lambda, S3), Integração IA Generativa (Bedrock), Monitoramento em produção.",
          link: "https://github.com/leticiazlopes",
          stack: "AWS · Python · Serverless · IA"
        },
        {
          title: "Desenvolvedora de Software",
          description: "Unisigma - Empresa Júnior (2025-Presente) | Modelagem de requisitos, sistemas escaláveis e seguros.",
          link: "https://github.com/leticiazlopes",
          stack: "Python · Design de Sistemas"
        }
      ],
      button: "Ver no GitHub"
    },
    skills: {
      title: "Tecnologias que uso",
      categories: [
        {
          name: "Back-end",
          items: ["Python", "Django", "FastAPI", "PostgreSQL", "SQL", "Microsserviços"]
        },
        {
          name: "Cloud & DevOps",
          items: ["AWS (Lambda, S3, EC2)", "Docker", "Kubernetes (Conceitos)", "CI/CD", "Git/GitHub"]
        },
        {
          name: "Engenharia",
          items: ["TDD (Pytest)", "Clean Code", "SOLID", "Design Patterns", "Observabilidade"]
        },
        {
          name: "Front-end",
          items: ["Vue.js", "JavaScript", "React", "HTML/CSS"]
        }
      ]
    },
    blog: {
      title: "Blog",
      subtitle: "Artigos e reflexões sobre desenvolvimento, carreira e inovação.",
      posts: [
        {
          title: "Como construir uma interface moderna com Vue",
          summary: "Dicas para criar interfaces responsivas, acessíveis e com boa performance usando Vue.js.",
          date: "20 de abril de 2026"
        },
        {
          title: "A importância de um portfólio profissional",
          summary: "Estratégias para destacar projetos e experiências em seu portfólio pessoal.",
          date: "15 de abril de 2026"
        },
        {
          title: "Mulheres na tecnologia: passos iniciais",
          summary: "Como começar e prosperar na carreira de tecnologia sendo mulher.",
          date: "10 de abril de 2026"
        }
      ]
    },
    footer: {
      contactText: "Desenvolvido com Nuxt 3 e Vue.js | Letícia Lopes Lima",
      email: "Enviar e-mail"
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      blog: "Blog",
      skills: "Skills",
      contact: "Contact",
      toggle: "PT"
    },
    hero: {
      badge: "Software Developer",
      title: "Hi, I'm Letícia Lopes.",
      text: "Master's student in IT (IFPB) | Distributed Systems & Cloud Infrastructure | Python & AWS enthusiast",
      primary: "View projects",
      secondary: "About me"
    },
    about: {
      title: "About me",
      presentation: "I am Letícia Lopes Lima, a software developer focused on Distributed Systems and scalable infrastructure. Master's student in IT at IFPB with solid experience in the Python ecosystem and cloud service integration (AWS). Expert in ensuring system reliability through Automated Testing (TDD), Clean Code and Microservices Architecture. Enthusiast of Cloud Native technologies and infrastructure automation.",
      cards: [
        { label: "Education", value: "Master's in IT (IFPB) - Distributed Systems" },
        { label: "Expertise", value: "Backend & Cloud Computing" },
        { label: "Experience", value: "Python, AWS, Microservices, Docker" },
        { label: "Focus", value: "Scalable and reliable systems" }
      ],
      download: "Download CV",
      contact: "Get in touch"
    },
    projects: {
      title: "Professional Experience",
      items: [
        {
          title: "Software Developer Intern (Full Stack)",
          description: "Assert Lab IFPB (2025-Present) | Python APIs (FastAPI/Flask) with Vue.js, Microservices Architecture, Code Review and agile processes.",
          link: "https://github.com/leticiazlopes",
          stack: "Python · FastAPI · Vue.js · Microservices"
        },
        {
          title: "Machine Learning Intern",
          description: "Compass UOL (May 2024 - Oct 2024) | Serverless Architectures (AWS Lambda, S3), Generative AI Integration (Bedrock), Production Monitoring.",
          link: "https://github.com/leticiazlopes",
          stack: "AWS · Python · Serverless · AI"
        },
        {
          title: "Software Developer",
          description: "Unisigma - Junior Company (2025-Present) | Requirements modeling, scalable and secure systems.",
          link: "https://github.com/leticiazlopes",
          stack: "Python · Systems Design"
        }
      ],
      button: "View on GitHub"
    },
    skills: {
      title: "Technologies I use",
      categories: [
        {
          name: "Back-end",
          items: ["Python", "Django", "FastAPI", "PostgreSQL", "SQL", "Microservices"]
        },
        {
          name: "Cloud & DevOps",
          items: ["AWS (Lambda, S3, EC2)", "Docker", "Kubernetes (Concepts)", "CI/CD", "Git/GitHub"]
        },
        {
          name: "Engineering",
          items: ["TDD (Pytest)", "Clean Code", "SOLID", "Design Patterns", "Observability"]
        },
        {
          name: "Front-end",
          items: ["Vue.js", "JavaScript", "React", "HTML/CSS"]
        }
      ]
    },
    blog: {
      title: "Blog",
      subtitle: "Articles and insights about development, career, and innovation.",
      posts: [
        {
          title: "How to build a modern UI with Vue",
          summary: "Tips for creating responsive, accessible, and performant interfaces using Vue.js.",
          date: "April 20, 2026"
        },
        {
          title: "The importance of a professional portfolio",
          summary: "Strategies to highlight your projects and experience in your personal portfolio.",
          date: "April 15, 2026"
        },
        {
          title: "Women in tech: first steps",
          summary: "How to start and thrive in a technology career as a woman.",
          date: "April 10, 2026"
        }
      ]
    },
    footer: {
      contactText: "Built with Nuxt 3 and Vue.js | Letícia Lopes Lima",
      email: "Send email"
    }
  }
};
const useLanguage = () => {
  const language = useState("language", () => "en");
  const toggleLanguage = () => {
    language.value = language.value === "pt" ? "en" : "pt";
  };
  const t = computed(() => translations[language.value]);
  return { language, toggleLanguage, t };
};
const _sfc_main$8 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)}><nav class="navbar"><div class="navbar__brand"><a href="#home">devLeticia</a><span class="navbar__tag">Portfolio</span></div><button class="navbar__toggle" type="button"${ssrRenderAttr("aria-expanded", isOpen.value)} aria-label="Toggle navigation"><span class="navbar__burger"></span></button><ul class="${ssrRenderClass(["navbar__list", { "navbar__list--open": isOpen.value }])}" style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}"><li class="navbar__item"><a href="#about">${ssrInterpolate(unref(t).nav.about)}</a></li><li class="navbar__item"><a href="#projects">${ssrInterpolate(unref(t).nav.projects)}</a></li><li class="navbar__item"><a href="#blog">${ssrInterpolate(unref(t).nav.blog)}</a></li><li class="navbar__item"><a href="#skills">${ssrInterpolate(unref(t).nav.skills)}</a></li><li class="navbar__item"><a href="#contact">${ssrInterpolate(unref(t).nav.contact)}</a></li></ul><button class="button button--secondary navbar__lang" type="button">${ssrInterpolate(unref(t).nav.toggle)}</button></nav></header>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const profileImage$1 = "/profile.jpeg";
const _sfc_main$7 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero",
        id: "home"
      }, _attrs))}><div class="hero__content"><span class="hero__badge">${ssrInterpolate(unref(t).hero.badge)}</span><h1 class="hero__title">${ssrInterpolate(unref(t).hero.title)}</h1><p class="hero__text">${ssrInterpolate(unref(t).hero.text)}</p><div class="hero__actions"><a class="button button--primary" href="#projects">${ssrInterpolate(unref(t).hero.primary)}</a><a class="button button--secondary" href="#about">${ssrInterpolate(unref(t).hero.secondary)}</a></div></div><div class="hero__image"><img${ssrRenderAttr("src", profileImage$1)} alt="Foto de Letícia Lopes"></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "SectionTitle",
  __ssrInlineRender: true,
  props: {
    meta: { type: String, default: "Section" },
    title: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-title" }, _attrs))}><span class="section-title__meta">${ssrInterpolate(__props.meta)}</span><h2 class="section-title__heading">${ssrInterpolate(__props.title)}</h2></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionTitle.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const profileImage = "/profile.jpeg";
const _sfc_main$5 = {
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, language } = useLanguage();
    const resumePdf = computed(() => language.value === "pt" ? "/pt.pdf" : "/en.pdf");
    const socials = [
      { label: "Email", link: "mailto:leticiazlzlima@gmail.com", icon: "/icons/gmail.svg" },
      { label: "GitHub", link: "https://github.com/leticiazlopes", icon: "/icons/github-circle-svgrepo-com.svg" },
      { label: "LinkedIn", link: "https://www.linkedin.com/in/leticiazlopes", icon: "/icons/linkedin.svg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section",
        id: "about"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        meta: unref(t).about.title,
        title: unref(t).about.presentation
      }, null, _parent));
      _push(`<div class="about"><div class="about__content"><div class="about__card"><h3>${ssrInterpolate(unref(t).about.title)}</h3><p>${ssrInterpolate(unref(t).about.presentation)}</p><div class="about__grid"><!--[-->`);
      ssrRenderList(unref(t).about.cards, (card) => {
        _push(`<div class="about__item"><strong>${ssrInterpolate(card.label)}</strong><span>${ssrInterpolate(card.value)}</span></div>`);
      });
      _push(`<!--]--></div><div class="social-links"><!--[-->`);
      ssrRenderList(socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.link)} target="_blank" rel="noreferrer"${ssrRenderAttr("aria-label", social.label)}><img${ssrRenderAttr("src", social.icon)}${ssrRenderAttr("alt", social.label)}></a>`);
      });
      _push(`<!--]--></div><div class="hero__actions"><a class="button button--primary"${ssrRenderAttr("href", resumePdf.value)} download>${ssrInterpolate(unref(t).about.download)}</a><a class="button button--secondary" href="mailto:leticiazlzlima@gmail.com">${ssrInterpolate(unref(t).about.contact)}</a></div></div></div><div class="about__image-card"><img${ssrRenderAttr("src", profileImage)} alt="Foto de Letícia Lopes"></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section",
        id: "projects"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        meta: unref(t).projects.title,
        title: unref(t).projects.title
      }, null, _parent));
      _push(`<div class="cards"><!--[-->`);
      ssrRenderList(unref(t).projects.items, (project) => {
        _push(`<article class="card"><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)}><div class="card__content"><span class="card__tag">${ssrInterpolate(project.stack)}</span><h3 class="card__title">${ssrInterpolate(project.title)}</h3><p class="card__description">${ssrInterpolate(project.description)}</p><div class="card__footer"><a class="card__button"${ssrRenderAttr("href", project.link)} target="_blank" rel="noreferrer">${ssrInterpolate(unref(t).projects.button)}</a></div></div></article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "BlogSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section blog-section",
        id: "blog"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        meta: unref(t).blog.title,
        title: unref(t).blog.subtitle
      }, null, _parent));
      _push(`<div class="cards"><!--[-->`);
      ssrRenderList(unref(t).blog.posts, (post) => {
        _push(`<article class="card card--blog"><div class="card__content"><span class="card__tag">${ssrInterpolate(post.date)}</span><h3 class="card__title">${ssrInterpolate(post.title)}</h3><p class="card__description">${ssrInterpolate(post.summary)}</p></div></article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "SkillsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    const skills = [
      { name: "HTML5", icon: "/skills/HTML5.svg" },
      { name: "CSS3", icon: "/skills/CSS3.svg" },
      { name: "JavaScript", icon: "/skills/JavaScript.svg" },
      { name: "Vue.js", icon: "/skills/React.svg" },
      { name: "TypeScript", icon: "/skills/TypeScript.svg" },
      { name: "Git", icon: "/skills/Git.png" },
      { name: "Python", icon: "/skills/Python.svg" },
      { name: "PHP", icon: "/skills/PHP.svg" },
      { name: "AWS", icon: "/skills/AWS.svg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section",
        id: "skills"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        meta: unref(t).skills.title,
        title: unref(t).skills.title
      }, null, _parent));
      _push(`<div class="skill-grid"><!--[-->`);
      ssrRenderList(skills, (skill) => {
        _push(`<article class="skill-card"><img${ssrRenderAttr("src", skill.icon)}${ssrRenderAttr("alt", skill.name)}><span>${ssrInterpolate(skill.name)}</span></article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "FooterSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "footer",
        id: "contact"
      }, _attrs))}><p>${ssrInterpolate(unref(t).footer.contactText)}</p><p><a href="mailto:leticiazlzlima@gmail.com">leticiazlzlima@gmail.com</a></p></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-kJ7ZlALb.js.map
