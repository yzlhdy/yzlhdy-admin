const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
} = require("customize-cra");

const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#d214a2",
      "@font-size-base": "14px",
    },
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),
    "@v": path.resolve(__dirname, "./src/views"),
    "@c": path.resolve(__dirname, "./src/components"),
  })
);
