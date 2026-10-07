# Copilot Prompt: Rebuild the homepage (`index.html`) for 603-in-focus.com

> **How to use:** Save this file in the repo root. Run it in Copilot Chat (Agent mode) **one part at a time** to avoid length limits:
> `Follow PART 1 of #file:homepage-copilot-prompt.md. Keep your reply short. Don't commit.`
> Check the page in Live Server after each part, then run the next part.

---

## Ground rules (apply to every part)

- Plain static HTML/CSS/JS, no build step, hosted on AWS Amplify. No new frameworks or libraries.
- Use `senior.html` and `mediaday.html` as the **design reference**: reuse their section classes, spacing variables (`--section-pad-y`, `--heading-gap`), card styles, step/icon layout, testimonial cards, FAQ accordion and CTA band. Alternate section backgrounds the same way they do.
- Keep the existing header, nav, analytics and `<head>` (except where a part says to change it).
- Write all copy in **first person ("I")**, exactly as given below. Don't rewrite it.
- Every **"Book a Session"** button on the homepage links to `https://603infocus74.pixieset.com/booking/` (same as `senior.html`).
- Must look right at 1440px, 1024px, 768px and 375px, with no horizontal scroll.
- Don't commit or push.

**Final section order on the homepage:**
1. Hero → 2. Intro → 3. Services → 4. Featured Work → 5. Meet Rob → 6. How It Works → 7. What Clients Say → 8. From the Field (blog) → 9. FAQ → 10. Final CTA

---

## PART 1: Hero, intro, and services

### 1a. Hero
- Keep the current hero image (Coe-Brown basketball portrait) and the H1 design ("603 IN FOCUS / EVERY SHOT COUNTS").
- Inside the H1, add a smaller third line in a `<span>` (reuse a small-text class or add `.h1-sub` in the main stylesheet):
  `New Hampshire Senior & Sports Photographer`
- Replace the single "Explore Our Work" button with two buttons, styled like the hero buttons on `senior.html`:
  - Primary: **Book a Session** → Pixieset booking URL
  - Secondary (outline): **See My Work** → `#featured-work`

### 1b. Intro (replaces "Professional Photography in New Hampshire")
```
H2: Senior, Sports & Team Photography in New Hampshire

Hi, I'm Rob. I photograph high school seniors, athletes, and teams across New Hampshire, from senior portraits and game-day action to full team Media Days and professional headshots. Based in Strafford, NH, and on the sidelines since 2017.
```
Center it with a max-width of about 720px.

### 1c. Services (replaces BOTH "Our Photography Services" AND "Our Photography Sessions")
- **Delete** the "Our Photography Sessions" pricing section entirely. Its prices move into the cards below, and its fine print moves into the FAQ (Part 3).
- Rebuild "Our Photography Services" as 4 cards (4 across on desktop, 2×2 on tablet, stacked on mobile). Each card: image, H3 title, one-line description, price line, and a text link. The whole card is clickable (link the card itself), with a visible focus state.
- Fix the garbled labels. Don't use "GRADUATION SENIORS PORTRAITS", "ACTION SPORTS MOMENTS", "TEAM MEDIA DAY PORTRAITS" or "STUDIO HEADSHOTS PERSONAL".

```
H2: How I Can Help
Intro: Every session is built around you, whether you're a senior, an athlete, a team, or a professional.

Card 1
H3: Senior Portraits
Relaxed, personality-driven sessions with photos you'll actually want to share.
From $150
Link: Explore senior sessions → senior.html

Card 2
H3: Sports Photography
Game-day action and athlete portraits that capture the moments that matter.
From $199
Link: Explore sports photography → sports.html

Card 3
H3: Team Media Day
Polished team and individual portraits for schools, coaches, and programs.
From $499
Link: Explore Media Day → mediaday.html

Card 4
H3: Headshots & Branding
Clean, professional headshots and personal branding images.
From $175
Link: Explore headshots → portrait.html
```
Keep each card's existing image if it has one; otherwise use the images listed in Part 2's table for that category. Give each image a descriptive alt (see Part 2 rules).

---

## PART 2: Featured work, Meet Rob, How It Works

