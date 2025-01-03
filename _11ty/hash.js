import { readFileSync } from "fs";
import { createHash } from "node:crypto";

export default eleventyConfig => {
    // Add custom hash for cache busting
    eleventyConfig.addNunjucksFilter("addHash", function (absolutePath) {
        const hashes = new Map();
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
        const hash = createHash('md5').update(fileContent.toString()).digest('hex');
        hashes.set(absolutePath, hash);
        return `${absolutePath}?hash=${hash}`;
    });
};