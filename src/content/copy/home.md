---
title: Astro Content Template
---

Welcome to the Astro Content Template. [Astro](https://astro.build/) is a web framework for content-driven websites.
This is an opinionated template for a statically-generated content-based website.

### Stack Decisions

Astro is the central technology. We utilize its [content collections](https://docs.astro.build/en/guides/content-collections/) to build out the authored content as well as website copy collateral. The base package includes [TypeScript](https://www.typescriptlang.org/) for type check and safety, MDX for interactive pages, [Tailwind](https://tailwindcss.com/) for Styling using CSS utility classnames, and Astro sitemap for sitemap support.

The template includes SEO out-of-the-box, including using a canonical url, Open Graph tags, and Twitter tags. Although for the last one, we may opt-out of this soon.

We included [shadcn/ui](https://ui.shadcn.com/) with the `component.json` file to quickly build a component library. Although shadcn/ui is React-based, the configuration works for other variants of shadcn/ui, including [Vue](https://www.shadcn-vue.com/) and [Svelte](https://www.shadcn-svelte.com/). Included with that configuration is [lucide-react](https://lucide.dev/guide/packages/lucide-react) for icons, although that can be swapped for different variants of lucide depending on which component library you bring in.

### Deployment

We have tested deploying the application on the following hosts:

- Netlify
- Vercel
- Cloudflare Pages

### Get Started

Like any other Astro page, create a new project using the `--template` flag.

```bash
npm create astro@latest -- --template @jermspeaks/astro-content-template
```

### Roadmap

We may add more [indie web](https://indieweb.org/) support with `h-card`, `rel-me`, and [webmentions](https://indieweb.org/Webmention).

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et eros
quam. Donec sit amet ligula massa. Donec ut ante bibendum, ultrices
purus et, dictum massa. Proin varius eget urna vel tempor. Maecenas
mauris metus, condimentum nec augue at, suscipit cursus lectus. Interdum
et malesuada fames ac ante ipsum primis in faucibus. Fusce vel leo in
metus ultricies elementum et sit amet purus. In hac habitasse platea
dictumst. Phasellus massa justo, euismod vitae elit elementum, pretium
varius arcu. Aliquam et consequat nisi. Aenean convallis volutpat massa
id porttitor. Duis felis ex, sagittis gravida cursus et, posuere ut
turpis. Sed pretium, ante ut feugiat consectetur, ex turpis laoreet
orci, ut rutrum ex dolor vitae nisl. Praesent massa tortor, tempor eu
diam et, pretium malesuada lacus. Sed hendrerit sagittis erat, fermentum
cursus nulla tempus imperdiet.

Aliquam a metus elit. Morbi enim arcu, imperdiet vitae purus ac,
faucibus rhoncus ante. Sed vel dictum augue. Curabitur pretium hendrerit
ullamcorper. Praesent ullamcorper rhoncus eros eget feugiat. Maecenas
aliquet nulla eget lectus sagittis mattis. Curabitur tortor quam,
accumsan at urna quis, fringilla accumsan ligula. Maecenas a ipsum vitae
erat volutpat laoreet in auctor nisl. Nulla maximus ullamcorper ante, et
mattis dui hendrerit sit amet. Aliquam feugiat ipsum in nisi pulvinar
lobortis. Maecenas suscipit pretium arcu eu bibendum.
Curabitur aliquet nisl ut justo congue, quis maximus mauris egestas.
Pellentesque gravida magna sit amet feugiat luctus. Donec iaculis
eleifend dui, et blandit lacus semper in. Morbi vitae erat sed risus
dictum semper. Morbi sed nunc non arcu molestie porttitor. Pellentesque
ut lacus lacus. Phasellus dapibus imperdiet molestie. Donec tincidunt
leo eget nisl laoreet, quis pretium orci condimentum. Sed convallis
auctor sapien eu convallis. Pellentesque cursus risus ut velit imperdiet
congue.

Curabitur sit amet eros et risus imperdiet malesuada. Sed tempor a justo
a dictum. Aliquam elit est, consequat quis neque eu, tincidunt luctus
turpis. Donec et odio eget lorem gravida bibendum nec a urna. Ut
porttitor erat enim. Fusce tincidunt vehicula dictum. Proin ac porttitor
arcu, at condimentum nisl. Donec maximus consequat metus quis volutpat.
Aenean id metus at mi cursus elementum. Vestibulum egestas arcu vitae
consectetur tempor. Morbi in nulla in velit varius feugiat ac id felis.
Donec eu tellus lacinia, pulvinar lorem quis, ultricies diam.
Pellentesque ultricies risus non blandit egestas. -->
