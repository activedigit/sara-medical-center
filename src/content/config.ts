import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string().max(220),
      publishDate: z.date(),
      updatedDate: z.date().optional(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      cover: z.string().optional(),
      author: z.string().default('Sarah Medical Center'),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      lang: z.enum(['ar', 'he', 'en']),
      translationKey: z.string(),
    }),
});

const doctorsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      order: z.number().default(99),
      featured: z.boolean().default(false),
      photo: z.string().optional(),
      portrait: image().optional(),
      portraitAlt: z.string().optional(),
      name: z.object({ ar: z.string(), he: z.string(), en: z.string() }),
      specialty: z.object({ ar: z.string(), he: z.string(), en: z.string() }),
      shortBio: z.object({ ar: z.string(), he: z.string(), en: z.string() }),
      longBio: z.object({ ar: z.string(), he: z.string(), en: z.string() }),
      credentials: z.array(z.string()).default([]),
      languages: z.array(z.string()).default(['ar', 'he', 'en']),
      services: z.array(z.string()).default([]),
      schedule: z.object({ ar: z.string(), he: z.string(), en: z.string() }).optional(),
    }),
});

const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    order: z.number().default(99),
    photo: z.string().optional(),
    photoAlt: z.string().optional(),
    name: z.object({ ar: z.string(), he: z.string(), en: z.string() }),
    role: z.object({ ar: z.string(), he: z.string(), en: z.string() }),
  }),
});

const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    icon: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    title: z.object({ ar: z.string(), he: z.string(), en: z.string() }),
    shortDescription: z.object({ ar: z.string(), he: z.string(), en: z.string() }),
    longDescription: z.object({ ar: z.string(), he: z.string(), en: z.string() }),
    hours: z.object({ ar: z.string(), he: z.string(), en: z.string() }).optional(),
    features: z
      .array(
        z.object({
          ar: z.string(),
          he: z.string(),
          en: z.string(),
        })
      )
      .default([]),
    relatedDoctors: z.array(z.string()).default([]),
    free: z.boolean().default(false),
  }),
});

export const collections = {
  news: newsCollection,
  doctors: doctorsCollection,
  team: teamCollection,
  services: servicesCollection,
};
