import { Entry, EntryFunc } from 'webpack';
/**
 * 构造一个新的entry
 */
declare const addEntry: (entry: string | string[] | Entry | EntryFunc, firstModule: string) => {};
export { addEntry };
