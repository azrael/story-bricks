const babel = require('rollup-plugin-babel'),
    postcss = require('rollup-plugin-postcss'),
    resolve = require('rollup-plugin-node-resolve'),
    commonjs = require('rollup-plugin-commonjs'),
    { terser } = require('rollup-plugin-terser'),
    json = require('rollup-plugin-json');

module.exports = {
    input: './src/index.js',
    output: {
        format: 'cjs',
        file: 'dist/index.js',
        esModule: false
    },
    plugins: [
        postcss({
            modules: true
        }),
        resolve({
            browser: true,
            extensions: ['.js', '.jsx', '.css']
        }),
        babel({
            exclude: /node_modules/
        }),
        json(),
        commonjs({
            include: /node_modules/,
            sourceMap: false,
            namedExports: {
                react: ['Children', 'useState']
            }
        }),
        terser()
    ],
    external: ['react', 'react-dom']
};
