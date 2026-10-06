# Copilot Prompt: Upgrade `senior.html` for 603-in-focus.com

> **How to use:** Save this file in the root of the site repo. In VS Code, open Copilot Chat in **Agent mode** and type:
> `Follow the instructions in #file:senior-page-copilot-prompt.md`
> Review the diff and check the page locally (Live Server) before committing.

---

## 1. Goal

Rebuild the content of `senior.html` so it converts and ranks as well as `mediaday.html`. Use `mediaday.html` as the **design and structure reference**: same section styles, cards, step layout, package/pricing component and CTA band. Keep the existing header, nav, footer, scripts and analytics exactly as they are.

Use the copy in **Section 6 exactly as written**. Text in `[BRACKETS]` is a placeholder. Leave it visible and list it in your final summary so I can fill it in.

Ground rules:
- Plain static HTML/CSS/JS, no build step, hosted on AWS Amplify. Don't add frameworks or libraries.
- Reuse existing CSS classes from `mediaday.html` and the main stylesheet. Add any new styles to the main stylesheet under `/* ===== Senior page ===== */`. Don't use inline styles.
- Must be fully responsive and look right at 375px width (no horizontal scroll).
- Don't commit or push.

## 2. SEO: `<head>`

Keep the existing title. Replace the description in all three places:

```html
<title>Senior Portrait Photographer in New Hampshire | 603 In Focus</title>
<meta name="description" content="High school senior portraits in Strafford, Northwood, Barrington and across NH. Relaxed, guided sessions, a sneak peek in 24 hours, and your gallery in 1–2 weeks.">
<meta property="og:description" content="Relaxed, personality-driven senior portraits in New Hampshire, with a sneak peek in 24 hours and your full gallery in 1–2 weeks.">
<meta name="twitter:description" content="Relaxed, personality-driven senior portraits in New Hampshire, with a sneak peek in 24 hours and your full gallery in 1–2 weeks.">
```

The page copy must stay evergreen. Don't add any class year ("Class of 20XX") or specific calendar year anywhere on the page or in its meta tags, beyond what's in the copy below.

Keep the canonical (`https://www.603-in-focus.com/senior.html`), robots, og:title, og:image and twitter tags as they are.

Add (or replace any existing) JSON-LD on this page with the block below. The business `@id` **must** be `https://www.603-in-focus.com/#organization` to match the homepage. Prices must match `packages.html`. If they differ, use the packages page values and tell me.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.603-in-focus.com/senior.html#service",
      "name": "Senior Portrait Photography",
      "serviceType": "High school senior portrait photography",
      "description": "Relaxed, personality-driven high school senior portraits in New Hampshire, with a 24-hour sneak peek and a private online gallery delivered in 1–2 weeks.",
      "url": "https://www.603-in-focus.com/senior.html",
      "provider": { "@id": "https://www.603-in-focus.com/#organization" },
      "areaServed": [
        { "@type": "State", "name": "New Hampshire" },
        { "@type": "City", "name": "Strafford" },
        { "@type": "City", "name": "Northwood" },
        { "@type": "City", "name": "Barrington" },
        { "@type": "City", "name": "Nottingham" }
      ],
      "offers": [
        { "@type": "Offer", "name": "Mini Session", "price": "150", "priceCurrency": "USD", "url": "https://www.603-in-focus.com/senior.html#packages" },
        { "@type": "Offer", "name": "Standard Session", "price": "225", "priceCurrency": "USD", "url": "https://www.603-in-focus.com/senior.html#packages" },
        { "@type": "Offer", "name": "Premium Session", "price": "350", "priceCurrency": "USD", "url": "https://www.603-in-focus.com/senior.html#packages" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.603-in-focus.com/" },
        { "@type": "ListItem", "position": 2, "name": "Seniors", "item": "https://www.603-in-focus.com/senior.html" }
      ]
    }
  ]
}
</script>
```

Don't add FAQPage, Review or AggregateRating markup to this page.

## 3. Images

1. **Move the externally hosted images.** Four portfolio images load from `https://603infocus-private-galleries.s3.us-east-2.amazonaws.com/TYLER_FULLER_EDITS/...`. That's my private client-gallery bucket, and it exposes a client's full name in the URL. Copy those four files into `/images/seniorpics2026/gallery/tyler/`, keeping the same filenames, and update the `src` paths. If you can't copy them (they aren't in the repo), leave the old `src`, add `<!-- TODO: move into /images/seniorpics2026/gallery/tyler/ -->`, and list them in your summary.
2. **Remove the duplicate.** `colby/_Z633898.jpg` appears twice in the portfolio. Keep the first one.
3. **Rewrite every alt text.** Use first names only, and don't use "Senior portrait —" as a prefix. Describe what's visible using the folder, page context and nearby text. Examples of the style:
   - `Smiling senior guy in a navy jacket posed against a stone wall, New Hampshire senior portraits`
   - `Senior athlete holding a basketball on a beach pier at Fort Foster, Kittery, Maine`

   You can't see the photos, so write your best context-based alt and flag **every** portfolio alt in the summary table for me to check.
