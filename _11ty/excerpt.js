export default eleventyConfig => {
    eleventyConfig.addShortcode("excerpt", function (article) {
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
    );
};