const compose = (...functions) =>
  (...args) => functions.reverse().reduce(
    (acc, currentValue) => currentValue(acc), ...args
  )

module.exports = compose
