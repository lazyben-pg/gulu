/*
使得react兼容多个class
*/

function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ')
}



interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [K: string]: boolean
}

const linkPreClass = (preName: string) => {

  return function linkClass(name?: string | ClassToggles, options?: Options) {
    //{'': true, hasSider: true, active:false}
    //还可以重构，不过可读性会变差。
    let result,
      name2
    if (typeof name === 'string' || typeof name === 'undefined') {
      name2 = name
      result = [preName, name2].filter(Boolean).join('-')
    } else {
      name2 = Object.entries(name).filter(vt => vt[1]).map(vt => vt[0]) //['', 'hasSider']
      console.log(name2)
      result = name2.map(vt => [preName, vt].filter(Boolean).join('-')).join(' ') // 'gulu-layout gulu-layout-hasSider'
    }

    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(' ')
    } else {
      return result
    }
  }

}

export default classes
export { linkPreClass }