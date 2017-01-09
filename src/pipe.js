const pipe = (...functions) =>
  (...args) => functions.reduce(
    (acc, currentValue) => currentValue(acc), ...args
  )

module.exports = pipe
