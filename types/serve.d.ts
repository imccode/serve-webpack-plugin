import { Compiler } from 'webpack';
import { ServeWebpackPluginOptions } from './types';
declare class Serve {
    private options;
    private httpServer;
    private compiler;
    constructor(options: ServeWebpackPluginOptions, compiler: Compiler);
    initServer(): void;
}
export default Serve;
