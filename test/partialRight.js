const {expect} = require('chai')
const {partialRight} = require('../src')

describe('partialRight', () => {
  it('it should partialy apply the arguments from right to left', () => {
    const sum = (...args) => args.reduce((acc, curValue) => (acc + curValue))
    const partialSum = partialRight(sum, '2')

    expect(
      partialSum('4')
    ).to.equal('42')
  })
})
