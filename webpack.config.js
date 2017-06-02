const path = require("path");
// const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    hw1: "./js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "script.js",
    publicPath: "/js/"
  },
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    compress: true,
    port: 8000,
    watchContentBase: true,
    watchOptions: {
      poll: true
    }
  }
};
