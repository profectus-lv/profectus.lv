import siteconfig from "../content/_data/siteconfig.js";
import { DateTime } from "luxon";

export default eleventyConfig => {
    // Format dates for sitemap
    eleventyConfig.addNunjucksFilter("isoDate", function (date) {
        const dt = DateTime.fromISO(date.toISOString());
        return dt.toISODate();
    });

    // Format dates for JSON-LD
    eleventyConfig.addNunjucksFilter("isoDateTime", function (date) {
        const dt = DateTime.fromISO(date.toISOString());
        return dt.toISO();
    });

    // Extracts readable date of a date
    eleventyConfig.addNunjucksFilter("readableDate", function (date) {
        const dt = DateTime.fromISO(date.toISOString());
        return dt.setLocale(siteconfig.lang || "en").toLocaleString(DateTime.DATE_MED);
    });

    // Shortcode for current year
    eleventyConfig.addShortcode("year", function () {
        return new Date().getFullYear();
    });
};