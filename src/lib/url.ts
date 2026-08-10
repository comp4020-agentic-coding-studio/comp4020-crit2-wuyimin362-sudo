// Astro's BASE_URL always has a leading and trailing slash (e.g. "/repo/",
// or "/" with no base configured) — see astro.config.mjs for why this repo
// needs one. Every internal link should go through this so a page still
// resolves once deployed under the GitHub Pages subpath.
const BASE = import.meta.env.BASE_URL;

export function href(path: string = ""): string {
  return `${BASE}${path.replace(/^\//, "")}`;
}
