const BABEL_LOADER_RULE_TEST = String(/\.(js|mjs|jsx|ts|tsx)$/);

exports.onCreateWebpackConfig = ({ actions, getConfig }, pluginOptions) => {
  const currentConfig = getConfig();

  const babelLoaderRule = currentConfig.module.rules.find(
    (rule) => String(rule.test) === BABEL_LOADER_RULE_TEST
  );

  if (!babelLoaderRule) {
    throw new Error(
      `gatsby-plugin-babel-exclude: Could not find rule for ${BABEL_LOADER_RULE_TEST} from webpack config.`
    );
  }

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
