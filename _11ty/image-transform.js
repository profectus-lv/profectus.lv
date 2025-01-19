import path from "node:path";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default eleventyConfig => {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        // which file extensions to process
        extensions: "html",

        // filename configuration
        outputDir: "./_site/images/",
        urlPath: "/images/",
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
};