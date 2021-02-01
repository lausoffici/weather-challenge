const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = () => {
  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.[fullhash].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
      }),
      new webpack.EnvironmentPlugin({
        LOCATION_API_URL: "https://ipapi.co/json/",
        WEATHER_API_URL:
          "https://api.openweathermap.org/data/2.5/weather?appid=6ad6e978f38ad3990ed04ecb49e9dd66&units=metric",
        FORECAST_API_URL:
          "https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=6ad6e978f38ad3990ed04ecb49e9dd66",
      }),
    ],
    resolve: {
      modules: [__dirname, "src", "node_modules"],
      extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: require.resolve("babel-loader"),
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.png|svg|jpg|gif$/,
          use: ["file-loader"],
        },
      ],
    },
  };
};
