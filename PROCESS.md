# Process overview

## What I built

An unsolicited redesign of [iori.com.au](https://iori.com.au/), a real Japanese
restaurant on East Row in Canberra: a four-page static site (Home, Menu,
Experience, Visit) built in Astro with plain CSS custom properties, aimed at
editorial Japanese minimalism instead of the cherry-blossom/torii/red-and-gold
template look most restaurant sites default to. Every fact on it — the awards,
the hours, the menu, the one named sign-off — is real and traceable back to the
actual site or its listings; nothing about the restaurant is invented.

## The moments that mattered

1. **Deciding how far to use the one real human touch on the whole site.** The
   audit of the live site turned up exactly one named person anywhere on it —
   "Arigatou Gozaimasu! — IORI Staff and Mamoru Aizawa," buried in the sign-off
   of a booking-instructions page nobody reads for warmth
   ([`242f963`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-wuyimin362-sudo/commit/242f963)).
   The obvious moves were either to drop it as too obscure to matter, or to
   build it up into a "meet the owner" story — the second one is exactly the
   kind of invented brand history the brief rules out. Instead I flagged it as
   an open question before building anything, and the design direction
   confirmed using it minimally, "attributed exactly as the original
   reservation-page sign-off does, with no invented title or role"
   ([`d5c7692`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-wuyimin362-sudo/commit/d5c7692)).
   It shipped on the Experience page exactly that way
   ([`44b15b2`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-wuyimin362-sudo/commit/44b15b2)).
   During final self-review I re-checked the shipped text against that original
   decision specifically to make sure nothing had drifted toward invented
   detail over the build — it hadn't.

2. **A hero image quietly collapsing to half width, traced to its actual cause
   instead of patched around.** Screenshotting the homepage at the graded
   desktop viewport showed the hero photo filling only about 45% of its row.
   The quick fix would have been a magic-number width on that one element; I
   traced it instead to a general interaction — `aspect-ratio` and `max-height`
   on the same box let the browser size it from the height down when nothing
   else constrains its width — confirmed by re-screenshotting before and after
   an explicit `width: 100%`
   ([`f29ed89`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-wuyimin362-sudo/commit/f29ed89)).
   Because it's a general CSS trap and not something specific to this one
   image, I wrote the rule into `CLAUDE.md` alongside two other Astro-specific
   traps hit the same week, rather than letting the knowledge live only in this
   one fix
   ([`2b5ad70`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-wuyimin362-sudo/commit/2b5ad70)).

3. **A visual QA pass that looked clean still hid two real accessibility gaps
   — found by switching from "does it look right" to a systematic sweep, and
   landed as honest, single-concern commits.** All eight screenshots
   (four pages × two graded viewports) came back with no overflow and nothing
   visually wrong. But the brief also asks for logical heading structure, which
   a screenshot can't show — so I grepped every `.section-label` usage sitewide
   and checked each one against whether it was paired with a real heading
   element. Two weren't: `ContactInfo`'s Address/Hours/Bookings and the
   homepage's Recognition section were bare `<span>`s with no heading at all, a
   gap a screen-reader user navigating by heading would hit but a sighted
   screenshot review never would. A third suspected instance, on the Experience
   page, looked the same from an ambiguous grep match — instead of fixing it on
   that assumption, I read the full file and confirmed those actually were real
   `<h2>` elements the grep just couldn't display three times from one
   `.map()`-generated source line, and left it alone. By the time I'd made
   these fixes plus an unrelated one (the same booking note rendering twice on
   the Visit page, caught by reading `visit-mobile.png` closely), the working
   tree had several unrelated concerns landed in the same file diffs. Rather
   than one large "polish" commit, I wrote a small script to split the real
   `git diff` output by its hunk markers and stage only the hunks belonging
   together — after starting to hand-type a patch file and recognizing that
   transcribing unified-diff context by hand (blank context lines need a
   literal leading space, not true emptiness) risked a silent mismatch.
   `git apply --cached --check` validated every patch before it touched the
   index, and `git diff --cached` before each commit confirmed exactly the
   intended change and nothing else
   ([`53f2f38...949438a`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-wuyimin362-sudo/compare/53f2f38...949438a)).
