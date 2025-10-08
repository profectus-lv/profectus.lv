// Transformer to ensure that non-relative links open in a new window
// and have for SEO reasons `rel="noopener"` set.
import { parseDocument } from "htmlparser2";
import { getOuterHTML } from "domutils";
import siteconfig from "../content/_data/siteconfig.js";

const checkHrefs = (href) => {
    return (
        !href.startsWith("/") &&
        !href.startsWith("#") &&
        !href.startsWith(siteconfig.url) &&
        !href.startsWith("about:blank")
    );
};

const options = {
    target: "_blank",
    rel: "noopener",
    merel: "me noopener"
};

// recursive DOM walker to collect anchor nodes
const collectAnchors = (nodes, out) => {
    if (!nodes) return;
    for (const node of Array.isArray(nodes) ? nodes : [nodes]) {
        if (!node) continue;
        if (node.type === "tag" && node.name === "a") {
            out.push(node);
        }
        if (node.children && node.children.length) {
            collectAnchors(node.children, out);
        }
    }
};

const externalContentLinks = async (rawContent, outputPath) => {
    let content = rawContent;
    if (outputPath && outputPath.endsWith(".html")) {
        const dom = parseDocument(String(content));
        const anchors = [];
        collectAnchors(dom.children, anchors);

        anchors.forEach((node) => {
            const href = node.attribs && node.attribs.href;
            const relAttr = node.attribs && node.attribs.rel;
            const me = relAttr && relAttr.includes("me");
            if (href && checkHrefs(href)) {
                node.attribs = Object.assign(node.attribs || {}, {
                    target: options.target,
                    rel: me ? options.merel : options.rel
                });
            }
        });

        // serialize document children back to HTML
        content = (dom.children || []).map(child => getOuterHTML(child)).join("");
    }
    
    return content;
};

export default eleventyConfig => {
    eleventyConfig.addTransform('externalContentLinks', externalContentLinks);
};