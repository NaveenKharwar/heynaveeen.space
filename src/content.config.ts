import { defineCollection, z } from "astro:content";

const imageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
});

const writings = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    contentType: z.enum(["poem", "story", "essay"]).optional(),
    tags: z.array(z.string()).default([]),
    image: imageSchema.optional(),
  }),
});

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    image: imageSchema.optional(),
  }),
});

export const collections = {
  writings,
  articles,
};
