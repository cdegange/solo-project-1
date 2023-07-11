const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  output: {
    publicPath: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      template: "src/index.html",
    }),
  ],
    devServer: {
      port: 5500,
      static: "./dist",
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: "url-loader",
          options: { limit: false },
        },
      ]
    }
  }
