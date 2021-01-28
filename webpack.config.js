const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key 
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    resolve: {
      modules: [__dirname, 'src', 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.png|svg|jpg|gif$/,
          use: ['file-loader'],
        },
      ],
    },
  };
};
