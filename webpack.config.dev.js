const isDevelopment = process.env.NODE_ENV !== "production";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const combineLoaders = require("webpack-combine-loaders");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { DefinePlugin } = require("webpack");
const path = require("path");
const deploymentEnvConfigs = require(`./.env.${process.env.ENV}`);

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/app/index",
  devtool: "source-map",
  output: {
    filename: isDevelopment ? "[name].js" : "[name].[hash].js",
    publicPath: "/",
    path: path.join(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions" } }
              ],
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              "react-hot-loader/babel"
            ]
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: !isDevelopment }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            query: {
              modules: true
            }
          }
        ])
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html"
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: "./tsconfig.dev.json"
    }),
    new DefinePlugin(deploymentEnvConfigs)
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: path.join(__dirname, "build")
  }
};
