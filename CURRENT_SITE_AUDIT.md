# Current site audit — iori.com.au

Audited as a first-time visitor deciding whether to eat at IORI tonight. Every
finding below is something actually observed on the live site (fetched
2026-08-10), not a guess — see citations to the exact page/asset where useful.

## What works

- **The menu is genuinely rich once you reach it.** Real degustation courses
  (Miyabi $94, Shizuka $81, Sukiyaki $94, Shabu Shabu $94), a vegetarian
  Sho-Jin course ($55), a kids menu, wagyu options, and an extensive
  sushi/sashimi list. There's a real occasion-fit range here — celebration
  dinner, casual sushi, vegetarian, family — the content just doesn't say so
  anywhere before you're several clicks deep in `/menu/dinner-menu/`.
- **Real, specific social proof exists.** Three concrete, checkable claims:
  *I Love Food Awards* state winner for Favourite Japanese Restaurant (6 years
  running), *Canberra Times* Top 20 Restaurants (3 years running), *Sydney
  Morning Herald Good Food Guide* listing (5 years running). This is the
  strongest asset on the whole site and it's parked at `/about-iori/awards/` —
  two clicks deep, never referenced on the homepage or contact page.
  - **A central, real address**: 41 East Row, Canberra City — walkable CBD
  location, a genuine advantage that's currently just one line of text.
- **The booking channel is actually low-friction, once found.** Text a phone
  number with name/date/time/party size — no account, no third-party platform,
  no fee. The mechanism is good; its visibility isn't.
- **Some genuinely decent food photography exists.** The degustation spread
  shot (`Degustation_Sake.jpg`, `2014_Degustation_Cover.jpg`) is a real DSLR
  photo (Nikon D80) of an actual plated spread — evidence the food photographs
  well. It's used as a tiny rotating banner thumbnail, not as a hero.
- **A real human touch, buried:** the reservation page signs off "Arigatou
  Gozaimasu! — IORI Staff and Mamoru Aizawa" — the only named person anywhere
  on the site, and it's on a booking-instructions page nobody reads for warmth.

## What's broken or actively working against the restaurant

- **The homepage's main call-to-action is a dead link.** Both the "IORI Fine
  Japanese Dining" title banner and the "Award Winning Meals" banner link to
  `/menus/`, which returns a 404. The single highest-intent click on the page
  — "show me the menu" — leads nowhere. (The real menu lives at
  `/menu/dinner-menu/`, a different path.)
- **Hours and location are split across three pages, and hours are hard to
  parse even once found.** The Contact page has address, phone, fax, and
  email — but no hours and no map. Hours only appear on the Reservation page,
  formatted as overlapping, partially-truncated seating windows ("5:45-7:30pm
  / 6:00-7:45pm", "7:45-pm –", "from8:00pm-"), Sunday isn't stated at all, and
  a "subject to change without notice" disclaimer sits right next to them.
- **No map link or embed anywhere on the site**, despite a full street address
  being available.
- **Booking has no visible entry point beyond body copy.** The SMS format
  (name / date / time / guests / contact number) is only explained in
  paragraph text on the Reservation page — no tap-to-prefill link, no visible
  phone number treated as a primary action elsewhere on the site.
- **The photography that exists is thin, and the "Gallery" undersells the
  restaurant.** Site-wide there are effectively five usable photos (four on
  the homepage banner, dated 2013, 2014, and 2020; three more on
  `/gallery/`), one of which is a JETAA Canberra social-club end-of-year party
  — not the restaurant's own food or room — standing in as a gallery highlight.
- **The logo is a 250×150px raster** (`logo.png`) — already near its display
  ceiling; it can't be enlarged for a hero or feature treatment without
  visible pixelation. Visually it reads as two small red dots, not a
  developed wordmark — there isn't an existing mark worth preserving as-is.
- **No distinct visual identity.** The site runs a generic WordPress theme
  ("linguini," by a template vendor) in stock Open Sans / Open Sans Condensed.
  Nothing about the typography or layout is specific to IORI.
- **The drinks/sake list has no prices**, while the food menu does — so the
  homepage banner promoting "new sake now available" can't actually be
  evaluated for cost before you'd have to ask staff.
- **Same-topic information is scattered**: hours (Reservation), address
  (Contact), booking method (Reservation), awards (About → Awards). A visitor
  answering "should I go, and how" has to cross four separate pages.

## The customer's actual tasks, in order

1. Work out, in seconds, what kind of Japanese restaurant this is (casual?
   degustation fine dining? both?) and whether it fits tonight's plan.
2. See real dishes and prices to judge fit for occasion and budget.
3. Find the address, and whether they're open right now or tonight.
4. Work out how to book.
5. Feel reassured this is a real, well-regarded, currently-operating
   restaurant — not a stale template site quietly running on autopilot.

## Where the current site blocks each task

| Task | What blocks it today |
|---|---|
| 1. Understand what this is | Homepage banners cycle marketing lines ("Award Winning Meals," "New sake now available") without ever plainly stating what the restaurant *is* — degustation + à la carte + sushi bar, in Canberra's CBD |
| 2. See dishes/prices | The one homepage link to the menu (`/menus/`) 404s; the real menu is reachable only via top nav, unlabelled as such on the homepage |
| 3. Find address/hours | Hours aren't on the Contact page at all; no map anywhere |
| 4. Book | Booking method is explained only in paragraph text on a page most visitors won't open first |
| 5. Trust it's real and good | Awards are two clicks deep; gallery is thin, dated, and partly irrelevant (a private event photo, not the restaurant) |

## Priority order for the redesign

1. **Homepage hero + immediate orientation** — state clearly, in one visual
   moment, what IORI is and why it's worth going, without a broken link in
   the way.
2. **A single, unified "Visit" section** — address, hours, phone/SMS booking,
   and a map link together, replacing the current three-way split.
3. **Surface the awards near the top of the homepage** — the strongest,
   most concrete asset on the site is currently the least visible.
4. **Menu presentation** — keep the real range (degustation, wagyu, Sho-Jin
   vegetarian course, kids menu, sushi bar) but organise it for scanning in
   under a minute, not as one long undifferentiated list.
5. **A deliberate, honest photography strategy** — the real photo library is
   small (effectively five usable images, three from 2013–2014, one from
   2020). Use what's real and decent well, rather than either stretching
   low-resolution shots to hero size or padding the site with unrelated stock
   imagery.
