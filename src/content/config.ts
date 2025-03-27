import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});

const tripsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    realCost: z.number(),
    discountedCost: z.number(),
    rating: z.number(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});

export const collections = {
  posts: postsCollection,
  trips: tripsCollection
};
