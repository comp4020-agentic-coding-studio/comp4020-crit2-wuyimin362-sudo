import { readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

// This week's contract (C2, "Unsolicited redesign"): restructure a real
// organisation's own information, not template placeholder copy, and credit
// them with a link to their real site. The org isn't chosen yet, so these
// assert the *shape* the spec names explicitly — who they are, what they do,
// how to find them, a link to the original — without hardcoding on any one
// org. Once you've picked one, tighten these into assertions on its real
// content (its actual name, its actual address) rather than just structure.
const DIST = resolve("dist");

function htmlFiles(dir: string = DIST): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.name.endsWith(".html") ? [path] : [];
  });
}

const pages = htmlFiles().map((path) => ({
  name: relative(DIST, path),
  doc: new JSDOM(readFileSync(path, "utf8")).window.document,
}));

describe("redesign: real information, not a placeholder", () => {
  const home = pages.find(({ name }) => name === "index.html");

  it("gives a way to find them — an address, phone, email, or map link", () => {
    const doc = home!.doc;
    const found =
      doc.querySelector("address") !== null ||
      doc.querySelector('a[href^="tel:"]') !== null ||
      doc.querySelector('a[href^="mailto:"]') !== null ||
      [...doc.querySelectorAll("a[href]")].some((a) =>
        /maps\.|goo\.gl\/maps|openstreetmap/i.test(a.getAttribute("href") ?? ""),
      );
    expect(
      found,
      "expected an <address>, a tel:/mailto: link, or a map link on the home page",
    ).toBe(true);
  });

  it("separates who they are, what they do, and how to find them, not one dumped block", () => {
    const headings = home!.doc.querySelectorAll("h2, h3");
    expect(
      headings.length,
      "expected at least 3 sub-headings, one each for who/what/how-to-find-them",
    ).toBeGreaterThanOrEqual(3);
  });

  it("isn't still the template's placeholder copy", () => {
    const text = home!.doc.body.textContent ?? "";
    expect(
      text,
      "replace the starter's placeholder text with the organisation's real copy",
    ).not.toMatch(/lorem ipsum/i);
  });

  it("links out to the original organisation's real site", () => {
    const doc = home!.doc;
    const linksOut = [...doc.querySelectorAll("a[href]")].some((a) => {
      const href = a.getAttribute("href") ?? "";
      return /^https?:\/\//i.test(href) && !/\bgithub\.io\b/i.test(href);
    });
    expect(
      linksOut,
      "expected a link on the home page to the organisation's real (external) site",
    ).toBe(true);
  });
});
