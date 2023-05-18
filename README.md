# KQM:HSR Site

## Routing (aka what's up with src/pages)
*.astro, *.md, *.mdx in src/pages will just lead to the specified page (static routing). I.e. `~/src/pages/about.astro` becomes `hsr.keqingmains.com/about`

Astro has a system for dynamic routing. Here' s Astro's documentation about it is [here](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes).

Important note:


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


