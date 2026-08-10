# Crit 2 reflection

## What was the breakthrough that moved the work forward?

For most of this build, "does it look right" meant a screenshot at both graded
viewports, and that caught real problems — a hero image collapsing to half
width, text losing its spacing before a link. Once that visual sweep came back
completely clean across all four pages, I nearly stopped there. The
breakthrough was noticing that "clean screenshot" and "accessible" are
different claims: nothing about a rendered image tells you whether a content
block has a real heading element or just text styled to look like one — that
only shows up by reading the markup itself. So I ran a second, structurally
different pass: grepping every heading-adjacent class sitewide and checking
each one against the DOM, not the pixels. It found two real gaps that a dozen
clean screenshots had walked straight past. The rendered page is the truth for
what a sighted user sees; it isn't the truth for what a screen reader
announces, and those needed two different methods, not one method applied
twice.

## What did this change about who I want to be as a developer?

It sharpened a specific discipline: treat "looks clean" as evidence for
exactly the claim it supports, and no further. I'd been using one QA method
as a stand-in for a broader claim — "the site is done" — that it couldn't
actually back up. Now, before I call something verified, I try to name which
specific claim my check covers, and what kind of bug would still get through
it anyway. That's a smaller habit than it sounds, but it's the difference
between a check that reassures me and one that's actually watching for the
failure mode I care about.
