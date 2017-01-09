const when = (predicate, fn) =>
  (...args) => predicate(...args) ? fn(...args) : undefined

module.exports = when
