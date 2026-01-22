import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    website: z.string().url(),
    technologies: z.array(z.string()),
    order: z.number(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    hideHeroImage: z.boolean().default(false),
    link: z.string().url(),
    github: z.string().url().optional(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
    videoUrl: z.string().url().optional(),
  }),
});

const recommendations = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string(),
    linkedin: z.string().url(),
    order: z.number(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    hideHeroImage: z.boolean().default(false),
    videoUrl: z.string().url().optional(),
  }),
});

export const collections = { experience, projects, recommendations, posts };
