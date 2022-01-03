function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');

}

interface Options {
  extra: string | undefined

}
interface ClassToggles {
  [x: string]: boolean

}
function makeClassNames(prefix: string) {

  return function x(name: String, options: Options) {
    let name2
    if (typeof name === 'string' || typeof name === 'undefined') {
      name2 = name
    } else {
      name2 = Object.entries(name).filter((item) => item[1]).map((item) => item[0])
      result =name2.map(n=>{
        [prefix,n].filter(Boolean).join("-")
      })
    }
    // const result = [prefix, name].filter(Boolean).join("-")
    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(' ')

    } else {
      return result

    }

  }

}
export { classes, makeClassNames };
