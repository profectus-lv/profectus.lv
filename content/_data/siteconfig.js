export default {
    // Website title, shown in left sidebar and in page title
    title: "Domnīca Profectus",
    // Site URL to generate absolute URLs. Used across the board.
    url: process.env.URL || "https://profectus.lv",
    // Profile image for left sidebar
    image: "/images/profectus-logo-wt.png",
    // Image alt text for left sidebar
    imageAlt: "Domnīca Profectus",
    // Header image fot the landing page
    header: "",
    // Image alt text for the header
    headerAlt: "",
    // Author name, used in JSON-LD
    author: "Domnīca Profectus",
    // Site description, shown below site image (optional)
    description: "Stiprinām demokrātiju un pilsonisko sabiedrību Latvijā un veicinām tās ilgtspēju",
    // Locale is used for OpenGraph and HTML lang property
    locale: "lv_LV",
    // Defines fonts to load from Google Fonts
    // Two fonts are used in this template: header and body
    // Weights need to be defined as well
    // Weights starting with "0," are non-italic
    // Weights starting with "1," are italic
    // Value of "swap" controls "font-display: swap" behavior:
    // - disabled by default to avoid flash unstyled text (FOUT)
    // - if flash of invisible text (FOIT) is more disturbing, enable it
    fonts: {
        swap: false,
        body: {
            family: "Montserrat",
            weights: "0,400;0,700;1,400;1,700"
        },
        header: {
            family: "Titillium+Web",
            weights: "0,400;0,500;0,600;0,700"
        }
    },
    // OpenGraph default image, in case you don't have an `image`
    // set in your Markdown frontmatter; relevant for social
    // sharing.
    openGraphDefaultImage: "/images/profectus-logo-wt.png",
    // Collection of Favicons, Apple Touch icons and Webmanifest icons
    favicons: {
        "16x16": "/assets/favicons/profectus-favicon-16.png",
        "32x32": "/assets/favicons/profectus-favicon-32.png",
        "64x64": "/assets/favicons/profectus-favicon-64.png"
    },
    appleicons: {
        "180x180": "/assets/favicons/profectus-favicon-180.png"
    },
    webmanifest: {
        "180x180": "/assets/favicons/profectus-favicon-180.png",
        "512x512": "/assets/favicons/profectus-favicon-512.png"
    },
    // Home menu name
    menuHome: "Uz sākumu",
    // Other menu links
    menuItems: {
        "Raksti": "/raksti/",
        "Notikumi": "/notikumi/",
        "Par mums": "/par-mums/",
        "Ziedo!": "/ziedo/"
    },
    // Social links (optional, used for links in the left sidebar)
    social: {
        // GitHub ID
//        github: "",
        // Linkedin ID
//        linkedin: "",
        // Twitter ID
        twitter_x: "ProfectusLV",
        // YouTube ID/Channel
//        youtube: "",
        // Facebook page ID
//        fbPage: "",
        // Facebook profile ID
        fbProfile: "ProfectusLV",
        // Mastodon profile link
//        mastodon: "",
        // Bluesky profile link
//        bluesky: "",
        // Instagram profile ID
//        instagram: "-",
        // Threads profile ID
//        threads: "-",
    },
    // Analytics pixels and other IDs for sharing and tracking
    // (optional)
    pixels: {
        // Facebook App ID
//        fbApp: "",
        // Facebook Pixel
//        fbPixel: "",
        // Google Analytics ID
        googleTag: "UA-16574330-6",
    },
    features: {
        // Should the postproperties be displayed?
        postproperties: true,
        // Should JSON-LD be compiled and included?
        json_ld: true,
        // Should sitemap be included?
        sitemap: true,
        // Should the local javascript be included?
        js: true,
        // Should sharer be enabled on pages and posts?
        sharer: true,
        // Should previous/next post navigation be enabled on posts?
        prevnext: true,
        // Regular base template (regular) or alternative base template without sidebar and other features (primitive)
        base: "regular",
        // Top bar: none (false), always present (static), appearing and disappearing on scroll (dynamic)
        topbar: "dynamic",
    }
};