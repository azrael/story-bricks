const appConfig = require('../webpack.config');

module.exports = ({ config }) => {
    config.module.rules = appConfig.module.rules;

    return config;
};
