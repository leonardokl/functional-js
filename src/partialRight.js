const partialRight = (fn, ...initialArgs) =>
    (...args) => fn(...args, ...initialArgs)

module.exports = partialRight
