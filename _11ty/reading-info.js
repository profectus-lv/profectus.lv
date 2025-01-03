import sitestrings from "../content/_data/sitestrings.js";

export default eleventyConfig => {
    // Extract reading time
    eleventyConfig.addNunjucksFilter("readingTime", (wordcount) => {
        let readingTime = Math.ceil(wordcount / 250);
        if (readingTime === 1) {
            return readingTime + " " + sitestrings.minute;
        }
        return readingTime + " " + sitestrings.minutes;
    });

    // Extract word count
    eleventyConfig.addNunjucksFilter("formatWords", (wordcount) => {
        return wordcount.toLocaleString("en");
    });
};