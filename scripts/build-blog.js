// scripts/build-blog.js
//
// Reads every .md file in /blog/posts/, converts it to a full HTML page
// using /blog/templates/post-template.html, writes the result to
// /blog/<slug>.html, then regenerates /blog/index.html and /sitemap.xml.
//
// Run manually with: node scripts/build-blog.js
// Runs automatically in Amplify via the "build" phase in amplify.yml.

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const SITE_URL = 'https://www.603-in-focus.com';
const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'blog', 'posts');
const TEMPLATES_DIR = path.join(ROOT, 'blog', 'templates');
const OUTPUT_DIR = path.join(ROOT, 'blog');
const SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');

// Static pages to include in the sitemap alongside blog posts.
const STATIC_PAGES = [
    '', 'senior.html', 'sports.html', 'mediaday.html',
    'portrait.html', 'packages.html', 'contact.html',
];

function readTemplate(name) {
    return fs.readFileSync(path.join(TEMPLATES_DIR, name), 'utf8');
}

function fillTemplate(template, values) {
    return template.replace(/{{(\w+)}}/g, (_, key) =>
        Object.prototype.hasOwnProperty.call(values, key) ? values[key] : ''
    );
}

function formatDisplayDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function buildArticleSchema(fm, contentText) {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: fm.title,
        description: fm.description,
        datePublished: fm.date,
        image: `${SITE_URL}${fm.featuredImage}`,
        author: { '@type': 'Person', name: 'Rob Mulligan' },
        publisher: { '@type': 'Organization', name: '603 In Focus' },
        mainEntityOfPage: fm.canonical,
    }, null, 2);
}

function buildPost(filePath) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data: fm, content } = matter(raw);

    const required = ['title', 'description', 'slug', 'date', 'canonical', 'featuredImage', 'featuredImageAlt', 'category', 'internalLink'];
    const missing = required.filter((key) => !fm[key]);
    if (missing.length) {
        throw new Error(`${path.basename(filePath)} is missing frontmatter fields: ${missing.join(', ')}`);
    }

    const htmlContent = marked.parse(content);
    const template = readTemplate('post-template.html');

    const html = fillTemplate(template, {
        title: fm.title,
        description: fm.description,
        canonical: fm.canonical,
        featuredImage: fm.featuredImage,
        featuredImageAlt: fm.featuredImageAlt,
        category: fm.category,
        internalLink: fm.internalLink,
        h1: fm.h1 || fm.title.split('|')[0].trim(),
        displayDate: formatDisplayDate(fm.date),
        content: htmlContent,
        articleSchema: buildArticleSchema(fm, content),
        year: new Date().getFullYear(),
    });

    const outPath = path.join(OUTPUT_DIR, `${fm.slug}.html`);
    fs.writeFileSync(outPath, html, 'utf8');

    return fm;
}

function buildIndex(posts) {
    const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

    const cards = sorted.map((fm) => `
    <a class="blog-post-card" href="/blog/${fm.slug}.html">
      <img src="${fm.featuredImage}" alt="${fm.featuredImageAlt}">
      <div class="blog-post-card-body">
        <p class="blog-category">${fm.category}</p>
        <h2>${(fm.h1 || fm.title.split('|')[0]).trim()}</h2>
        <p class="blog-date">${formatDisplayDate(fm.date)}</p>
      </div>
    </a>`).join('\n');

    const template = readTemplate('index-template.html');
    const html = fillTemplate(template, {
        postCards: cards,
        year: new Date().getFullYear(),
    });

    fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), html, 'utf8');
}

function buildSitemap(posts) {
    const staticUrls = STATIC_PAGES.map((p) => `${SITE_URL}/${p}`.replace(/\/$/, p ? undefined : '/'));
    const blogUrls = posts.map((fm) => fm.canonical);
    const blogIndexUrl = `${SITE_URL}/blog/index.html`;

    const allUrls = [...staticUrls, blogIndexUrl, ...blogUrls];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;

    fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
}

function main() {
    if (!fs.existsSync(POSTS_DIR)) {
        console.log('No /blog/posts directory found — skipping blog build.');
        return;
    }

    const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));
    if (!files.length) {
        console.log('No blog posts found — skipping blog build.');
        return;
    }

    const posts = files.map((f) => buildPost(path.join(POSTS_DIR, f)));

    buildIndex(posts);
    buildSitemap(posts);

    console.log(`Built ${posts.length} blog post(s), blog index, and sitemap.xml.`);
}

main();
