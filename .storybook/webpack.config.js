module.exports = ({ config }) => {
    config.module.rules = [
        {
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules|dist/
        }
    ];

    return config;
};
