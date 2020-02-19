interface Options {
  extra: string | undefined
}

const linkPreClass = (preName: string) => {
  return function linkClass(name?: string, options?: Options) {
    const result = [preName, name].filter(Boolean).join('-')
    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(' ')
    } else {
      return result
    }
  }
}

export { linkPreClass }