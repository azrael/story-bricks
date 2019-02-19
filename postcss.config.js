const autoprefixer = require('autoprefixer'),
    presetEnv = require('postcss-preset-env'),
    cssnano = require('cssnano'),
    normalize = require('postcss-normalize');

module.exports = {
    plugins: [
        normalize,
        presetEnv,
        autoprefixer,
        cssnano
    ]
};
