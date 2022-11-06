const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@assets": "src/assets",
    "@constants": "src/constants",
    "@styles": "src/styles",
    "@pages": "src/pages",
    "@utils": "src/utils",
    "@store": "src/store",
    "@containers": "src/containers",
    "@helpers": "src/helpers",
    "@types": "src/store/types",
    "@actions": "src/store/actions",
    "@reducers": "src/store/reducers",
    "@selectors": "src/store/selectors",
    "@hooks": "src/hooks",
  })(config);
  return config;
};
