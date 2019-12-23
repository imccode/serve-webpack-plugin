import { Compiler } from 'webpack';
import { ServeWebpackPluginOptions } from './types';
/**
 * server webpack插件
 */
declare class ServeWebpackPlugin {
    options: ServeWebpackPluginOptions;
    constructor(options?: ServeWebpackPluginOptions);
    /**
     * 注入默认热更新服务
     * @param compiler
     */
    injectHotServer(compiler: Compiler): void;
    /**
     * 注入默认配置
     * @param compiler
     */
    inject(compiler: Compiler): void;
    /**
     * 执行插件
     * @param compiler
     */
    apply(compiler: Compiler): void;
}
export * from './types';
export * from './utils';
export { ServeWebpackPlugin };
export default ServeWebpackPlugin;
