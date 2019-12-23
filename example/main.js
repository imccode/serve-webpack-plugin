const webpack = require('webpack')
const ServeWebpackPlugin = require('../lib')

webpack({
  entry: './example/entry.js',
  mode: 'development',
  plugins: [new ServeWebpackPlugin()]
})
// .watch({}, (error, stats) => {
//   if (!error) return
//   console.log(stats.toString())
// })
