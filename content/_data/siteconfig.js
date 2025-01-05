module.exports = {
    // Website title, shown in left sidebar and in page title
    title: "Domnīca Profectus",
    // Site URL to generate absolute URLs. Used across the board.
    url: process.env.URL || "https://profectus.lv",
    // Profile image for left sidebar
    image: "/images/profectus-logo-wt.png",
    // Image alt text for left sidebar
    imageAlt: "Domnīca Profectus",
    // Author name, shown in left sidebar, and used in JSON-LD
    author: "Domnīca Profectus",
    // Site description, shown below site image (optional)
    description: "Stiprinām demokrātiju un pilsonisko sabiedrību Latvijā un veicinām tās ilgtspēju",
    // OpenGraph default image, in case you don't have an `image`
    // set in your Markdown frontmatter; relevant for social
    // sharing.
    locale: "lv_LV",
    fonts: {
        body: {
            family: "Montserrat",
            weights: "0,400;0,700;1,400;1,700"
        },
        header: {
            family: "Titillium+Web",
            weights: "0,400;0,500;0,600;0,700"
        }
    },
    openGraphDefaultImage: "/images/profectus-logo-wt.png",
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
        twitter: "ProfectusLV",
        // YouTube ID/Channel
//        youtube: "",
        // Facebook page ID
//        fbPage: "",
        // Facebook profile ID
        fbProfile: "ProfectusLV",
        // Mastodon profile link
//        mastodon: "",
        // Bluesky profile link
//        bluesky: ""
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
    }
};