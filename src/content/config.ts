import { z, defineCollection } from "astro:content";

const copy = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  copy,
};
