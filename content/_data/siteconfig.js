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
    openGraphDefaultImage: "/images/profectus-logo-wt.png",
    // Home menu name
    menuHome: "Uz sākumu",
    // Other menu links
    menuItems: {
        0: {
            name: "Raksti",
            link: "/raksti/"
        },
        2: {
            name: "Notikumi",
            link: "/notikumi/"
        },
        3: {
            name: "Par mums",
            link: "/par-mums/"
        },
        4: {
            name: "Ziedo!",
            link: "/ziedo/"
        }
    },
    // GitHub ID (optional, remove if not needed), used for link in the left sidebar
//    socialGitHub: "",
    // LinkedIn ID  (optional, remove if not needed), used for link in the left sidebar
//    socialLinkedIn: "",
    // Twitter ID  (optional, remove if not needed), used for link in the left sidebar, and for OpenGraph sharing information
    socialTwitter: "ProfectusLV",
    // YouTube ID/Channel  (optional, remove if not needed), used for link in the left sidebar
//    socialYouTube: "",
    // Facebook page  (optional, remove if not needed), used for link in the left sidebar
//    socialFBPage: "",
    // Personal Facebook profile  (optional, remove if not needed), used for link in the left sidebar
    socialFBProfile: "ProfectusLV",
    // Google Analytics ID  (optional, remove if not needed), used for... well, Google Analytics
    googleAnalytics: "UA-16574330-6",
    // Facebook App ID (optional, remove if not needed)
//    fbAppId: "",
    // Facebook Pixel (optional, remove if not needed)
//    fbPixelId: "",
    // Mastodon profile link
//    mastodonProfile: "",
    // Bluesky profile link
//    blueskyProfile: "",
};