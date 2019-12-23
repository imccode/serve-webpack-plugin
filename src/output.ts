import path from 'path'
import { ServeWebpackPluginOptions } from './types'
import { Compiler, Output } from 'webpack'

/**
 * 修改导出路径配置
 */
export default (options: ServeWebpackPluginOptions = {}, compiler: Compiler) => {
  const { context } = compiler.options
  const output: Output = {
    path: path.resolve(context, 'node_modules/.cache', 'serve'),
    /**
     * 导出文件名设置
     *
     * 根据文件chunk内容生成名字
     */
    filename: 'js/[name].[hash:8].js',
    /**
     * 导出分块(chunk)文件名设置
     *
     * 根据文件chunk内容生成名字
     */
    chunkFilename: 'js/[name].chunk-[hash:8].js'
  }

  compiler.options.output.path = output.path
  compiler.options.output.filename = output.filename
  compiler.options.output.chunkFilename = output.chunkFilename
}
