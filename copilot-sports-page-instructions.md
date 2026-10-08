# Copilot Task: Update `sports.html` (603 In Focus)

## Context

603 In Focus is a one-photographer sports and senior photography business run by Rob Mulligan in Strafford, NH. The site is hand-built static HTML. `senior.html` was recently rewritten and is now the reference page for structure, voice and components. Bring `sports.html` up to the same standard.

**Before writing any code:**

1. Open `senior.html` and `mediaday.html` and note the existing section, card, package, FAQ and testimonial markup and CSS classes.
2. Reuse those exact patterns and classes. Do not add new CSS frameworks, libraries or inline styles. If a small new style is unavoidable, add it to the existing stylesheet next to similar rules.
3. Keep the page's existing gallery, filters, hero image and footer working exactly as they are.

## Voice rules

- Write in first person singular ("I", "my"), matching `senior.html`. Replace "we/our/us" in all body copy on `sports.html` with "I/my/me".
- Do not change the brand name "603 In Focus".
- Use the copy below exactly as written. Do not rephrase, embellish or add claims.

---

## Change 1: Rewrite existing copy to first person

Update these existing blocks on `sports.html`:

- **"WHERE ACTION MEETS EMOTION" paragraph:**
  > From tip-off to the final whistle, I capture the speed, skill, and story of New Hampshire athletics. Youth leagues, high school programs, and tournament weekends—delivered in sharp, share-ready galleries parents and teams actually use.
- **"COVERAGE ACROSS THE SPORTS YOU LOVE" paragraph:** change "we know where to stand" to "I know where to stand".
- **"MORE THAN THE PLAY ITSELF" paragraph:** change "We document" to "I document".
- **"HOW IT WORKS" intro and the four step cards:** change "we cover", "We position", "we capture", "we photograph" and "we stay" to "I cover", "I position", "I capture", "I photograph" and "I stay".
- **Final CTA paragraph:** change "We will follow up" to "I'll follow up".

---

## Change 2: Add local paragraph

Insert a new paragraph directly after the existing "COVERAGE ACROSS THE SPORTS YOU LOVE" paragraph, inside the same section and using the same paragraph styling:

> I'm based in Strafford, NH, and I spend most of my season on the sidelines at Coe-Brown Northwood Academy and in gyms and fields across Northwood, Barrington, Dover, Rochester and the Seacoast. I also travel for AAU and tournament weekends, like the NSSA championship I photographed this fall.

---

## Change 3: Add "What Your Game Day Coverage Includes" section

**Placement:** directly after the "GAME DAY HIGHLIGHTS" gallery section, before "COVERAGE ACROSS THE SPORTS YOU LOVE".

**Markup:** reuse the package card pattern from the "Senior Portrait Packages" section of `senior.html` (one card, centered). Give the section `id="coverage"`.

**Content:**

- **Section heading (H2):** What Your Game Day Coverage Includes
- **Card title:** Game Day Coverage
- **Price:** $299 per game (format as `$299`, with no space after the dollar sign)
- **List items:**
  - **Full-game coverage:** I'm there from warm-ups to the final whistle.
  - **Your athlete is the focus:** I follow your athlete through the whole game, not the team in general.
  - **About 30 professionally edited images:** action, reactions, celebrations and the moments between plays.
  - **Private online gallery in 1–2 weeks:** download your photos or order prints right from the gallery.
  - **Yours to share:** use them on Instagram, Facebook, recruiting profiles and family keepsakes.
  - **Recruiting-ready:** high-resolution action shots that work well in submissions to college coaches and scouts.
  - **Horizontal and vertical crops:** included whenever possible, so they work for posts and stories.
- **Button:** "Check Availability", linking to `contact.html`, using the primary button class from `senior.html`.

**Sub-block, inside the same section below the card:**

- **H3:** Team Up With Other Families
- **Paragraph:**
  > Want to split the cost? Up to three families can book one game together. I'll focus only on those three athletes for the full game, and each family gets access to a shared private gallery to download or order prints.

**Line below the sub-block, linking to Media Day and Packages:**

> Want a dramatic portrait session instead? [Athlete Spotlight sessions start at $199](mediaday.html). [See all packages →](packages.html)

**Also update the existing price line in the "WHERE ACTION MEETS EMOTION" section.** Change the link to point to the new on-page section:

