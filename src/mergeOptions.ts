import { ServeWebpackPluginOptions } from './types'

// 默认配置
export const defaultOptions: ServeWebpackPluginOptions = {
  port: 33333,
  devtool: 'cheap-eval-source-map',
  compress: false,
  hot: true,
  sourceMap: false
}

export default (options: ServeWebpackPluginOptions = {}) => {
  const mergeOptions: ServeWebpackPluginOptions = {
    ...defaultOptions,
    ...options
  }

  if (options.sourceMap) {
    mergeOptions.devtool = '#@cheap-module-eval-source-map'
  }

  return mergeOptions
}
