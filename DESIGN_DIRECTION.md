# Design direction — "Quiet Craft"

## The concept

IORI's real story, from the audit, isn't "authentic Japan" as marketing
copy — every restaurant claims that. It's **quiet, unglamorous consistency**:
the same room has been earning an "I Love Food Awards" win six years running,
a Canberra Times Top 20 place three years running, and a Sydney Morning
Herald Good Food Guide listing five years running, in a CBD side street, with
a booking process that's still just a text message. It runs a sushi bar
*and* kaiseki-style degustation courses (Miyabi, Shizuka) under one roof —
casual and formal, same kitchen. Nothing about that story is loud, and the
design shouldn't be either.

**Quiet Craft** means: the site should read like the restaurant behaves —
precise, unhurried, confident enough not to oversell itself. Concretely,
that rules out anything that argues "trust us, we're fancy" through
decoration (cherry blossoms, torii gates, brush calligraphy, red/black/gold)
and instead argues it through typographic precision, real specificity
(real dish names, real award names, a real address), and restraint.

## Why this fits IORI specifically, not just "a Japanese restaurant"

- The menu genuinely spans registers — kids meals and wagyu degustation,
  sushi bar and function-room hot pot — so the design can't commit to either
  "casual sushi joint" or "formal kaiseki house" styling. Restraint is the
  only mode that honestly covers both.
- The real photography is thin (five usable images, mostly 2013–2014, one
  from 2020) — a photography-led design (the brief's initial instinct) would
  either exhaust its material in one scroll or force stretching low-res
  images past where they hold up. A typography- and whitespace-led design
  doesn't have that ceiling, and still lets the few good real photos (the
  Nikon-shot degustation spread) land as considered moments rather than being
  diluted among filler.
- The existing web "logo" is two small red dots on a 250×150px file — no
  developed mark to protect there. But the real mark exists elsewhere: IORI's
  own shopfront signage in the East Row arcade carries the kanji **庵**
  ("iori"), traditionally meaning a small hermitage or thatched hut — never
  used anywhere on the site itself. That's a genuine piece of brand identity
  this redesign can surface for the first time, and it directly supports
  "Quiet Craft" as a description of what the name itself already means, not
  just a design team's adjective. It also gives the single red accent a real
  referent instead of an invented one: a hanko seal is traditionally a single
  red character, so the kanji can serve as that mark, used exactly as
  sparingly as a real seal would be.

## What this explicitly avoids, and why

Per the brief's list of stereotype traps — cherry blossoms, torii gates,
ukiyo-e backgrounds, brush-script type, red/black/gold templates, cheap
gradients, glassmorphism, heavy animation, generic SaaS landing-page rhythm,
bento-grid overuse, and the generic "AI-generated" look — the common failure
mode behind all of them is **decoration standing in for specificity**. The
antidote used throughout this direction is: when in doubt, replace a
decorative element with a real fact (a real dish name, a real award, the
real address) set in careful type. That's also just a more honest way to
represent a real, independent business.

## Typography

- **Display: [Fraunces](https://fonts.google.com/specimen/Fraunces)** (serif,
  variable weight/optical size). Used sparingly — the IORI wordmark, page
  titles, a handful of section headings. Fraunces has enough character to
  read as considered rather than corporate, without tipping into the
  faux-elegant "Playfair Display on every wedding/restaurant template" look —
  its slightly irregular, warm forms read as crafted rather than decorative,
  which is the distinction this whole direction rests on.
