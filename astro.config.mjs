import { defineConfig } from "astro/config";

// The deployed site lives at comp4020-agentic-coding-studio.github.io/<repo>/
// (a project page, not a user/org page), so every internal link and built
// asset URL needs this prefix or it 404s on the live URL while looking fine
// in `astro dev`. See src/lib/url.ts for how internal links pick this up.
export default defineConfig({
  base: "/comp4020-crit2-wuyimin362-sudo",
});
