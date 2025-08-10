const excerpt = (article) => {
    const content = article.templateContent;
    const firstLine = content.indexOf("\n") > 0 ? content.indexOf("\n") : content.length; // Cap at first line
    const wordCap = content.lastIndexOf(' ', 350); // Cap at full words before 350 character cap

    let excerpt = content.slice(0, Math.min(firstLine, wordCap)).trim();
    if (excerpt.length < content.length) {
        excerpt += "…";
    }

    return excerpt;
};

export default eleventyConfig => {
    eleventyConfig.addShortcode("excerpt", excerpt); 
};