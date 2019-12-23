import Koa from 'koa'
import koaCompress from 'koa-compress'
import koaStatic from 'koa-static'
import { Compiler } from 'webpack'
import { ServeWebpackPluginOptions } from './types'

class Serve {
  private options: ServeWebpackPluginOptions
  private httpServer: Koa<Koa.DefaultState, Koa.DefaultContext>
  private compiler: Compiler

  constructor(options: ServeWebpackPluginOptions, compiler: Compiler) {
    this.options = options
    this.compiler = compiler
    this.httpServer = new Koa()
    this.initServer()
  }

  initServer() {
    const { middleware, compress } = this.options

    this.httpServer.use(koaStatic(this.compiler.options.output.path))

    if (middleware) middleware(this.httpServer)

    if (compress) this.httpServer.use(koaCompress())

    this.httpServer.listen(this.options.port)
  }
}

export default Serve
