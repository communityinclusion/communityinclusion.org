# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Gatsby v5 static site for the Institute for Community Inclusion (ICI) at UMass Boston, deployed to Netlify. Content is a mix of local Markdown and remote Airtable data.

## Commands

Yarn 4 is the package manager (`packageManager: yarn@4.1.0`); Node 22 (`.nvmrc`, also pinned in `netlify.toml`).

- `yarn develop` (or `yarn start`) — local dev server (`gatsby develop`)
- `yarn build` — production build to `public/`
- `yarn serve` — serve a built site
- `yarn clean` — wipe `.cache` and `public` (run this when GraphQL schema, plugins, or sourced content behave oddly)
- `yarn format` — Prettier across `**/*.{js,jsx,ts,tsx,json,md,css}`

There is no test suite — `yarn test` intentionally exits 1.

## Environment

`gatsby-config.js` loads `.env.${NODE_ENV}` via `dotenv`. Required vars (see `.env.development` / `.env.production`):

- `GATSBY_AIRTABLE_APIKEY` — Airtable PAT for the Staff base (`appJQcdnZUpt9xJgo`, table `Staff`). Without it, `gatsby-source-airtable` fails and no staff pages are generated.
- `GATSBY_ALGOLIA_APP_ID`, `GATSBY_ALGOLIA_SEARCH_KEY`, `ALGOLIA_ADMIN_KEY` — used by search components.
- `SENTRY_AUTH_TOKEN` — only needed if `webpack.config.js` Sentry plugin is wired into the build.

## Architecture

### Page generation (the load-bearing file: `gatsby-node.js`)

Pages come from two sources, both routed through `onCreateNode` → `createPages`:

1. **Markdown** sourced from `src/pages/**` via `gatsby-source-filesystem` (three instances: `pages`, `images`, `posts` pointing at `src/pages/news`). The `posttype` frontmatter field selects the template:
   - `posttype: "news"` → `src/templates/postTemplate.js`
   - `posttype: "jobs"` → `src/templates/jobsTemplate.js`
   - anything else → `src/templates/pageTemplate.js`
   Slugs come from `frontmatter.path` if present, otherwise `createFilePath` with `basePath = "news"` for posts and `"pages"` for everything else.

2. **Airtable Staff** records → `src/templates/staffTemplate.js` at `/about/staff-directory/<name-slugified>/`. `staff_bio` and `staff_ed` are exposed as `markdownBio` / `markdownEd` node fields so they can render through remark.

Listing/pagination pages are also created in `gatsby-node.js`:
- `/news` and `/news/N` (10 per page) → `postListTemplate`
- `/jobs` and `/jobs/N` (20 per page) → `jobsListTemplate`; the `currentDate` context is used by the template to filter expired jobs by `close_date`.
- `/tags/<kebab>/` for every unique tag across markdown → `tagTemplate`

There is also a generic `paginate()` helper inside `createPages` that runs for `news` and `jobs`. It overlaps with the dedicated news/jobs pagination blocks below it — touch with care; changing pagination in one place without the other will produce inconsistent listings.

When adding a new content type, you almost always need to: (a) add a template under `src/templates/`, (b) extend the `posttype` switch in `gatsby-node.js`, and (c) decide whether it needs its own pagination + tag pages.

### Runtime wiring

- `gatsby-browser.js` and `gatsby-ssr.js` both delegate `wrapRootElement` to `wrap-with-provider.js`, which wraps the tree in a Redux `Provider`. The store (`src/state/createStore.js`) is currently a placeholder counter — Redux is mounted but barely used, so before adding to it confirm with the maintainer whether new state belongs in Redux, component state, or context.
- `gatsby-browser.js` is also where global styles load: `src/styles/styles.scss`, Bootstrap JS + Popper, breadcrumb CSS, and the Prism solarized-light theme. Add global CSS imports here, not in individual components.

### Layout & components

`src/components/layout.js` is the standard wrapper (Header + Navbar + main + Footer). `home-layout.js` is a separate variant used by `src/pages/index.js`. Templates pick whichever fits — don't assume one universal layout.

UI stack is intentionally heterogeneous: Bootstrap 5 classes drive most of the page chrome, with MUI (`@mui/material`), styled-components, and Emotion all present for individual components. Match the conventions of the file you're editing rather than introducing a new styling approach.

Search uses two parallel implementations: `GoogleCustomSearchBox` / `GoogleCustomSearchResults` (Google CSE) and Algolia via the env keys above.

### Static assets and redirects

Files under `static/` are copied verbatim to the site root. `static/_redirects` is the Netlify redirects file — edit it there, not in `netlify.toml`.

## Content conventions

News and jobs posts are date-prefixed Markdown under `src/pages/news/` and `src/pages/jobs/` (e.g. `2024-01-16_press-release.md`). Frontmatter must include `title`, `date`, `path`, `tags`, `posttype`, and (for news) `thumbnail`; jobs additionally use `close_date` for expiry filtering. Image paths in frontmatter are resolved relative to the markdown file via `gatsby-remark-relative-images-v2`.

## Style / formatting

`.prettierrc`: `semi: false`, double quotes, 2-space tabs, `trailingComma: es5`, LF line endings. Run `yarn format` before committing changes that touch many files.
