const {expect} = require('chai')
const {identity} = require('../src')

describe('identity', () => {
  it('it should return the argument', () => {
    expect(
      identity(42)
    ).to.equal(42)
  })
})
