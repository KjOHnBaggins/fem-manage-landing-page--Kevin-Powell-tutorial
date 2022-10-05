const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
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
};
