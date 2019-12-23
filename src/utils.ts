import { Entry, EntryFunc } from "webpack"

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

export { addEntry }
