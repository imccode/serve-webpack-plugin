const webpack = require('webpack')
const MessageWebpackPlugin = require('message-webpack-plugin')
const ServeWebpackPlugin = require('../lib')

process.env.NODE_ENV = 'development'

webpack({
  entry: './example/entry.js',
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  plugins: [new ServeWebpackPlugin(), new MessageWebpackPlugin()]
}).watch({}, () => {})
