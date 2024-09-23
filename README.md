# Make 50 Things

![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=50things)

The inspiration behind this website is a talk from blinry that went over his blog
post, [Fifty Things you can do with a Software Defined Radio 📻](https://blinry.org/50-things-with-sdr/).
He was inspired by [Vi Hart's Fifty Fizzbuzzes](https://github.com/vihart/fiftyfizzbuzzes/blob/master/Fifty%20Fizzbuzzes.ipynb).

Simon Willison wrote a blog post earlier this year that helps frame this website.
[Give people something to link to so they can talk about your features and ideas](https://simonwillison.net/2024/Jul/13/give-people-something-to-link-to/). I couldn't agree more.

This is my first attempt at making a one-off website.

[Temporary Website Link](https://50things-nine.vercel.app/).

## Inspirations

- [The Lindy Library](https://www.thelindylibrary.org/)
- [Choose Boring Technology](https://boringtechnology.club/)
- [The Twelve-Factor App](https://12factor.net/)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── images/
│   ├── layouts/
│   ├── lib/
│   │   └── utils.ts
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name. Astro also collects content from `src/content` directory, configured by `config.ts`. To add a new content collection, go inside of there.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components. This is currently backed by `shadcn-ui`, which is React-based, but can easily be swapped out by `shadcn-vue`, `shadcn-svelte`, or any other shadcn variant for other frameworks. Please change `components.json` accordingly if you are switching. Also, `src/lib/utils.ts` is for merging tailwind classes, if necessary (which in these projects won't matter).

We have `src/layouts` which covers the BaseHead and any page layouts.

Any static assets, other than images, can be placed in the `public/` directory. Images use `astro:assets` which automatically encodes images to web compliant formats, like `.webp`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment

We've chosen to deploy to Vercel.

Here's our badge: ![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=50things) (same as the top).