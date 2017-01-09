const {expect} = require('chai')
const {compose} = require('../src')

describe('compose', () => {
  it('it should execute from right to left', () => {
    const double = value => value * 2
    const add2 = value => value + 2
    const doubleAndAdd2 = compose(add2, double)

    expect(
      doubleAndAdd2(4)
    ).to.equal(10)
  })
})
