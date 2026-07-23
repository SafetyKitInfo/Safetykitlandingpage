# SafetySight Mobile UX/UI Audit

Date: 24 July 2026

## Audit scope

Combined UX, visual-design, and screenshot-based accessibility review of the SafetySight landing page at 390 × 844 and 320 × 700. The main user goal assessed was understanding the product and joining the waitlist or requesting a demo.

## Overall verdict

The visual language is credible and consistent, and the page reflows without horizontal overflow. The mobile experience is weakened by excessive page length, repeated conversion actions, a persistent bottom bar that obscures content, and a navigation menu that occupies most of the viewport. At 320 px wide, the page measured roughly 25,097 px tall.

## Flow steps

1. **Hero and first impression — Needs improvement**
   - Clear category, audience, and product value.
   - Strong visual hierarchy and full-width primary action.
   - The fixed bottom CTA overlaps the second hero action and remains present before the user has scrolled.
   - Header, hero, and bottom bar offer competing actions: Book demo, Join Waitlist, Start Pilot, Demo, and See product.
   - The 36 × 36 px menu control and 36 px-high header CTA are below the commonly recommended 44 × 44 px mobile target.

2. **Mobile navigation — Needs improvement**
   - Menu labels are simple and easy to scan.
   - The open panel takes approximately half the viewport while the header and bottom CTA remain visible, leaving little room for page context.
   - “Book demo” is duplicated in the header and menu.
   - The menu should behave as a true overlay or drawer, close after selection, lock background scroll, and use one clear conversion action.

3. **Product explanation — Mixed**
   - Cards stack cleanly and body text remains readable.
   - The flow contains many consecutive product, benefit, metric, risk, inventory, and audience sections. On a phone this becomes a very long, repetitive scroll.
   - Important product proof is diluted because multiple modules communicate similar benefits.
   - The sticky header and bottom bar reduce the usable reading area throughout.

4. **Waitlist and conversion — Needs improvement**
   - The section heading and trust copy are clear.
   - There is a large visual gap before the waitlist section.
   - The page switches among “Book a demo,” “Start 30-day Pilot,” and “Join the waitlist,” making the intended next step unclear.
   - The bottom bar covers the lower part of the benefits card.
   - The actual conversion happens on an external Tally page, so the section should be shorter and lead directly to one action.

5. **Small-phone resilience — Mixed**
   - No horizontal overflow was detected at 320 px.
   - The headline remains legible and the content cards fit the viewport.
   - Header controls are cramped, content becomes extremely long, and the persistent bar consumes a large percentage of the viewport.

## Highest-impact changes

1. Choose one mobile conversion goal. Use “Join waitlist” while early access is open; make demo/pilot secondary or remove them from the mobile journey.
2. Remove the bottom sticky bar from the initial viewport. Reveal a single CTA only after the hero exits, hide it near the contact section, respect safe-area insets, and add page-bottom padding equal to its height.
3. Reduce the mobile page from roughly 25,000 px to about 8,000–12,000 px by merging repeated sections:
   - Hero
   - Trust/proof strip
   - Three-step product explanation
   - Three strongest outcomes
   - One dashboard/product proof section
   - Security/reassurance
   - Final waitlist CTA
4. Simplify the mobile header to logo + 44 px menu button. Put the primary CTA inside the drawer or keep a single compact header CTA, not both.
5. Use an accessible full-height drawer or sheet with a backdrop, body-scroll lock, 48 px rows, Escape support, focus management, and automatic close after navigation.
6. Tighten mobile section spacing from frequent `py-20` blocks to `py-12` or `py-14`, while keeping 24–32 px between a heading and its supporting content.
7. Consolidate product claims and reduce card density. Prefer one strong proof point per viewport rather than several cards with similar messages.

## Accessibility risks

- Some primary mobile targets are 36 px high/wide and may be difficult to activate.
- The persistent CTA can obscure content and focus targets, especially with browser chrome or a software keyboard.
- Screenshot evidence cannot confirm focus trapping, focus return, Escape behavior, screen-reader announcements, or color-contrast ratios.
- Motion-reduction styles are present in the source, which is a strength, but runtime keyboard and assistive-technology testing is still required.

## Evidence

- `01-hero.png` — 390 px hero
- `02-menu-open.png` — open mobile menu
- `03-how-it-works.png` — product explanation while navigation consumes the viewport
- `04-contact.png` — waitlist section and persistent CTA overlap
- `05-hero-320.png` — 320 px small-phone view

