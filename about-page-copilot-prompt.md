# Copilot Prompt: Build the new "About Me" page for 603-in-focus.com

> **How to use:** Save this file in the root of the site repo. In VS Code, open Copilot Chat in **Agent/Edit mode** and type:
> `Follow the instructions in #file:about-page-copilot-prompt.md`
> Review the diff before committing.

---

## 1. Task

Create a new page, `about.html`, for my static photography website (plain HTML/CSS/JS, no build step, hosted on AWS Amplify). The page tells my story as the photographer behind 603 In Focus. Use the copy in **Section 6 exactly as written**. Do not rewrite, shorten or "improve" it.

## 2. Match the existing site first

Before writing anything:

1. Open `index.html`, `sports.html`, `family.html` and `contact.html`, and study the shared `<head>` setup, header/nav, footer, fonts, CSS classes and the stylesheets in `/css` and scripts in `/js`.
2. Build `about.html` with the **same header, nav, footer, stylesheet links and scripts** as the other pages. Reuse existing CSS classes and components (section containers, buttons, testimonial styles, etc.) wherever possible.
3. If new styles are needed, add them to the existing main stylesheet under a clearly commented block `/* ===== About page ===== */`. Don't use inline styles, and don't add a new framework or library.
4. The page must be fully responsive and look right at 375px phone width (no horizontal scrolling).

## 3. Navigation

- Add a nav link labeled **"Behind the Lens"** that points to `about.html`.
- Add it to the nav on **every page** of the site (and the mobile menu, if there is one), placed **after the service pages and before Contact**.
- On `about.html`, mark that link as the current page the same way other pages do (active class) and add `aria-current="page"`.
- Add an "About" link to `about.html` in the footer if the footer has a link list.

## 4. SEO requirements (all required)

### 4a. `<head>` tags

```html
<title>About Rob Mulligan | NH Sports & Senior Photographer</title>
<meta name="description" content="Meet Rob Mulligan, the Strafford, NH photographer behind 603 In Focus. Sports, senior portraits, Media Days and headshots across New Hampshire since 2017.">
<link rel="canonical" href="https://www.603-in-focus.com/about.html">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:type" content="profile">
<meta property="og:site_name" content="603 In Focus">
<meta property="og:title" content="About Rob Mulligan | 603 In Focus Photography">
<meta property="og:description" content="It started on the sidelines. Meet the New Hampshire sports and senior photographer behind 603 In Focus.">
<meta property="og:url" content="https://www.603-in-focus.com/about.html">
<meta property="og:image" content="https://www.603-in-focus.com/images/about/rob-mulligan-og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Rob Mulligan, photographer and owner of 603 In Focus, with his camera">
<meta property="og:locale" content="en_US">

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="About Rob Mulligan | 603 In Focus Photography">
<meta name="twitter:description" content="It started on the sidelines. Meet the New Hampshire sports and senior photographer behind 603 In Focus.">
<meta name="twitter:image" content="https://www.603-in-focus.com/images/about/rob-mulligan-og.jpg">
```

Keep any other `<head>` items the existing pages already use (charset, viewport, favicon, analytics, fonts).

### 4b. Structured data (JSON-LD)

