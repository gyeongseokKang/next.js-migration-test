const path = require("path");
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode: mode,
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    port: 1001,
    compress: true,
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ts|tsx)$/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
