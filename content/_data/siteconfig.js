export default {
    // Main website title (displayed in the sidebar and page title)
    title: "Domnīca Profectus",

    // Base site URL for generating absolute URLs (used throughout the site)
    url: "https://profectus.lv",
    // Alternative/internal URLs that should not be treated as external
    internalUrls: [
    ],

    // Sidebar profile image (relative path from the site root)
    image: "/images/profectus-logo-wt.png",
    // Alt text for the sidebar profile image (for accessibility)
    imageAlt: "Domnīca Profectus",

    // Author name (used in meta tags and JSON-LD structured data)
    author: "Domnīca Profectus",
    // Author type ("Person" or "Organization", used in JSON-LD)
    authorType: "Organization",

    // Short site description (displayed below the sidebar image and used in meta tags)
    description: "Stiprinām demokrātiju un pilsonisko sabiedrību Latvijā un veicinām tās ilgtspēju",

    // OpenGraph locale (used for social sharing metadata)
    locale: "lv_LV",
    // Default language for HTML lang and post properties and site strings
    lang: "lv",
 
    // Default OpenGraph image (used if no image is specified in page frontmatter)
    openGraphDefaultImage: "/images/profectus-logo-wt.png",

    // Favicon and icon configuration
    // - 'favicon': main favicon path
    // - 'faviconSizes': sizes for PNG favicons
    // - 'appleiconSizes': sizes for Apple Touch icons
    // - 'webmanifestSizes': sizes for Webmanifest icons
    favicon: "images/profectus-favicon.png",
    faviconSizes: [16, 32, 64],
    appleiconSizes: [180],
    webmanifestSizes: [192, 512],

    // Analytics and tracking IDs (optional)
    pixels: {
        // Facebook App ID
//        fbApp: "",
        // Facebook Pixel ID
//        fbPixel: "",
        // Google Analytics Tag ID
        googleTag: "UA-16574330-6",
    },

    // Pagination configuration
    // - 'postsPerPage': number of posts per paginated page
    // - 'authorLinkPrefix': permalink prefix for author paginated listings
    // - 'tagLinkPrefix': permalink prefix for tag paginated listings
    pagination: {
        postsPerPage: 10,
        authorLinkPrefix: "/author/",
        tagLinkPrefix: "/",
    },
}