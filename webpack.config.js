const webpack = require('webpack'),
    path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                include: path.resolve(__dirname, '../'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]'
                            },
                            importLoaders: 1,
                            localsConvention: 'camelCaseOnly'
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production'
        }),
        new CleanWebpackPlugin()
    ]
};

module.exports = config;
