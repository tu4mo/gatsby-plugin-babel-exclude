const BABEL_LOADER_RULE_TEST = String(/\.(js|mjs|jsx)$/);

exports.onCreateWebpackConfig = ({ actions, getConfig }, pluginOptions) => {
  const currentConfig = getConfig();

  const babelLoaderRule = currentConfig.module.rules.find(
    (rule) => String(rule.test) === BABEL_LOADER_RULE_TEST
  );

  currentConfig.module.rules = [
    ...currentConfig.module.rules.filter(
      (rule) => String(rule.test) !== BABEL_LOADER_RULE_TEST
    ),
    {
      ...babelLoaderRule,
      exclude: pluginOptions.exclude,
    },
  ];

  actions.replaceWebpackConfig(currentConfig);
};
