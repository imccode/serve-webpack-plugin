import ConnectHistoryApiFallback from 'connect-history-api-fallback'
import HttpProxyMiddleware from 'http-proxy-middleware'

/**
 * server-webpack-plugin 本地开发环境
 */
export interface ServeWebpackPluginOptions {
  /**
   * 开发端口
   * 
   * 默认：8080
   */
  port?: number
  /**
   * 是否开启压缩，主要返回gzip文件
   * 
   * 默认：true
   */
  compress?: boolean
  /**
   * 是否开启hot代码热更新
   * 
   * 默认：true
   */
  hot?: boolean
  /**
   * 当使用 HTML5 History API
   * 
   * 默认：true
   */
  historyApiFallback?: boolean | ConnectHistoryApiFallback.Options
  /** 
   * http服务代理
   */
  proxy?: ProxyContext | ProxyContext[] | {
    [key: string]: string | HttpProxyMiddleware.Config
  }
}

/**
 * 数组形式的代理元素值
 */
interface ProxyContext extends HttpProxyMiddleware.Config {
  context: string | string[]
}

export type WSMessageType = 'beforeUpdate' | 'invalidUpdate' | 'update' | 'error'
