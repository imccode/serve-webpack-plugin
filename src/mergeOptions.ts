import { ServeWebpackPluginOptions } from './types'

// 默认配置
export const defaultOptions: ServeWebpackPluginOptions = {
  port: 8080,
  compress: false,
  hot: true,
  historyApiFallback: true
}

export default (options: ServeWebpackPluginOptions = {}) => {
  const mergeOptions: ServeWebpackPluginOptions = {
    ...defaultOptions,
    ...options
  }

  return mergeOptions
}
