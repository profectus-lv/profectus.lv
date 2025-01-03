import { format, formatISO, getYear } from "date-fns";

export default eleventyConfig => {
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
};