4. Every `<img>` needs `width` and `height` (read the real dimensions) and `loading="lazy"`, except the first visible image, which gets `fetchpriority="high"`.

## 4. Page structure (in this order)

| # | Section | Notes |
|---|---|---|
| 1 | **Planning banner** | Slim full-width bar at the very top of `<main>` in brand orange `#E8713A` with dark text `#161616`. Link the text to `#packages`. Keep its text in one obvious place in the HTML (with a comment `<!-- Seasonal banner text: edit or remove anytime -->`) so I can change it easily. |
| 2 | **Hero** | H1 + subhead + intro + two buttons (primary: Book Your Session → Pixieset booking URL; secondary: See Packages → `#packages`). Use the strongest portfolio image. |
| 3 | **Portfolio** (`id="gallery"`) | Keep the existing gallery component and lightbox (if any), with the image changes from Section 3. |
| 4 | **Why seniors choose 603 In Focus** | 4 cards in a grid (2×2 desktop, stacked mobile). Reuse the card style from Media Day's benefit sections. |
| 5 | **Testimonials** | Two testimonials side by side (stacked on mobile), using the site's existing testimonial style. |
| 6 | **Packages** (`id="packages"`) | Reuse the Media Day package/pricing component. Premium gets a "Most Popular" badge. Add-ons and booking details go below the cards. |
| 7 | **How it works** | 4 numbered steps. Reuse the existing step layout from this page or Media Day. |
| 8 | **Where I photograph** | Short text block + link to the Fort Foster blog post. |
| 9 | **FAQ** | Use `<details>`/`<summary>` accordions (accessible, no JS needed), styled to match the site. |
| 10 | **CTA band** | Same style as the final CTA on `mediaday.html`. |

All "Book Your Session" buttons link to `https://603infocus74.pixieset.com/booking/` (the existing booking URL). Add `rel="noopener"` and open in the same tab.

## 5. Internal links

- "Media Day" → `mediaday.html`
- "sports" or "game-day photos" → `sports.html`
- "my story" → `about.html`
- "full package details" → `packages.html`
- Fort Foster post → `blog/fort-foster-kittery-senior-portraits.html`

## 6. Page copy (use exactly)

