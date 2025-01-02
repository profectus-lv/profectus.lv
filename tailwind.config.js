module.exports = {
    darkMode: "class",
    content: [
        "./content/**/*.{js,njk}",
        "./src/*.js"
    ],
    plugins: [
        function ({ addUtilities }) {
            const extendUnderline = {
                ".underline": {
                    textDecoration: "underline",
                    "text-underline-position": "under"
                }
            };
            addUtilities(extendUnderline);
        }
    ],
    variants: {
        extend: {
            backgroundImage: ["dark"],
            fill: ["dark"],
            fontWeight: ["dark"],
            gradientColorStops: ["dark"],
            stroke: ["dark"]
        }
    },
    theme: {
        fontFamily: {
            'sans': ['Montserrat', 'Verdana', 'Geneva', 'ui-sans-serif', 'sans-serif', 'system-ui'],
            'header': ['"Titillium Web"', 'Verdana', 'Geneva', 'ui-sans-serif', 'sans-serif', 'system-ui']
        },
        extend: {
            backgroundColor: (theme) => ({
                ...theme("colors"),
                "dark-nav": "#242424",
                "dark-body": "#1B1B1E",
                "dark-heading": "#27282B"
            }),
            backgroundImage: () => ({
                "sidebar-dark":
                    "radial-gradient(circle, #242424 0%, #1d1f27 100%)"
            }),
            borderWidth: (theme) => ({
                ...theme("width"),
                1: "1px"
            }),
            gradientColorStops: (theme) => ({
                ...theme("colors"),
                "dark-outer": "#1B1B1E",
                "dark-middle": "#242424"
            }),
            gridTemplateColumns: {
                small: "0 auto",
                regular: "minmax(auto, 0fr) auto;",
                topbar: "auto 6rem"
            },
            lineHeight: {
                pagination: "1.8rem",
                12: "3rem"
            },
            margin: {
                15: "3.75rem"
            },
            maxWidth: {
                content: "80rem"
            },
            colors: {
                "lgtheme": "#a300a3",
                gray: {
                    "350" : "#b7bcc5"
                }
            }
        }
    }
};