Add this single `<script type="application/ld+json">` block in the `<head>`. Do **not** add any `Review` or `AggregateRating` markup (Google ignores self-published reviews and it can trigger a manual action).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.603-in-focus.com/about.html#webpage",
      "url": "https://www.603-in-focus.com/about.html",
      "name": "About Rob Mulligan | NH Sports & Senior Photographer",
      "description": "Meet Rob Mulligan, the Strafford, NH photographer behind 603 In Focus. Sports, senior portraits, Media Days and headshots across New Hampshire since 2017.",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://www.603-in-focus.com/#website" },
      "about": { "@id": "https://www.603-in-focus.com/#business" },
      "mainEntity": { "@id": "https://www.603-in-focus.com/#rob" },
      "primaryImageOfPage": "https://www.603-in-focus.com/images/about/rob-mulligan-og.jpg",
      "breadcrumb": { "@id": "https://www.603-in-focus.com/about.html#breadcrumb" }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.603-in-focus.com/#website",
      "url": "https://www.603-in-focus.com/",
      "name": "603 In Focus"
    },
    {
      "@type": "Person",
      "@id": "https://www.603-in-focus.com/#rob",
      "name": "Rob Mulligan",
      "jobTitle": "Photographer & Owner",
      "worksFor": { "@id": "https://www.603-in-focus.com/#business" },
      "image": "https://www.603-in-focus.com/images/about/rob-mulligan.jpg",
      "url": "https://www.603-in-focus.com/about.html",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Strafford",
        "addressRegion": "NH",
        "addressCountry": "US"
      },
      "knowsAbout": ["Sports photography", "Senior portraits", "Media Day photography", "Headshots", "Family photography"],
      "sameAs": ["https://www.instagram.com/603infocus/"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.603-in-focus.com/#business",
      "name": "603 In Focus",
      "alternateName": "603 In Focus Photography",
      "slogan": "Where every shot counts.",
      "url": "https://www.603-in-focus.com/",
      "logo": "https://www.603-in-focus.com/images/logo.png",
      "image": "https://www.603-in-focus.com/images/about/rob-mulligan-og.jpg",
      "email": "rob@603-in-focus.com",
      "founder": { "@id": "https://www.603-in-focus.com/#rob" },
      "foundingDate": "2017",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Strafford",
        "addressRegion": "NH",
        "postalCode": "03884",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "State", "name": "New Hampshire" },
        { "@type": "City", "name": "Strafford" },
        { "@type": "City", "name": "Northwood" },
        { "@type": "City", "name": "Barrington" },
        { "@type": "City", "name": "Nottingham" }
      ],
      "sameAs": ["https://www.instagram.com/603infocus/"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.603-in-focus.com/about.html#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.603-in-focus.com/" },
        { "@type": "ListItem", "position": 2, "name": "Behind the Lens", "item": "https://www.603-in-focus.com/about.html" }
      ]
    }
  ]
}
</script>
```

If an actual logo file exists in `/images`, update the `logo` path to match it. If the homepage already defines a `ProfessionalService`/`LocalBusiness` block, keep the same `@id` values so they link up.

### 4c. On-page SEO

- Exactly **one `<h1>`** ("About Me") and `<h2>` for each section in Section 6. No skipped heading levels.
- Use semantic HTML: `<main>`, `<section>` per content block (each with `aria-labelledby` pointing to its `<h2>` id), `<blockquote>` + `<cite>`/`<figcaption>` for quotes, `<ul>` for the values list.
- Add a visible breadcrumb above the H1 (`Home › Behind the Lens`) if it fits the site style. Otherwise skip the visible one (the JSON-LD breadcrumb stays).
- Internal links (descriptive anchor text, not "click here"): link "senior portraits", "Media Day", "sports coverage", "family photos" and the CTA buttons to their existing service pages (`sports.html`, `family.html`, etc.). Any page that doesn't exist yet links to `contact.html` for now. Leave an HTML comment `<!-- TODO: link to seniors page when live -->` where relevant.
- **Book a Session** button → `contact.html`.

### 4d. Images

Create the folder `/images/about/` and reference these filenames (I'll supply the photos). Until then, show a neutral placeholder box at the right aspect ratio:

| File | Where | Size / ratio | Alt text |
|---|---|---|---|
| `rob-mulligan.jpg` | Next to the intro (hero) | ~800×1000 (4:5) | Rob Mulligan, sports and senior photographer, holding his camera on a New Hampshire sideline |
| `sideline-action.jpg` | "It Started on the Sidelines" | ~1200×800 (3:2) | High school athlete in action captured by 603 In Focus at Coe-Brown Northwood Academy |
| `media-day-portrait.jpg` | "More Than Sports" | ~800×1000 (4:5) | Dramatically lit Media Day portrait of a New Hampshire high school athlete |
| `senior-portrait.jpg` | "More Than Sports" | ~800×1000 (4:5) | Outdoor senior portrait by 603 In Focus Photography in New Hampshire |
| `rob-mulligan-og.jpg` | Social share image only (not shown on page) | 1200×630 | (see og:image:alt) |

For every `<img>`, include `width` and `height` attributes (to prevent layout shift), `alt`, and `loading="lazy"`, **except** the hero photo, which gets `loading="eager"` and `fetchpriority="high"`. Use `<picture>` with a WebP source + JPG fallback if other pages already do that.

### 4e. Sitemap & robots

- If `sitemap.xml` exists, add:
  ```xml
  <url>
    <loc>https://www.603-in-focus.com/about.html</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  ```
  If it doesn't exist, create a `sitemap.xml` that lists every `.html` page in the site root, and reference it in `robots.txt` (`Sitemap: https://www.603-in-focus.com/sitemap.xml`). Create a basic `robots.txt` allowing all crawlers if none exists.
