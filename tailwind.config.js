export default {
    content: [
        "./content/**/*.{js,njk}",
        "./src/*.js"
    ],
    safelist: [
        {
            pattern: /grid-cols-.+/,
        }
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
    theme: {
        fontFamily: {
            'body': ['Montserrat', 'Verdana', 'Geneva', 'ui-sans-serif', 'sans-serif', 'system-ui'],
            'header': ['"Titillium Web"', 'Verdana', 'Geneva', 'ui-sans-serif', 'sans-serif', 'system-ui']
        },
        extend: {
            backgroundColor: () => ({
                "sidebar-dark": "#222222",
            }),
            borderWidth: () => ({
                1: "1px"
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
            maxWidth: {
                content: "80rem"
            },
            colors: {
                "accent": "#a300a3"
            }
        }
    }
};
