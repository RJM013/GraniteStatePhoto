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

## Change 3: Add "Sports Packages" section with two package cards

**Placement:** directly after the "GAME DAY HIGHLIGHTS" gallery section, before "COVERAGE ACROSS THE SPORTS YOU LOVE".

**Markup:** reuse the package grid and card pattern from the "Senior Portrait Packages" section of `senior.html`. Show two cards side by side on desktop, stacked on mobile, top-aligned and equal height. Give the section `id="packages"`. Neither card gets a "Most Popular" badge.

- **Section heading (H2):** Sports Packages
- **Intro line:** Portraits built around your sport, or real action from a real game. Every package includes professional editing and a private online gallery.

### Card A: Athlete Spotlight

- **Title:** Athlete Spotlight
- **Tagline:** Best for: the dramatic Media Day look, with the whole session focused on you.
- **Price:** $225 (format as `$225`, with no space after the dollar sign)
- **List items:**
  - 45-minute session
  - 15 professionally edited images
  - One-on-one session with studio-quality, on-location lighting
  - Clean, dramatic and creative looks using your uniform and gear
  - Close-up, three-quarter and full-body portraits
  - The same polished look as my Media Day sessions
  - **Recruiting-ready:** great for senior recognition, recruiting profiles and social media
- **Button:** "Book Your Spotlight", linking to `contact.html`, using the primary button class from `senior.html`.

### Card B: Game Day Coverage

- **Title:** Game Day Coverage
- **Tagline:** Best for: action, emotion and your athlete's story from a live game.
- **Price:** $350 per game (format as `$350`, with no space after the dollar sign)
- **List items:**
  - **Full-game coverage:** I'm there from warm-ups to the final whistle.
  - **Your athlete is the focus:** I follow your athlete through the whole game, not the team in general.
  - **25 professionally edited images:** action, reactions, celebrations and the moments between plays.
  - **Private online gallery in 1–2 weeks:** download your photos or order prints right from the gallery.
  - **Yours to share:** use them on Instagram, Facebook, recruiting profiles and family keepsakes.
  - **Recruiting-ready:** high-resolution action shots that work well in submissions to college coaches and scouts.
  - **Horizontal and vertical crops:** included whenever possible, so they work for posts and stories.
- **Button:** "Check Availability", linking to `contact.html`, using the primary button class from `senior.html`.

### Sub-block, inside the same section below the cards

- **H3:** Team Up With Other Families
- **Paragraph:**
  > Want to split the cost? Up to three families can book one game together. I'll focus only on those three athletes for the full game, and each family gets access to a shared private gallery to download or order prints.

### Line below the sub-block

> Photographing a whole team? [Team Media Days start at $499 →](mediaday.html) · [See all packages →](packages.html)

### Update the existing price line in "WHERE ACTION MEETS EMOTION"

Replace the current line ("Game coverage starts at $299. View full pricing and what's included →") with:

