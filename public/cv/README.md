Place your CV PDF files here if you want a dedicated folder structure for resumes.

Files expected:
- en.pdf  (English CV)
- pt.pdf  (CV em português)

Notes:
- The site currently serves `/en.pdf` and `/pt.pdf` from `public/` by default.
- If you move the files into `public/cv/`, update `composables/useLanguage.ts` and `pages/cv.vue` to point to `/cv/en.pdf` and `/cv/pt.pdf`.
