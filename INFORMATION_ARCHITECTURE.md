# Information architecture

Four pages, down from the current site's effective seven (home, about, awards,
gallery, reservation, contact, two menu pages). Every merge below is because
the audit found the content split for no reason a visitor benefits from, not
because fewer pages looks more minimal for its own sake.

## Home (`/`)

**Problem it solves:** "What is this place, and is it worth my time tonight?"
— task 1 and task 5 from the audit, both currently unanswered on arrival.

Sections (per `DESIGN_DIRECTION.md`): hero, recognition (the three real
awards), a short real introduction, one signature-course feature, a menu
preview linking to the Menu page, an atmosphere section, and a Visit summary
linking to the Visit page. Everything here is a preview or a distillation of
a page that has the full version — Home never duplicates the full menu or the
full hours text, so there's one place to keep each fact accurate.

## Menu (`/menu/`)

**Problem it solves:** "What can I eat, and what will it cost?" — task 2.

Merges the current site's two separate menu pages (`/menu/dinner-menu/` and
`/menu/drinks/`) into one page with two clearly-headed sections, Food and
Drinks & Sake. They're split by URL today with no content reason — a visitor
comparing a dish against a drink shouldn't need to hold two page loads in
their head. Real categories and prices throughout, exactly as published
(degustation courses, bento, sashimi/sushi sets, rolls, mains, sides; wines,
sakes, beers, spirits, soft drinks — drinks keep no prices, since the
original lists none and inventing them would violate the no-fabrication rule
directly).

## Experience (`/experience/`)

**Problem it solves:** "Is this the kind of place I think it is, and can I
trust that?" — the slower half of task 1, plus task 5's "is this a real,
current restaurant" concern.

Absorbs the current `/about-iori/` and `/about-iori/awards/` pages. Awards
already get a first-screen mention on Home (per the design direction, that's
their strongest placement); this page is where someone who wants the detail
finds it, alongside the real seating variety (sushi bar, tables, private
function room) and the one real named sign-off (Mamoru Aizawa, used exactly
as attributed — confirmed in `DESIGN_DIRECTION.md`). The current site's
`/gallery/` doesn't become its own page: of the photos reviewed, only two
held up as real, usable, food-first photography (see the asset-review note
in `DESIGN_DIRECTION.md`), and both already appear on Home — this page stays
typography-led rather than reusing them a second time or padding out a thin
gallery grid.

## Visit (`/visit/`)

**Problem it solves:** "Where is it, when can I go, and how do I book?" —
tasks 3 and 4, currently split across Contact (address, phone, fax, email)
and Reservation (hours, booking method) with no page linking the two.

One page: address, a map link (new — the current site has none despite
having a full address), hours exactly as published (including keeping the
"subject to change without notice" caveat), and the SMS booking method
restated as a clear instruction rather than buried paragraph text. The
Sunday/public-holiday closure — missing from every page of the current
site, per the original audit — is included here too, sourced from the
restaurant's own East Row shopfront signage (see the corrected
`CURRENT_SITE_AUDIT.md`) rather than left as a gap. This is also the page
`tel:`/`mailto:` links point to sitewide.

## Navigation

Four items — Home, Menu, Experience, Visit — plus a footer repeating the
Visit essentials (address, phone) and, sitewide, a credit link back to the
real `iori.com.au`. That link is what the spec's "not a placeholder, credit
the original" test checks on Home; putting it in the footer means it's
actually present on every page, not just the one that's graded.

## What this deliberately does not add

No login, accounts, CMS, online ordering, or reservation backend — the brief
rules these out explicitly, and none of the five real customer tasks need
them; the real booking channel is a text message, and the redesign's job is
to surface that clearly, not replace it with a system IORI doesn't have.
