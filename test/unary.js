const {expect} = require('chai')
const {unary} = require('../src')

describe('unary', () => {
  it('it should execute a function with only one argument', () => {
    const getParamsLength = (...args) => args.length

    expect(
      unary(getParamsLength)(1, 2)
    ).to.equal(1)
  })
})
