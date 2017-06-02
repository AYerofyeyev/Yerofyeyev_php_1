const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src/"),
  entry: {
    hw1: "./js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/script.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    compress: true,
    port: 8000,
    watchContentBase: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css/style.css",
      allChunks: true
    })
  ]
};