- **Body/UI: [Work Sans](https://fonts.google.com/specimen/Work+Sans)**
  (humanist sans). Carries navigation, body copy, menu items and prices.
  Chosen over the more common Inter specifically to avoid the "SaaS product"
  association the brief warns against — Work Sans is nearly as neutral and
  legible but reads slightly warmer. Tabular figures for prices so a menu
  column of numbers aligns cleanly.
- No decorative or "Japanese-feeling" display font. The Japanese sensibility
  comes from spacing and composition, not a themed typeface — a legibility
  requirement the brief states directly and a real accessibility concern for
  a menu with prices.
- Scale: five steps (display, h1/h2, body, small/caption, nav-label) — enough
  for real hierarchy, few enough to stay restrained.

## Color

Grounded in washi paper and sumi ink rather than the red/black/gold template
default, with the one red accent inherited (deliberately, sparingly) from
the existing mark:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F7F4EE` | Page background — warm ivory, not stark white |
| `--surface` | `#EFE9DE` | Section/card backgrounds, subtle separation |
| `--ink` | `#1C1A17` | Primary text — warm near-black, not pure `#000` |
| `--ink-soft` | `#6B6459` | Secondary text, captions, metadata |
| `--border` | `#DCD3C4` | Hairlines, dividers |
| `--accent` | `#A6362A` | One color, used rarely: a small mark, a link's active state, the "Reserve" action. Never a background fill, never paired with black or gold. |

Five colors total, one of them a near-white and one a near-black. No
gradients.

## Layout philosophy

No section repeats the "centered heading → three cards → button" pattern.
Instead, an editorial rhythm: alternating text/image weighting, asymmetric
crops, and deliberately uneven section density (a dense menu-preview section
can sit next to a spare, mostly-whitespace atmosphere section). Text
measure capped around 65ch for anything longer than a caption. Images are
cropped and placed as compositional elements, not dropped into uniform card
frames.

## Content hierarchy / homepage structure

1. **Hero** — the real degustation-spread photograph (the Nikon D80 shot),
   cropped wide and confident, with the IORI wordmark set in Fraunces and a
   single line of real positioning: kaiseki and sushi bar dining, Canberra
   CBD. No stacked buttons, no marketing copy.
2. **Recognition** — the three real awards, set as a quiet typographic line
   or small row, not badge/sticker graphics or a testimonial carousel. This
   moves IORI's strongest real asset from two clicks deep to the first
   screen.
3. **Introduction** — two or three sentences, real facts only: sushi bar,
   tables, and a private function room under one roof; made fresh to order.
   No invented history or chef biography — see the open question below about
   how far to use the one real name we have.
4. **Signature course** — the degustation photography treated large and
   asymmetric, captioned with a real course name (e.g. the Miyabi kaiseki
   course), not a generic "our food" caption.
5. **Menu preview** — a handful of real categories and representative dishes
   with real prices, then a clear link to the full menu. Not the whole
   price list.
6. **Atmosphere** — the sushi-bar seating photo if it holds up at the size
   needed; otherwise this section leans on describing the three real seating
   modes (sushi bar / tables / function room) rather than stretching a weak
   image.
7. **Visit** — address, hours, phone/SMS booking instructions, and a map
   link, unified in one scannable block — directly answering the audit's
   top finding that this information is currently split three ways.

## Mobile strategy

Single column throughout; hero image crop shifts focal point rather than
just scaling down; navigation collapses to a simple menu, not a hidden
mega-menu; the menu listing stays a plain vertical list at every width (no
horizontal scroll, no accordions, per the brief); touch targets sized for
thumbs; a minimal sticky header carries the wordmark and a call/reserve
link, since phone-in-hand is the realistic mobile use case for a restaurant
site.

## Decisions confirmed before implementation

1. **Using the real photos** — confirmed: use them. One correction found
   during asset review: `2014_Degustation_Cover.jpg`, despite its name, is a
   close-up portrait of an identifiable person's face, not food or room
   photography — it was mis-described in an earlier pass of
   `CURRENT_SITE_AUDIT.md`, now fixed. It's excluded from the shipped site;
   a stranger's close-up face is a different, more sensitive kind of reuse
   than food, room, or storefront photography, and nothing about the design
   needs it. The three used instead: sake service at the bar
   (`Degustation_Sake.jpg`), a real sashimi arrangement (`Sushi_01.jpg`), and
   the storefront/signage photo in the East Row arcade that surfaced the
   kanji mark above.
2. **Naming "Mamoru Aizawa"** — confirmed: use it minimally, attributed
   exactly as the original reservation-page sign-off does, with no invented
   title or role.
