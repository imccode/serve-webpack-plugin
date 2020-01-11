import { Entry, EntryFunc } from 'webpack'
import net from 'net'

/**
 * 构造一个新的entry
 */
const addEntry = (entry: string | string[] | Entry | EntryFunc, firstModule: string) => {
  if (typeof entry === 'string') {
    return [firstModule, entry]
  } else if (Array.isArray(entry)) {
    return [firstModule, ...entry]
  } else if (typeof entry === 'function') {
    // @ts-ignore
    return () => addEntry(entry(), firstModule)
  }

  const newEntry = {}

  Object.keys(entry).forEach(key => {
    newEntry[key] = addEntry(entry[key], firstModule)
  })

  return newEntry
}

/**
 * 检查端口是否占用
 * @param port 端口号
 */
const occupyPort = (port: number) => {
  try {
    const serve = net.createServer().listen(port)
    serve.close()
    return false
  } catch (error) {
    return true
  }
}

export { addEntry, occupyPort }
