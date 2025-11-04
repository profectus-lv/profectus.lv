# Think tank "Profectus" - [profectus.lv](https://profectus.lv)

This is the main webpage for the think tank "Profectus" (Domnīca Profectus). It is based on the [Eleventy Markdown Prime](https://github.com/lastguru-net/emp) template by [Dmitry Golubev](https://lastguru.lv).

## Features

- Eleventy 3 theme with Tailwind CSS 4
- Fast and minimalistic responsive design
- Simple grayscale color palette with a configurable accent color
- Content is exclusively pre-rendered (static site), but supports supplemental JavaScript
- Can be used for a text-based (Markdown) blog or simple page
- Logo, site name and main menu are placed on the left sidebar
- Social network links on the sidebar
- Automatic post list (index), tag and author pages with pagination
- Optional post thumbnails in post lists
- Author business cards on author pages (photo, bio, links)
- Footer component with copyright/privacy information
- Can be easily localized
- Convenient configuration with many options
- Automatic responsive image optimization (generating AVIF and WEBP with different sizes)
- Comprehensive JSON-LD structured data support
- SEO optimization, OpenGraph and Twitter Cards
- RSS, Atom and JSON feeds
- Special pages: Error 404, robots.txt, sitemap.xml
- Progressive Web Apps (PWA) support

## Installation

```
npm install
```

## Local testing

```
npm run build
```

## Running in production

Some features are disabled by default for testing and debugging purposes. When running in production, ensure that the `NODE_ENV` variable is set to `production`.

## Additional info

More info on running, modifying and configuring the template is available on the its demo page: [Eleventy Markdown Prime Demo](https://emp-starter.lastguru.dev).
