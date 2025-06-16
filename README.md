# heynaveeen.space

Personal site of **Naveen Kharwar** — developer, writer, and digital thinker.  
Built with performance, clarity, and minimalism in mind.

## Tech Stack

- [Astro](https://astro.build/) (with strict TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- Markdown content with schema validation
- Dynamic sitemap & `robots.txt`
- Simple, clean structure powered by content collections

## Project Structure (Partial)

```

.
├── public/               # Static assets (favicon, images, PDFs)
├── src/
│   ├── assets/           # Site assets (images, texture)
│   ├── components/       # UI components
│   │   └── content/      # Content-specific components like PostList
│   ├── content/          # Markdown content (articles, writings)
│   ├── data/             # JSON data (projects, experience)
│   ├── layouts/          # Page layouts (BaseLayout, PostLayout)
│   ├── pages/            # Routes (index, writings, articles)
│   ├── scripts/utils/    # Utility scripts (truncate, stripMarkdown, etc.)
│   └── styles/           # Global styles (Tailwind)
├── astro.config.ts
├── tsconfig.json
├── tailwind.config.mjs
├── package.json
└── README.md

````

## Features

- SEO meta with fallback OG image
- Custom cursor logic with hover effects
- Articles + creative writing in separate collections
- Clean tag system & `contentType` support
- Fully static, no client JS unless needed

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Check types + build for production
npm run preview  # Preview the build
````

## Content

* `src/content/articles/` → technical & reflective articles
* `src/content/writings/` → stories, poems, personal pieces
* Both collections are validated via `content.config.ts`

## Used Packages

* [`astro`](https://www.npmjs.com/package/astro)
* [`@astrojs/sitemap`](https://www.npmjs.com/package/@astrojs/sitemap)
* [`@astrojs/check`](https://www.npmjs.com/package/@astrojs/check)
* [`astro-icon`](https://www.npmjs.com/package/astro-icon)
* [`@iconify-json/simple-icons`](https://www.npmjs.com/package/@iconify-json/simple-icons)
* [`tailwindcss`](https://www.npmjs.com/package/tailwindcss)
* [`@tailwindcss/vite`](https://www.npmjs.com/package/@tailwindcss/vite)
* [`typescript`](https://www.npmjs.com/package/typescript)

## License

([MIT](https://github.com/NaveenKharwar/heynaveeen.space/blob/main/LICENSE)) — feel free to fork, remix, or reuse anything here.
But build something meaningful with it ✨
