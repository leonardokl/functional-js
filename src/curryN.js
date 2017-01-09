const curryN = (arity, fn, ...initialArgs) => {
  const nextCurried = acc => (...nextArgs) => {
    const args = acc.concat(nextArgs)

    if (args.length >= arity) return fn(...args)

    return nextCurried(args)
  }

  return nextCurried(initialArgs)
}

module.exports = curryN
