const isProduction = process.env.NODE_ENV === "production";
const cssnano = require("cssnano");

// We want optimization only in production
if (isProduction) {
    cssnano({ preset: 'cssnano-preset-default' });
}

const plugins = {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: isProduction ? {} : false
};

module.exports = {
    plugins
};
