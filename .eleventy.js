const path = require('node:path');
const { format, formatISO, getYear } = require("date-fns");
const { MD5 } = require("crypto-js");
const { URL } = require("url");
const { readFileSync } = require("fs");
const siteconfig = require("./content/_data/siteconfig.js");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    // Set Markdown library
    eleventyConfig.setLibrary(
        "md",
        markdownIt({
            html: true,
            xhtmlOut: true,
            linkify: true,
            typographer: true
        }).use(markdownItAnchor)
    );

    // Define passthrough for assets
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy({"content/images" : "images"});

    // Add watch target for JS files (needed for JS bundling in dev mode)
    eleventyConfig.addWatchTarget("./assets/js/");
    // And to make this work we've to disable the .gitignore usage of eleventy.
    eleventyConfig.setUseGitIgnore(false);

    // Define 11ty template formats
    eleventyConfig.setTemplateFormats([
        "njk",
        "md",
        "svg",
        "jpg",
        "css",
        "png"
    ]);

    // Generate excerpt from first paragraph
    eleventyConfig.addShortcode("excerpt", (article) =>
        extractExcerpt(article)
    );

    // Set absolute url
    eleventyConfig.addNunjucksFilter("absoluteUrl", (path) => {
        return new URL(path, siteconfig.url).toString();
    });

    // Extract reading time
    eleventyConfig.addNunjucksFilter("readingTime", (wordcount) => {
        let readingTime = Math.ceil(wordcount / 250);
        if (readingTime === 1) {
            return readingTime + " minūte";
        }
        return readingTime + " minūtes";
    });

    // Extract word count
    eleventyConfig.addNunjucksFilter("formatWords", (wordcount) => {
        return wordcount.toLocaleString("en");
    });

    // Returns CSS class for home page link
    eleventyConfig.addNunjucksFilter("isHomeLink", function (url, pattern) {
        return (pattern === "/" && url === "/") ||
            (pattern === "/" && url.startsWith("/posts"))
            ? "active"
            : "";
    });

    // Returns CSS class for active page link
    eleventyConfig.addNunjucksFilter("isActiveLink", function (url, pattern) {
        return url.length > 1 && url.startsWith(pattern) ? "active" : "";
    });

    // Format dates for sitemap
    eleventyConfig.addNunjucksFilter("sitemapdate", function (date) {
        return format(date, "yyyy-MM-dd");
    });

    // Format dates for JSON-LD
    eleventyConfig.addNunjucksFilter("isodate", function (date) {
        return formatISO(date);
    });

    // Extracts the year from a post
    eleventyConfig.addNunjucksFilter("year", function (post) {
        if (post && post.date) {
            return getYear(post.date);
        }
        return "n/a";
    });

    // Extracts the day of a date
    eleventyConfig.addNunjucksFilter("day", function (date) {
        return format(date, "dd");
    });

    // Extracts the month of a date
    eleventyConfig.addNunjucksFilter("month", function (date) {
        return format(date, "MMM");
    });

    // Extracts readable date of a date
    eleventyConfig.addNunjucksFilter("readableDate", function (date) {
        return format(date, "MMM dd, yyyy");
    });

    // Add custom hash for cache busting
    const hashes = new Map();
    eleventyConfig.addNunjucksFilter("addHash", function (absolutePath) {
        let realPath = absolutePath;
        if (absolutePath.startsWith('/images')) {
            realPath = '/content' + absolutePath;
        }
        const cached = hashes.get(absolutePath);
        if (cached) {
            return `${absolutePath}?hash=${cached}`;
        }
        const fileContent = readFileSync(`${process.cwd()}${realPath}`, {
            encoding: "utf-8"
        }).toString();
        const hash = MD5(fileContent.toString());
        hashes.set(absolutePath, hash);
        return `${absolutePath}?hash=${hash}`;
    });

    // Plugin for setting _blank and rel=noopener on external links in markdown content
    eleventyConfig.addPlugin(require("./_11ty/external-links.js"));

    // Plugin for transforming images
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: "html",

		// Add any other Image utility options here:
        filenameFormat: function (id, src, width, format, options) {
            const extension = path.extname(src);
            const name = path.basename(src, extension);
    
            return `${name}-${id}-${width}w.${format}`;
        },
    
		// optional, output image formats
		formats: ["avif", "webp", "auto"],
		// formats: ["auto"],

		// optional, output image widths
		widths: [1280, 960, 640, 320, "auto"],

		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
			sizes: "auto",
		},
	});

    // Plugin for minifying HTML
    eleventyConfig.addPlugin(require("./_11ty/html-minify.js"));

    return {
        dir: {
            // Consolidating everything below the `content` folder
            input: "content"
        }
    };
};

function extractExcerpt(article) {
    if (!Object.prototype.hasOwnProperty.call(article, "templateContent")) {
        console.warn(
            'Failed to extract excerpt: Document has no property "templateContent".'
        );
        return null;
    }

    const content = article.templateContent;

    const excerpt = content.slice(0, content.indexOf("\n"))
        .slice(0, content.lastIndexOf(' ', 350)) //Cap at full words before 200 character cap
        .trim()
        .concat("...");

    return excerpt;
}
