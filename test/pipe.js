const {expect} = require('chai')
const {pipe} = require('../src')

describe('pipe', () => {
  it('it should execute from left to right', () => {
    const double = value => value * 2
    const add2 = value => value + 2
    const doubleAndAdd2 = pipe(double, add2)

    expect(
      doubleAndAdd2(4)
    ).to.equal(10)
  })
})
