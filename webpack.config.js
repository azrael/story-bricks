const webpack = require('webpack'),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'index.js'
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
                            'modules': true,
                            'importLoaders': 1,
                            'localIdentName': '[local]--[hash:base64:5]',
                            'camelCase': true
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
        new CleanWebpackPlugin(['dist'], { root: __dirname })
    ]
};

module.exports = config;
