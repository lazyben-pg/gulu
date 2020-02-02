const linkPreClass = (preName: string) => {
  return function linkClass(name?: string) {
    return [preName, name].filter(Boolean).join('-')
  }
}

export { linkPreClass }