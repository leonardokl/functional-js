const curry = require('./curry')

const prop = curry(
  (path, object) => object[path]
)

module.exports = prop
