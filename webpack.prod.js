const webpack = require("webpack");
const ASSET_PATH = process.env.ASSET_PATH || "/";
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    // path: path.resolve(__dirname, "dist"),
    publicPath: ASSET_PATH,
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // optional
      new CssMinimizerPlugin(),
      new HtmlWebpackPlugin({
        title: "Caching",
        template: "./src/template.html",
        minify: true,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