### 2a. Featured Work (new section, `id="featured-work"`)
```
H2: Recent Work
Intro: A few favorites from senior sessions, game days, and Media Days across New Hampshire.
```
- A responsive image grid of **9 images**: 3 columns on desktop and tablet (a clean 3×3), 2 columns on mobile. Use a consistent aspect ratio (4:5 portrait) with `object-fit: cover` so the grid stays tidy.
- Images live in **`/images/featured/`**, named `featured-01.jpg` through `featured-09.jpg`, in the order they should appear.
- Each image links to its category page (table below). Hover: slight zoom plus a caption overlay with the category name (Seniors / Sports / Media Day / Headshots).
- `loading="lazy"`, `width`/`height` set from the real image dimensions, no layout shift.

Fill in this table before running Part 2 (category and a short description of each photo):

| File | Category → links to | Alt text |
|---|---|---|
| featured-01.jpg | [Seniors → senior.html] | [describe photo] |
| featured-02.jpg | [ ] | [ ] |
| featured-03.jpg | [ ] | [ ] |
| featured-04.jpg | [ ] | [ ] |
| featured-05.jpg | [ ] | [ ] |
| featured-06.jpg | [ ] | [ ] |
| featured-07.jpg | [ ] | [ ] |
| featured-08.jpg | [ ] | [ ] |
| featured-09.jpg | [ ] | [ ] |

Category links: Seniors → `senior.html` · Sports → `sports.html` · Media Day → `mediaday.html` · Headshots → `portrait.html`.
If any file is missing from `/images/featured/`, stop and tell me. **Don't substitute other images.**

### 2b. Meet Rob (replaces "About 603 In Focus")
- Two columns: photo left (`/images/about/in-action.jpg`, alt "Rob Mulligan photographing on the sideline"), text right. Stacked on mobile, photo first.
- Remove the old "LOCAL / Granite State" and "TRUSTED / Schools & families" bullet points.

```
H2: It Started on the Sidelines

In 2017, I started bringing a camera to my son's games at Coe-Brown Northwood Academy. Before long, players were using my photos as profile pictures, and parents were asking how they could get them. That's how 603 In Focus began. Today I bring that same care to every senior session, game, and Media Day.

Fact strip (3 small items in a row, brand-orange accent):
Since 2017 · Based in Strafford, NH · Seniors, sports & teams

Link: Read my story → about.html
```

### 2c. How It Works (replaces "A Seamless Experience from Booking to Gallery")
Use the same icon-step layout as "How It Works" on `senior.html`, but with 3 steps in a row (stacked on mobile) and no photo column.
```
H2: How It Works
Intro: Simple from start to finish, whatever kind of session you book.

Step 1 | icon: calendar
H3: Book your session
Choose your session and date online. A $50 retainer reserves your spot and goes toward your session.

Step 2 | icon: camera
H3: Enjoy your session
Relaxed, guided, and planned around you. I'll send prep tips ahead of time so you know exactly what to expect.

Step 3 | icon: download
H3: Get your gallery
Your professionally edited images arrive in a private online gallery, typically within 1–2 weeks, with a print release included.
```

---

## PART 3: Testimonials, blog, FAQ, CTA, footer, and structured data

### 3a. What Clients Say (replaces "Client Stories")
```
H2: What Clients Say
Intro: Families, athletes, and programs across New Hampshire.
```
**Featured quote (full width, above the cards, styled larger like a pull quote):**
```
"I cannot say enough good things about Rob Mulligan and his 603 InFocus business. I hired Rob to do a Media Day with our Spring athletes, and he did a phenomenal job. I would highly recommend him to any Athletic Director or Coach who is looking to have their team(s) done. He is extremely professional and his ability to take pictures and be creative with them is outstanding."
— Sam Struthers, Athletic Director, Coe-Brown Northwood Academy
```
**Then a 3-column grid of testimonial cards** (2 on tablet, 1 on mobile), using the same card markup and style as `senior.html` (name, then a topic label underneath). Keep the existing five, and **replace "Volleyball Mom"** with April Silva's:

