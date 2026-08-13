# wenhaohe.com

My personal site — [wenhaohe.com](https://wenhaohe.com)

Selected work, experience, and writing on one editorial page, plus a terminal
easter egg at [/terminal](https://wenhaohe.com/terminal).

Built with Next.js 15 (App Router), React 18, and TypeScript, statically
exported and served from GitHub Pages.

## How it's built

**No CSS framework.** One hand-written `globals.css` built on custom
properties — `--paper`, `--ink`, `--rule`, `--accent`. Light and dark are the
same token set redefined once, so a theme change is a palette swap rather than a
second set of styles.

**Content is data, not JSX.** Everything the page says lives in `src/data/` as
typed TypeScript, so updating a project or a figure is a data edit that the
compiler checks. Components only decide how it looks.

**Themes don't flash.** An inline script in the document head resolves the theme
from `localStorage`, falling back to `prefers-color-scheme`, and stamps it on
`<html>` before first paint. The toggle cycles light → dark → system, and while
it's on system it tracks the OS live.

**The latest post is fetched at build time.** A prebuild step reads my blog's
API and writes the newest post into the bundle, so the Writing section stays
current without the page making a request at runtime.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into out/
```

## Layout

```
src/
  app/         # routes, global styles, the pre-paint theme script
  components/  # section components
  data/        # all site copy and figures
  hooks/       # theme, scroll reveal, active section, clipboard
  types/       # shapes for everything in data/
public/        # images, résumé, papers — copied into the export as-is
assets/        # source images kept in the repo but out of the build
```

## Reference

ASCII art sources for the `/terminal` page:

- [Text to ASCII Generator](https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20)
- [ASCII Art](https://www.bootschool.net/ascii-art/computers)
