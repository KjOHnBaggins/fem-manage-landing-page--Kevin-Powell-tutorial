const webpack = require("webpack");
const ASSET_PATH = process.env.ASSET_PATH || "/";
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    // path: path.resolve(__dirname, "dist"),
    publicPath: ASSET_PATH,
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caching",
      template: "./src/template.html",
    }),
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "/src/images/[name].[contenthash].[exit]",
      //       outputPath: "images",
      //     },
      //   },
      // }, deprecated for v5
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
});
