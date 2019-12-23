const webpack = require("webpack");
const MessageWebpackPlugin = require('message-webpack-plugin')
const ServeWebpackPlugin = require('../lib')

webpack({
  entry: './example/entry.js',
  mode: 'development',
  plugins: [new ServeWebpackPlugin(), new MessageWebpackPlugin()]
}).watch({}, () => {})