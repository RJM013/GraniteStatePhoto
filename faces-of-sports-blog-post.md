# Copilot Prompt: Publish "Faces of Sports" blog post

> **How to use:** Save this file in the repo root. Put your photos in `/images/blog/faces-of-sports/` first (see Section 3), then in Copilot Chat (Agent mode):
> `Follow #file:faces-of-sports-blog-post.md. Keep your reply short. Don't commit.`

---

## 1. Task

Create a new blog post at `blog/faces-of-sports-high-school-sports-photography.html`, using the **same template, layout, header, footer, styles and scripts as the existing posts** in `/blog/` (use `blog/coe-brown-girls-volleyball-media-day.html` as the reference). Use the copy in Section 4 **exactly as written**.

Then:
- Add the post to `blog/index.html` as the **newest** post (top of the list).
- Update the homepage **"From the Field"** section in `index.html` so it shows the 3 newest posts: this one first, then the basketball post, then the volleyball Media Day post. (The Fort Foster post drops off the homepage but stays on the blog index.)
- Add the post's URL to `sitemap.xml` with today's date as `lastmod`. If a sitemap generator script exists, use it instead.
- If you change a template or generator, tell me.

## 2. SEO and `<head>`

```html
<title>Faces of Sports: The Funny Side of High School Sports Photography | 603 In Focus</title>
<meta name="description" content="Eyes closed, tongue out, and the look toward the ref. A New Hampshire sports photographer shares the blooper reel hiding between the highlight shots.">
<link rel="canonical" href="https://www.603-in-focus.com/blog/faces-of-sports-high-school-sports-photography.html">
<meta name="robots" content="index, follow">
```
- Open Graph and Twitter tags: copy the pattern from the reference post. Use the same title and description, and set `og:image` to photo #6 (the celebration shot): `https://www.603-in-focus.com/images/blog/faces-of-sports/06-celebration.jpg`.
- Add `BlogPosting` JSON-LD, matching the reference post's structure:
  - headline: "Faces of Sports: The Blooper Reel Nobody Usually Gets to See"
  - datePublished / dateModified: today's date (YYYY-MM-DD)
  - author: `{ "@type": "Person", "@id": "https://www.603-in-focus.com/#rob", "name": "Rob Mulligan", "url": "https://www.603-in-focus.com/about.html" }`
  - publisher: `{ "@id": "https://www.603-in-focus.com/#organization" }`
  - image: the og:image URL
  - mainEntityOfPage: the canonical URL
- Normalize all apostrophes and quotes in the post to curly typographic ones (’ “ ”). No mixing.

## 3. Photos

Folder: `/images/blog/faces-of-sports/`. Resize to about **1600px on the long side**, JPG at around 80% quality.

| # | File | Placed after | Alt text (Rob: edit to match the actual photo) |
|---|---|---|---|
| 1 | `01-game-face.jpg` | "The Game Face" section | High school athlete mid-play with an intense, wide-eyed game face |
| 2 | `02-incoming.jpg` | "Incoming!" section | Athlete reacting as a ball heads straight toward them during a game |
| 3 | `03-midair.jpg` | "Gravity Is Not Always Flattering" section | Athlete frozen in an awkward midair position during a high school game |
| 5 | `05-background.jpg` | "Never Forget the Background" section | Athlete making a play while a teammate makes a funny face in the background |
| 6 | `06-celebration.jpg` | "Celebration Faces" section | High school teammates celebrating together after a big play |

There is intentionally **no photo** in "The Look Toward the Official" section. It's text only, so don't add a placeholder there. (Filenames skip from 03 to 05 on purpose.)

**Optional:** if `02-incoming` is a sequence, use `02-incoming-a.jpg` through `02-incoming-d.jpg` and show them as a 4-across strip (2×2 on mobile) in place of the single image.

Image rules: `loading="lazy"` on every image except the first, `width`/`height` set from the real dimensions, and `<figure>`/`<figcaption>` if the reference post uses captions. If an image file is missing, leave an HTML comment `<!-- TODO: add 0X-....jpg -->` in its spot and tell me. **Don't substitute other images.**

## 4. Post copy (use exactly)

