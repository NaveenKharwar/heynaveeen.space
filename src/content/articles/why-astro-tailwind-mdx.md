---
title: Why I Built My Site with Astro, Tailwind, and MDX (And Skipped the Hype)
description: A technical and personal reflection on the design choices behind heynaveeen.space — and why I didn’t follow the trend.
publishDate: 2025-06-07
cover: /images/blog/dev-astro.png
tags: [Astro, Web Development, Minimalism, Personal Site]
---

# Why I Built My Site with Astro, Tailwind, and MDX (And Skipped the Hype)

> “Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.” — Antoine de Saint-Exupéry

This quote guided me as I sat down to build [heynaveeen.space](https://heynaveeen.space). I didn’t want animations for the sake of animations. I didn’t want a React app doing what plain HTML could do. I wanted a fast, minimal, and focused site — one that reflects my personality and serves my writing.

So, I chose **Astro**, **TailwindCSS**, and **MDX**.

Let me explain why.

---

## Why Astro?

Astro is built for content-heavy sites. It lets me write in `.mdx`, build components in any framework (React, Vue, etc.), and output static HTML by default.

That last part is key. Most pages on my site — especially the `/writings` section — don’t need client-side interactivity. Astro strips out the JS and ships pure HTML/CSS. That makes it:

- **Super fast**
- **SEO-friendly**
- **Simple to maintain**

And when I do need interactivity? I can selectively hydrate components using Astro Islands.

---

## Why TailwindCSS?

Tailwind makes styling declarative, predictable, and consistent. I’m not fighting with class names or scoping issues. I use the same mental model across components.

Here’s what Tailwind gives me:

- **Design consistency** with utility classes
- **Responsive layouts** without custom media queries
- **Small CSS bundles** (thanks to Astro’s integration and PurgeCSS)

It helps me focus on content, not CSS architecture.

---

## Why MDX?

My writing — especially philosophical pieces or stories — needs occasional custom components: callouts, quotes, maybe footnotes. MDX lets me mix Markdown with components naturally.

It’s also how I separate layout logic from content. My `/articles` and `/writings` are powered by filesystem-based MDX files with frontmatter — clean, readable, and portable.

---

## Why Not React/Next.js or WordPress?

React is great — for apps. But for a static site that’s 90% text? It’s overkill. I didn’t need routers, state management, or hydration on every page.

Next.js was tempting, but Astro is even more tailored for content-focused sites.

As for WordPress — I’ve used it, and I respect it. But for a minimalist developer who writes in Markdown and likes git versioning, it’s just not a good fit.

---

## Site Structure That Works for Me

I’ve structured `heynaveeen.space` around my identity:

### 1. `/writings`
This is the core of my site.

Here I publish:
- **Hindi short stories**
- **Poetry**
- **Philosophical reflections**

It’s intentionally minimal — so the words stand out. I use custom MDX layouts with optional tags like `contentType` to highlight whether it’s a *ghazal*, *kavita*, or *nibandh*.

### 2. `/articles`
This section hosts:
- Technical blogs
- Essays on tools and dev practices

Each post shows tags, summaries, and a CTA like “Read full article →”. It's structured for skim-readers and engineers alike.

### 3. Component-Based Structure with JSON-Configurable Styling

* The site is built entirely from modular components — hero section, about, experiences, projects, and more.
* This approach makes development and maintenance straightforward and scalable.
* Project cards and other elements use JSON-configurable color blocks for easy styling customization without code changes.
* This setup provides flexibility while maintaining design consistency.

---


And everything sits on a clean, fast, accessible layout.

---

## How It’s Benefiting Me

- **Fast publishing:** I write in Markdown, commit, push — and the site’s live.
- **No CMS friction:** No dashboards, no plugins — just version-controlled content.
- **Focused UX:** Readers aren’t distracted. They get my stories and thoughts, front and center.
- **Customizability:** Want to add a new section? Just create a new folder and layout. Astro makes it modular.

---

## Final Thoughts

I built heynaveeen.space not to follow trends, but to create a space that reflects how I think and write — with clarity, calm, and intention.

Astro, Tailwind, and MDX gave me the tools to do that — without distractions or unnecessary complexity.

If you also value simplicity, speed, and writing-first design, this stack might just be the right fit for you too.