> Game coverage is $299 per game. [See what's included →](#coverage)

---

## Change 4: Add "Sports Photography FAQ" section

**Placement:** after the testimonials section ("From sports families") and before the final "LET'S COVER YOUR NEXT GAME" CTA.

**Markup:** reuse the exact accordion/FAQ markup and classes from the "Senior Session FAQ" section in `senior.html`, including any JavaScript hooks it uses. Give the section `id="faq"`.

- **Section heading (H2):** Sports Photography FAQ

| Question | Answer |
|---|---|
| Am I booking photos of my child or the whole team? | Your athlete. Game Day Coverage follows the athlete or athletes you book, so you get far more of them than you would from general team coverage. Coaches and booster clubs looking for full-team or season coverage can contact me for a custom quote. |
| How many photos will I get? | About 30 professionally edited images per game, selected for the best action, emotion and moments. |
| When will my gallery be ready? | Within 1–2 weeks of the game. You'll get a private link to view, download and order prints. |
| Can I share the photos on social media? | Yes. Your photos are yours to share on Instagram, Facebook and recruiting profiles, and to print for family. |
| Can other families split the cost? | Yes. Up to three families can book the same game, and I'll focus on just those athletes. |
| Which sports do you cover? | Basketball, soccer, volleyball, baseball, softball, lacrosse and more: youth leagues, high school and AAU. If you don't see your sport, just ask. |

**Structured data:** add a `<script type="application/ld+json">` block of type `FAQPage` to the page `<head>`, containing these six questions and answers with text identical to the visible FAQ. If `senior.html` already has a FAQPage block, copy its structure.

---

## Change 5: Replace single blog link with "Stories From the Sidelines"

**Remove:** the existing line "From the field: Photographer Dad vs. Referee Dad…".

**Replace it with a new section** in the same location, reusing the blog card markup and classes from `blog/index.html` (image, category label, title, date).

- **Section heading (H2):** Stories From the Sidelines

**Card 1:**

- Link: `blog/faces-of-sports-high-school-sports-photography.html`
- Title: Faces of Sports: The Blooper Reel Nobody Usually Gets to See
- Subtitle: Expressions, humor and the moments between plays
- Date: October 7, 2026
- Image: use the same thumbnail and alt text that `blog/index.html` uses for this post

**Card 2:**

- Link: `blog/basketball-dad-photographer-championship-game.html`
- Title: Photographer Dad vs. Referee Dad
- Subtitle: Shooting my son's championship basketball game
- Date: September 27, 2026
- Image: use the same thumbnail and alt text that `blog/index.html` uses for this post

Cards must be top-aligned and equal height (use `align-items: stretch` or the existing grid class).

---

## Change 6: Fix testimonial names

In the "From sports families" testimonial block:

- Change the name "ptorey" to **Torey Portrie**, with the role label **Sports Parent**.
- Leave "A.Silva" as is for now (Rob will supply a full name later). Add an HTML comment above it: `<!-- TODO: replace with full name when available -->`

Match the testimonial name and role markup used in `senior.html` ("What Senior Families Say").

---

## Change 7: Sync social meta descriptions

In `<head>`, set both `og:description` and `twitter:description` to match the existing `meta name="description"` exactly:

> Professional sports photography across New Hampshire—basketball, soccer, volleyball, and more. Game-day action, emotion, and team coverage.

Also add `<meta property="og:locale" content="en_US">` if it is missing.

---

## Do not change

- The hero image, H1, and "VIEW SAMPLE WORK" button
- The gallery images, filters (All / Rec Soccer / High School Soccer / High School Basketball / High School Volleyball) and lightbox
- Navigation and footer
- Page title, canonical URL and the existing meta description

## Acceptance checklist

- [ ] No "we", "our" or "us" left in `sports.html` body copy (brand name excepted)
- [ ] New sections appear in this order: Gallery → Coverage Includes (+ Team Up) → Coverage Across Sports (+ local paragraph) → More Than the Play → How It Works → Testimonials → FAQ → Stories From the Sidelines → Final CTA
- [ ] `#coverage` and `#faq` anchors work
- [ ] FAQ accordion opens and closes, and matches `senior.html` styling
- [ ] FAQPage JSON-LD validates in Google's Rich Results Test, and its text matches the visible FAQ word for word
- [ ] Both blog cards link correctly and display at equal height
- [ ] Prices show as `$299` and `$199`, with no space after the dollar sign
- [ ] Page renders correctly at 375px width with no horizontal scroll
- [ ] No console errors
- [ ] Add `sports.html` with today's date to `sitemap.xml` lastmod (only this page)
