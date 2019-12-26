const MessageWebpackPlugin = require('message-webpack-plugin')
const ServeWebpackPlugin = require('../lib')

module.exports = {
  entry: './example/entry.js',
  plugins: [new ServeWebpackPlugin(), new MessageWebpackPlugin()]
}
