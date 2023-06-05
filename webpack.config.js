const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (options = {}) => {
  const { production: isProduction } = options;

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
      filename: "[name].[contenthash].js",
      assetModuleFilename: "static/[name][ext]",
      path: path.resolve("dist"),
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
          },
          use: "ts-loader",
        },
        {
          test: /\.html$/,
          use: "html-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    devtool: isProduction ? undefined : "source-map",
    plugins: [
      new HTMLWebpackPlugin({
        template: "index.html",
      }),
      new ReactRefreshWebpackPlugin({
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        overlay: true,
      }),
    ],
    devServer: {
      open: true,
    },
  };
};