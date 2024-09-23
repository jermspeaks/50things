# Astro Content Template

To get quickly started, use this command:

```sh
npm create astro@latest -- --template jermspeaks/astro-content-template
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/jermspeaks/astro-content-template/tree/main)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/jermspeaks/astro-content-template/tree/main)
<!-- [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json) -->

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

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

## Todo

- [x] Add `shadcn/ui` components
- [ ] Update Github configuration for no `main` branch pushes
- [ ] Add the `devcontainer.json` config for GitHub Codespaces
- [ ] Get content collections started using markdown notes