> Athlete Spotlight sessions **$225** · Game Day Coverage **$350** per game. [Compare sports packages →](#packages)

---

## Change 4: Add "Sports Photography FAQ" section

**Placement:** after the testimonials section ("From sports families") and before the final "LET'S COVER YOUR NEXT GAME" CTA.

**Markup:** reuse the exact accordion/FAQ markup and classes from the "Senior Session FAQ" section in `senior.html`, including any JavaScript hooks it uses. Give the section `id="faq"`.

- **Section heading (H2):** Sports Photography FAQ

| Question | Answer |
|---|---|
| Am I booking photos of my child or the whole team? | Your athlete. Game Day Coverage follows the athlete or athletes you book, so you get far more of them than you would from general team coverage. Coaches and booster clubs looking for full-team or season coverage can contact me for a custom quote. |
| How many photos will I get? | Game Day Coverage includes 25 professionally edited images per game, selected for the best action, emotion and moments. Athlete Spotlight includes 15 edited portraits. |
| When will my gallery be ready? | Within 1–2 weeks of the game. You'll get a private link to view, download and order prints. |
| Can I share the photos on social media? | Yes. Your photos are yours to share on Instagram, Facebook and recruiting profiles, and to print for family. |
| Can other families split the cost? | Yes. Up to three families can book the same game, and I'll focus on just those athletes. |
| What's the difference between Athlete Spotlight and Game Day Coverage? | Athlete Spotlight is a posed, one-on-one portrait session with dramatic lighting: the Media Day look, all about you. Game Day Coverage is real action from a live game. Many families book both. |
| Which sports do you cover? | Basketball, soccer, volleyball, baseball, softball, lacrosse and more: youth leagues, high school and AAU. If you don't see your sport, just ask. |

**Structured data:** add a `<script type="application/ld+json">` block of type `FAQPage` to the page `<head>`, containing these seven questions and answers with text identical to the visible FAQ. If `senior.html` already has a FAQPage block, copy its structure.

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

## Change 8: Update both sports packages on `packages.html`

The new prices and image counts must match on every page. On `packages.html`, edit only these two cards:

**Athlete Spotlight Sessions card**

- Change the price from $199 to **$225** (keep the "Individual session" label)
- Add as the **first** bullet: 45-minute session
- Add as the **second** bullet: 15 professionally edited images

**Game Day Coverage card**

- Change the price from $299 to **$350** (keep the "Live game coverage" label)
- Add as the **first** bullet: Full-game coverage, from warm-ups to the final whistle
- Add as the **second** bullet: 25 professionally edited images per game
- Add after the "Private online gallery…" bullet: Recruiting-ready action shots for submissions to college coaches and scouts
- Add a line below the closing sentence: Up to three families can split one game — I'll focus on just those athletes.

Do not change any other card, price or layout on `packages.html`. In particular, **the Fall Foliage Mini stays at $199**.

---

## Change 9: Update sports prices everywhere else

Search every `.html` file in the site (including `index.html`, `mediaday.html` and the `blog/` folder) for `$199` and `$299`, and for the same numbers written with a space after the dollar sign (`$ 199`, `$ 299`).

- Where the price refers to **Athlete Spotlight**, an individual athlete session, or "individual sessions", change it to **$225**.
- Where the price refers to **Game Day Coverage**, game coverage, or live game coverage, change it to **$350**.
- Where a "Sports Photography starting at" price appears (for example the services or pricing cards on `index.html`), set it to **$225**, the lowest sports package.
- Leave every other `$199`/`$299` alone. This includes the Fall Foliage Mini and anything unrelated to sports.

Known locations to check on `mediaday.html`:

- The intro line "Individual sessions from $199 · Team Media Days from $499" → "Individual sessions from $225 · Team Media Days from $499"
- The Media Day packages table: Athlete Spotlight → $225, Game Day Coverage → $350

When done, list every file and line you changed, so the changes can be reviewed.

---

## Do not change

- The hero image, H1, and "VIEW SAMPLE WORK" button
- The gallery images, filters (All / Rec Soccer / High School Soccer / High School Basketball / High School Volleyball) and lightbox
- Navigation and footer
- Page title, canonical URL and the existing meta description

## Acceptance checklist

- [ ] No "we", "our" or "us" left in `sports.html` body copy (brand name excepted)
- [ ] New sections appear in this order: Gallery → Sports Packages (2 cards + Team Up) → Coverage Across Sports (+ local paragraph) → More Than the Play → How It Works → Testimonials → FAQ → Stories From the Sidelines → Final CTA
- [ ] Both package cards are equal height and side by side on desktop, stacked on mobile
- [ ] Prices and package names on `sports.html` and `packages.html` match exactly
- [ ] `#packages` and `#faq` anchors work
- [ ] FAQ accordion opens and closes, and matches `senior.html` styling
- [ ] FAQPage JSON-LD validates in Google's Rich Results Test, and its text matches the visible FAQ word for word
- [ ] Both blog cards link correctly and display at equal height
- [ ] Sports prices show as `$225` and `$350`, with no space after the dollar sign
- [ ] A site-wide search finds no remaining `$199` or `$299` tied to Athlete Spotlight or Game Day Coverage, and Fall Foliage Mini still shows $199
- [ ] Page renders correctly at 375px width with no horizontal scroll
- [ ] No console errors
- [ ] In `sitemap.xml`, set lastmod to today's date only for pages that actually changed
