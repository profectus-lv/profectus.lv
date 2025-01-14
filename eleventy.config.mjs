import { URL } from "url";
import siteconfig from "./content/_data/siteconfig.js";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import excerpt from "./_11ty/excerpt.js";
import readingInfo from "./_11ty/reading-info.js";
import css from "./_11ty/css.js";
import dates from "./_11ty/dates.js";
import hash from "./_11ty/hash.js";
import externalLinks from "./_11ty/external-links.js";
import imageTransform from "./_11ty/image-transform.js";
import htmlMinify from "./_11ty/html-minify.js";

export default eleventyConfig => {
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

    // Set absolute url
    eleventyConfig.addNunjucksFilter("absoluteUrl", (path) => {
        return new URL(path, siteconfig.url).toString();
    });

    // Generate excerpt from first paragraph
    eleventyConfig.addPlugin(excerpt);

    // Extract reading time and word count
    eleventyConfig.addPlugin(readingInfo);

    // Return page link CSS classes
    eleventyConfig.addPlugin(css);

    // Getting and formatting dates
    eleventyConfig.addPlugin(dates);

    // Add custom hash for cache busting
    eleventyConfig.addPlugin(hash);

    // Setting _blank and rel=noopener on external links in markdown content
    eleventyConfig.addPlugin(externalLinks);

    // Transforming images
    eleventyConfig.addPlugin(imageTransform);

    // Minifying HTML
    eleventyConfig.addPlugin(htmlMinify);

    return {
        dir: {
            // Consolidating everything below the `content` folder
            input: "content"
        }
    };
};