```
[PLANNING BANNER]
Planning senior photos? Many yearbook deadlines fall in early fall, so book early. See packages →

[HERO]
H1: Senior Portraits in New Hampshire
(Style the H1 so "Senior Portraits" is the large display line and "in New Hampshire" is a smaller line beneath it, like the current visual.)

Subhead: Relaxed sessions. Real personality. Photos you'll actually want to share.

Senior year only happens once. I design every session around you: your style, your interests, and the places that feel like home. You'll get classic yearbook looks, creative outdoor portraits, and images you'll be proud of now and years from now.

[BUTTON] Book Your Session   [BUTTON] See Packages

[PORTFOLIO]
H2: Senior Portfolio
Recent seniors from across New Hampshire, outdoors, on the water, and in their element.

[WHY SENIORS CHOOSE 603 IN FOCUS]
H2: Why Seniors Choose 603 In Focus

[CARD] H3: A sneak peek in 24 hours
You won't wait weeks to see how it went. You'll get a handful of finished favorites within 24 hours of your session, ready to post. Your full gallery follows in 1–2 weeks.

[CARD] H3: Made for athletes, too
I've spent years photographing high school sports, so bring your jersey, your ball, your stick, or your cleats. We'll create portraits that show the athlete and the person.

[CARD] H3: Relaxed, guided posing
Most seniors tell me they're "not good in front of the camera." That's my job. I'll guide every pose and keep it easy and fun, so the photos look like you on a good day, not a stiff yearbook shot.

[CARD] H3: The Signature Print Surprise
Every senior session ends with a little something extra: a professionally printed 8×10 of a favorite image, plus a Time Capsule card to open years from now.

[TESTIMONIALS]
H2: What Senior Families Say

"I can't say enough great things about Rob Mulligan at 603 In Focus!!! He has been photographing Colby and his teammates for the past few years. He is so committed to these kids, their successes, and of course making them look their best. If you are looking for senior pictures, you won't be disappointed."
— Lindsay Taylor, Colby's mom

"Rob has captured hundreds of amazing images of my son playing sports. Working with Rob to capture my son's senior photos was stress-free and fun."
— Tiffany F., senior & sports parent

[PACKAGES]
H2: Senior Portrait Packages
Every session includes a private online gallery, professional retouching, a print release, and your 24-hour sneak peek.

[CARD] Mini Session: $150
- 30-minute session
- 1 outfit, 1 location
- 7 edited images
- Digital gallery & print release
Best for: a quick, classic yearbook-ready look.

[CARD] Standard Session: $225
- 45-minute session
- 2 outfit changes, 1 location
- 15 edited images
- Digital gallery & print release
Best for: variety without a big time commitment.

[CARD, badge "Most Popular"] Premium Session: $350
- 90-minute session
- 3 outfit changes, 2 locations
- 25 edited images
- Digital gallery & print release
Best for: the full senior experience, with multiple looks, locations and gear.

Add-ons: Print packages from $60 · Extra outfit or location +$50 · Rush editing (72-hour gallery) +$75

A $50 retainer reserves your date and goes toward your session. Travel within 25 miles of Strafford, NH is included. See full package details.

[BUTTON] Book Your Session

[HOW IT WORKS]
H2: How It Works
From first message to final gallery, you'll always know what's next.

1. H3: Book & plan
Pick your package and date, and reserve it with a $50 retainer. Then we'll talk about your style, locations, outfits, and any yearbook deadlines.

2. H3: Prep made simple
I'll send you a simple guide on what to wear and what to bring. Sports gear, instruments, a favorite car or a dog are all welcome if they're part of your story.

3. H3: Session day
Relaxed, guided posing with plenty of time to settle in. Most seniors are surprised how fast it goes and how much fun it is.

4. H3: Sneak peek, then your gallery
Favorites within 24 hours, then your full private gallery in 1–2 weeks to download for yearbook, social, and prints.

[WHERE I PHOTOGRAPH]
H2: Where I Photograph
I'm based in Strafford, NH and photograph seniors from Coe-Brown Northwood Academy and towns including Northwood, Strafford, Nottingham, and Barrington, plus [OTHER SCHOOLS/TOWNS YOU SERVE]. Favorite local spots include [2–3 LOCAL LOCATIONS YOU USE]. Want something different? I'm happy to travel, like this senior session on the coast at Fort Foster in Kittery, Maine.

[LINK] Was the drive to Maine worth it? Read the Fort Foster session →

[FAQ]
H2: Senior Session FAQ

Q: When should we book senior portraits?
A: Earlier than most people think. Many schools have yearbook photo deadlines in early fall (some as early as October 1), so the best time to shoot is late spring through summer of junior-to-senior year. Book a month or two ahead for the best choice of dates, and tell me your school's deadline when you book.

Q: What should I wear?
A: Bring outfits that feel like you: one classic look, one casual, and one that shows your personality. Solid colors and simple patterns photograph best. You'll get a full prep guide after booking.

Q: Can I bring sports gear or props?
A: Absolutely. Jerseys, balls, sticks, instruments, and letterman jackets all make the photos more personal. Many of my seniors are athletes, and I love making these shots look great.

Q: What happens if the weather doesn't cooperate?
A: [YOUR WEATHER/RESCHEDULE POLICY: copy the answer from the homepage FAQ]

Q: How do I get my yearbook photo?
A: Your gallery includes high-resolution downloads you can submit directly. Check your school's yearbook requirements (size, orientation, deadline) and send them to me before your session so we plan for it.

Q: How do I reserve my date?
A: Choose a package and book online. A $50 retainer holds your date and goes toward your session.

[CTA BAND]
H2: Let's Plan Your Senior Session
Tell me your school, your timeline, and what you're hoping for. I'll take it from there.

[BUTTON] Book Your Session
Questions first? Contact me →  (link to contact.html)
```

## 7. When you're done

1. Validate the JSON-LD (valid JSON, no trailing commas).
2. Confirm the page has exactly one `<h1>`, one title, one meta description and one canonical.
3. Confirm every internal link points to a file that exists.
4. Give me:
   - A list of changed or created files.
   - A table of every image: old alt → new alt, flagging all portfolio alts for me to check.
   - Every `[PLACEHOLDER]` left on the page.
   - Any price differences you found between this page and `packages.html`.
   - Whether the Tyler images were moved or still need moving.
