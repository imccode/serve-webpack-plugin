import express, { Express } from 'express'
import compression from 'compression'
import httpProxy from 'http-proxy-middleware'
import history from 'connect-history-api-fallback'
import { Compiler } from 'webpack'
import { ServeWebpackPluginOptions } from './types'

class Serve {
  private options: ServeWebpackPluginOptions
  private httpServer: Express
  private compiler: Compiler

  constructor(options: ServeWebpackPluginOptions, compiler: Compiler) {
    this.options = options
    this.compiler = compiler
    this.httpServer = express()
    this.initServer()
  }

  initServer() {
    const { historyApiFallback, compress, proxy } = this.options

    if (compress) this.httpServer.use(compression())

    if (historyApiFallback)
      this.httpServer.use(
        history(typeof historyApiFallback === 'object' ? historyApiFallback : undefined)
      )

    if (proxy) this.setupProxy()

    this.httpServer.use(express.static(this.compiler.options.output.path))

    this.httpServer.listen(this.options.port)
  }

  setupProxy() {
    const proxy = this.options.proxy
    if (Array.isArray(proxy)) {
      proxy.forEach(item => this.httpServer.use(httpProxy(item.context, item)))
    } else {
      if (proxy.context) {
        this.httpServer.use(httpProxy(proxy.context as string | string[], proxy))
      } else {
        Object.keys(proxy).forEach(key => {
          if (proxy[key].target) {
            this.httpServer.use(key, httpProxy(proxy[key]))
          }
        })
      }
    }
  }
}

export default Serve