```
H1: Faces of Sports: The Blooper Reel Nobody Usually Gets to See

When I'm photographing a game, there's a checklist running through my head. Can I see the athlete's eyes? The jersey number? Is the ball in the frame? Does the image actually tell you something about the play? And if I somehow get the scoreboard or game clock in the background too?

Extra points.

Those are the photographs I'm chasing: the fraction of a second when everything comes together. The athlete looks intense, the ball is exactly where it needs to be, the action is sharp, and maybe a defender slides into the frame at just the right moment.

That's the shot.

But here's something you learn quickly when you photograph a lot of sports: not every frame looks quite so heroic when you freeze it at 1/1000 of a second. And honestly? Some of those are my favorites.

H2: Welcome to the Other Side of Sports Photography

For every photo where an athlete looks ready for the cover of a sports magazine, there are several where the human body is doing something absolutely ridiculous. Eyes closed. Tongue out. Cheeks puffed. Hair going in six directions. Someone realizing a ball is coming toward their face about half a second too late.

Those usually aren't the photos that lead off a gallery, but they definitely make me laugh while I'm editing.

I call them the **Faces of Sports**.

(Every photo in this post was shared with the athlete's okay.)

H2: The Game Face

Every athlete has one. The problem is that the game face doesn't always look quite as intimidating when you freeze it mid-play: the clenched teeth, the wide eyes, the squint, the tongue poking out in total concentration.

[PHOTO 1]

Expressions that lasted less than a tenth of a second become permanent the moment the shutter clicks at exactly the right (or wrong) time. During the play, nobody notices. Then I sit down later with thousands of images and find myself staring at one thinking, "What exactly were they doing here?"

H2: Incoming!

There's a very specific face people make when they realize something is heading straight for them at high speed. Basketball, soccer ball, volleyball: it doesn't matter. The face always says the same thing:

**This might hurt.**

Because I'm shooting continuously through the play, sometimes I capture the whole sequence: confidence → concentration → realization → panic → impact → recovery.

[PHOTO 2]

Those may never become the hero image from the game, but they might be the ones the whole team remembers.

H2: Gravity Is Not Always Flattering

Athletes do incredible things: jumping, diving, twisting, changing direction, taking contact and somehow still controlling the ball. In real time, it looks amazing. Freeze the wrong millisecond, though, and the human body suddenly appears to have joints in places it definitely does not.

Basketball players floating sideways. Soccer players with one foot pointing north and the other somehow pointing southwest. Volleyball players suspended midair, looking like they aren't completely sure how they got there.

[PHOTO 3]

It's still great athleticism. It just looks a little different at 1/1000 of a second.

H2: The Look Toward the Official

This one deserves its own category. Anyone who photographs high school sports knows the look. A whistle blows, there's a pause, and somewhere on the court or field, an athlete slowly turns toward the official.

No words required. Confusion, disbelief, negotiation, sometimes all three at once.

Coaches have their own version of this expression, too. Those are usually even better.

H2: Never Forget the Background

The photo you think you took isn't always the photo you actually took. You're locked in on the athlete making the play: perfect expression, sharp eyes, ball in the frame, great body position. Everything works.

Then, while editing, you finally notice the teammate standing twelve feet behind them, making the most ridiculous face imaginable. Now you can't unsee it.

[PHOTO 5]

Sometimes the background wins.

H2: Celebration Faces Might Be the Best Faces

This is where I stop calling these bloopers, because celebration photos are some of the best images you can make at a game. Nobody is posing. Nobody is thinking about how they look. Someone scores, the buzzer sounds, a teammate makes a huge play, and everything just happens: mouths wide open, players screaming, teammates crashing into each other, fists in the air. Sometimes somebody is crying.

[PHOTO 6]

Technically, some of those expressions belong in the Faces of Sports collection, too. But emotionally? They're perfect.

H2: Looking for the One They'll Want to Keep

There's a side of sports photography most people never see. I might come home from a game with 2,000 photos, and then the real work starts. I go through them one by one, looking for the frames that rise above the rest: the ones where the athlete looks strong and the photo actually tells you something about the game.

Sometimes I'll stop on one and immediately think:

**They're going to love this one.**

Maybe it becomes their new profile picture. Maybe their parents share it, or the team posts it. That's really what I'm chasing through all those frames: photos athletes are proud to see themselves in.

And then, usually somewhere between the keepers, I find something completely ridiculous. Which brings us right back to the Faces of Sports.

H2: The Pictures That Usually Stay Hidden

Most of the photos I share publicly show athletes looking their best, and that's intentional. If someone trusts me to photograph them, I want them to feel good about the images. I'm not interested in embarrassing anyone, so plenty of funny frames never leave my computer.

But every once in a while I find one that's funny without being mean: a teammate laughing, a ridiculous reaction, an expression that perfectly captures the moment. Those are different, because sports aren't supposed to be serious all the time, especially high school sports. There's competition, pressure, wins and losses. But there are also teammates laughing on the bench, inside jokes and goofy celebrations that everyone will remember long after they've forgotten the final score.

H2: The Photos I'm Really Looking For

I'll always chase the technically great sports photo: eyes, jersey number, ball, action, clean background. And yes, I'm still ridiculously happy when I get the scoreboard in the frame too.

But photography has taught me that the perfect photo isn't always the one where everything looks perfect. Sometimes it's the one where everything feels real: the strange expression, the uncontrollable laugh, the teammate losing it in the background, the celebration nobody planned. The split second that would have disappeared completely if nobody had pressed the shutter.

Those photos probably won't end up on a recruiting profile. But years from now, they might be the ones that bring back the entire moment.

Every time one pops up on my screen while I'm editing a game gallery, I stop for a second and laugh.

Welcome to the **Faces of Sports**: the blooper reel hiding between the highlight shots.

[CTA BOX, styled like the CTA at the end of the reference post]
Want your athlete's season covered, the highlight shots and the moments in between?
Link: See my sports photography → ../sports.html
Link: Plan a team Media Day → ../mediaday.html
```

## 5. When you're done

1. Confirm the new post, blog index, homepage "From the Field" and sitemap are updated, and that all internal links resolve.
2. Validate the JSON-LD.
3. List any missing images.
