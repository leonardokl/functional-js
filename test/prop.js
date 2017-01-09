const {expect} = require('chai')
const {prop} = require('../src')

describe('prop', () => {
  it('it should get an object attribute', () => {
    const object = {id: 42, name: 'FP'}
    const getId = prop('id')

    expect(
      getId(object)
    ).to.equal(42)
  })

  it('it should get an deep object attribute', () => {
    const object = {data: {id: 42}}
    const getId = prop('data.id')

    expect(
      getId(object)
    ).to.equal(42)
  })
})