- Make sure nothing in `amplify.yml` or redirects blocks `/about.html`. If the site uses clean URLs elsewhere (e.g. `/sports` instead of `/sports.html`), follow the same pattern and set the canonical/OG URLs to match.

## 5. Layout guidance

- **Intro/hero:** two columns on desktop (photo + intro text), stacked on mobile with the photo first.
- Style the **two story quotes** (the "90%" quote and the "treasures" quote) as large, prominent pull quotes. They're the emotional core of the page.
- **"Why 603 In Focus?"**: two side-by-side cards (603 / In Focus), stacked on mobile.
- **"How I Work" values list**: clean list with a small check or accent marker in the brand orange `#E8713A`. Keep the text dark `#222222` for contrast.
- **Testimonial**: reuse the site's existing testimonial styling if there is one.
- **Final CTA**: full-width band with a primary "Book a Session" button and secondary text links to the service pages.
- Accessibility: text contrast ≥ 4.5:1, buttons are real `<a>`/`<button>` elements at least 44px tall, and there's a visible focus state.

## 6. Page copy (use exactly)

```
H1: About Me

Hi, I'm Rob, the photographer behind 603 In Focus.

I'm a sports, senior, and portrait photographer based in Strafford, NH. I photograph athletes, seniors, families, and teams across New Hampshire. I'm also a dad who spent years on the sidelines watching my own boys play, and that's where all of this started.

H2: It Started on the Sidelines

603 In Focus didn't begin with a business plan. It began at a high school game.

In 2017, my oldest son started playing sports at Coe-Brown Northwood Academy, and I started bringing a camera along. I just wanted to capture the memories.

Basketball. Soccer. Volleyball.

Before long, the camera came to every game. The photos got better, and something unexpected happened. Players started using them as profile pictures. Parents started following my work. My photos were becoming part of other families' memories, not just my own.

At an end-of-season banquet, one player thanked me with a line I've never forgotten:

[PULL QUOTE] "It's a pretty amazing fact that your pictures account for about 90% of our team's profile pictures."

It wasn't really about photography. It was proof that the photos mattered to the people in them.

H2: The Conversation That Changed Everything

After a varsity soccer game, a parent walked over and said:

[PULL QUOTE] "I looked all over and couldn't find any way to pay you for these really great treasures."

I had never considered turning photography into a business. But that moment showed me how much these images meant to families. They weren't just digital files. They were memories. That conversation planted the seed for what became 603 In Focus.

H2: Why "603 In Focus"?

[CARD 1 — title: 603] 603 is home: New Hampshire, and the schools, athletes, families, and communities that supported this from day one.

[CARD 2 — title: In Focus] In Focus is the craft. In sports, the moment you want lasts a fraction of a second. Focus, timing, and preparation all have to come together in that one frame. That's how I approach everything I do.

H2: More Than Sports

Sports opened the door, and it led me to portraits. I've always loved dramatic athlete portraits, with simple backgrounds, intentional lighting, and athletes looking as confident and powerful as they feel in the game. That pushed me to learn studio lighting and posing, which led to Media Days and then senior portraits.

Different setting. Different story. Same purpose: helping people see themselves at their very best.

H2: How I Work

By day, I've spent more than 20 years as a data engineer. That background shapes how I run this business. I plan the lighting before every Media Day, scout locations before every senior session, and keep improving the experience from the first conversation to final delivery.

A few things will never change:
- Every client should feel valued.
- Every photo should capture something genuine.
- Every session should feel comfortable and fun.
- Relationships will always matter more than transactions.

H2: What Clients Say

[TESTIMONIAL] "I cannot say enough good things about Rob Mulligan and his 603 InFocus business… He is extremely professional and his ability to take pictures and be creative with them is outstanding."
— Sam Struthers, Athletic Director, Coe-Brown Northwood Academy

H2: Let's Create Something Worth Remembering

Senior portraits, family photos, sports coverage, headshots, or a full team Media Day: I'd love to help tell your story.

[PRIMARY BUTTON] Book a Session → contact.html
[TEXT LINKS] Senior Portraits · Sports & Media Day · Families

603 In Focus. Where every shot counts.
```

## 7. When you're done

List every file you created or changed, and show me:
1. The final `<head>` of `about.html`.
2. The nav change as it appears on one other page.
3. Any TODOs (missing pages, image files I still need to add).

Don't commit or push. I'll review and commit myself.
