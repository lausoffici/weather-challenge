const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = () => {
  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.[hash].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new webpack.EnvironmentPlugin({
        LOCATION_API_URL: "http://ip-api.com/json",
        WEATHER_API_URL:
          "http://api.openweathermap.org/data/2.5/weather?appid=699c25a797f6faeb1f3bf545c2fecdbf&units=metric",
        FORECAST_API_URL:
          "http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=699c25a797f6faeb1f3bf545c2fecdbf",
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
