const MessageWebpackPlugin = require('message-webpack-plugin')
const ServeWebpackPlugin = require('../lib')

module.exports = {
  entry: './example/entry.js',
  mode: 'development',
  plugins: [new ServeWebpackPlugin(), new MessageWebpackPlugin()]
}
