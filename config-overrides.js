const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require('react-app-rewired')
const rewireSass = require('react-app-rewire-scss')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule => rule.loader && typeof rule.loader === 'string' && rule.loader.includes('ts-loader')
  )

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory({
          libraryDirectory: 'es',
          libraryName: 'antd',
          style: true,
        }),
      ],
    }),
  }
  config = rewireSass(config, env)
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      // '@border-radius-base': '2px',
      '@breadcrumb-separator-margin': '0 4px',
      '@component-background': '#ffdead',
      '@font-family': "'Montserrat', 'PingFang SC', 'Microsoft YaHei', sans-serif",
      '@primary-color': '#FF9300',
      '@text-color': '#483c32',
      '@text-color-secondary': 'rgba(0,0,0,.54)',
    },
  })(config, env)

  return config
}
