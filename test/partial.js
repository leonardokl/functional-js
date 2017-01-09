const {expect} = require('chai')
const {partial} = require('../src')

describe('partial', () => {
  it('it should partially apply the arguments from left to right', () => {
    const sum = (...args) => args.reduce((acc, curValue) => (acc + curValue))
    const partialSum = partial(sum, '4')

    expect(
      partialSum('2')
    ).to.equal('42')
  })
})
