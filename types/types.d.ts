import { Options } from 'webpack';
import Application from 'koa';
/**
 * server-webpack-plugin 本地开发环境
 */
export interface ServeWebpackPluginOptions {
    /**
     * 开发端口
     */
    port?: number;
    /** 源码编译模式 */
    devtool?: Options.Devtool;
    /**
     * 是否开启压缩，主要返回gzip文件
     */
    compress?: boolean;
    /**
     * 是否开启hot代码热更新
     */
    hot?: boolean;
    /** 是否开启源码映射 */
    sourceMap?: boolean;
    /** koa Application */
    middleware?(server: Application): void;
}
export declare type WSMessageType = 'beforeUpdate' | 'invalidUpdate' | 'update' | 'error';
