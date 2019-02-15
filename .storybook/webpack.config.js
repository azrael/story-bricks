const config = require('../webpack.config');

module.exports = storybookBaseConfig => {
    storybookBaseConfig.module.rules = config.module.rules;

    return storybookBaseConfig;
};
