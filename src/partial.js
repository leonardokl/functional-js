const partial = (fn, ...initialArgs) =>
    (...args) => fn(...initialArgs, ...args)

module.exports = partial
