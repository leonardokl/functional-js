const {expect} = require('chai')
const {always} = require('../src')

describe('always', () => {
  it('it should return the argument', () => {
    expect(
      always(42)()
    ).to.equal(42)
  })
})