| Name | Label | Quote |
|---|---|---|
| Kristen Cimino | Senior Photography | *(keep existing text)* |
| Karyn Raymond | Senior Photography | *(keep existing text)* |
| Tiffany Fuller | Senior Photography | *(keep existing text)* |
| Addy Albin | Volleyball Media Day | *(keep existing text)* |
| April Silva | Sports and Media Day Photography | Amazing job! I don't think anyone appreciates a great photographer more than a sports parent. Thank you!!! |
| Caryn & Duane | Sports Photography | *(keep existing text)* |

Cards: equal height, quote aligned to the top, name and label pinned to the bottom.

### 3b. From the Field (new section)
```
H2: From the Field
Intro: Behind-the-scenes stories from recent sessions and game days.
Link under the cards: See all posts → blog/index.html
```
Three cards, newest first. Each card: the post's `og:image` (read it from the post file), title, date, and a "Read more →" link.
1. Photographer Dad vs. Referee Dad: Shooting My Son's Championship Basketball Game (Sept 27, 2026) → `blog/basketball-dad-photographer-championship-game.html`
2. Coe-Brown Girls Volleyball Media Day (Sept 14, 2026) → `blog/coe-brown-girls-volleyball-media-day.html`
3. Was the Drive to Maine Worth It? A Senior Session at Fort Foster (Aug 30, 2026) → `blog/fort-foster-kittery-senior-portraits.html`

### 3c. FAQ (replace all 8 current questions with these 6)
Use the **same accordion markup and script** as the working FAQ on `senior.html`.
```
H2: Frequently Asked Questions

Q: How do I book a session?
A: Choose your session and pick a date on my online booking page. A $50 retainer reserves your date and goes toward your session. Planning a team Media Day? Reach out through my contact page and we'll plan the details together.

Q: What areas do you serve?
A: I'm based in Strafford, NH, and travel within 25 miles is included, covering towns like Northwood, Barrington, Nottingham, Dover, Durham, and Rochester. I'm happy to travel farther, including the Seacoast and southern Maine. A small travel fee may apply.

Q: How long until I receive my photos?
A: Finished galleries are typically delivered within 1–2 weeks. Need them sooner? Rush editing is available for an additional fee.

Q: Can I print my photos?
A: Yes! Every session includes a print release, so you can order prints through me or use any lab you like.

Q: What happens if the weather doesn't cooperate?
A: New Hampshire weather can be unpredictable! I keep a close eye on the forecast and will reach out 24–48 hours before your session if it looks questionable. If the weather doesn't cooperate, we'll reschedule for the next date that works for both of us.

Q: How do I view and order sports photos?
A: Sports galleries are shared online after the event. Use your gallery link to view, download, and order images from your team or game coverage.
```
In the "How do I book" answer, link "online booking page" to the Pixieset booking URL and "contact page" to `contact.html`.

### 3d. Final CTA (replaces "Ready to Get Started?")
Same style as the final CTA band on `senior.html`.
```
H2: Let's Create Something Worth Remembering
Senior portraits, game-day coverage, team Media Days, or headshots: tell me what you have in mind and I'll take it from there.

[Book a Session] → Pixieset booking URL
Questions first? Contact me → contact.html
```

### 3e. Footer (all pages)
In the shared footer on **every** `.html` page (including `/blog/`), replace the description text "Professional photography services capturing New Hampshire's sporting events, senior portraits, and headshots throughout all seasons." with:
```
Senior portraits, sports photography, team Media Days, and headshots across New Hampshire.
```

### 3f. Structured data on index.html
In the existing JSON-LD:
- If a `review` entry for "Volleyball Mom" exists, replace it with April Silva's review (author "April Silva", rating 5, reviewBody = her quote above).
- Make sure `aggregateRating.reviewCount` equals the number of `review` entries.
- Don't change anything else in the JSON-LD. Make sure it's still valid JSON.

### 3g. Final checks, then report
1. Exactly one `<h1>`. Sections appear in the final order listed at the top.
2. Every internal link points to a file that exists. Every "Book a Session" goes to Pixieset.
3. No leftover "we/our" phrasing in the homepage copy, apart from client quotes.
4. Report: files changed, any images you couldn't find or substituted (with the alt text you used), and the page height (`document.body.scrollHeight`) before and after at 1440px.
