import path from 'path'
import { Compiler, HotModuleReplacementPlugin } from 'webpack'
import WsServe from './hot/wsServe'
import mergeOptions from './mergeOptions'
import output from './output'
import Serve from './serve'
import { ServeWebpackPluginOptions } from './types'
import { addEntry } from './utils'

/**
 * server webpack插件
 */
class ServeWebpackPlugin {
  options: ServeWebpackPluginOptions = {}

  constructor(options: ServeWebpackPluginOptions = {}) {
    this.options = mergeOptions(options)
  }

  /**
   * 注入默认热更新服务
   * @param compiler
   */
  injectHotServer(compiler: Compiler) {
    const { entry } = compiler.options
    compiler.options.plugins.push(new HotModuleReplacementPlugin())
    const serve = new WsServe(this.options, compiler)
    const entryFileName = path.resolve(__dirname, `./hot/client?wsPort=${serve.wsPort || 55555}`)
    compiler.options.entry = addEntry(entry, entryFileName)
  }

  /**
   * 注入默认配置
   * @param compiler
   */
  inject(compiler: Compiler) {
    output(this.options, compiler)
    compiler.options.stats = 'none'
    compiler.options.watch = true
    compiler.options.devtool = this.options.devtool
  }

  /**
   * 执行插件
   * @param compiler
   */
  apply(compiler: Compiler) {
    if (compiler.options.mode !== 'development') return
    this.inject(compiler)
    new Serve(this.options, compiler)
    if (this.options.hot) this.injectHotServer(compiler)
  }
}

export * from './types'
export * from './utils'
export { ServeWebpackPlugin }
export default ServeWebpackPlugin
module.exports = ServeWebpackPlugin
