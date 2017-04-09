import React from 'react'
import <%= pascalEntityName %> from './<%= camelEntityName %>Container'
import {shallow} from 'enzyme'
describe('<%= camelEntityName %> container', () => {
  it('should map state to props', () => {
    const state = {counter: {count: 12}}
    const mappedState = mapStateToProps(state)
    expect(mappedState).toEqual({starCount: 12})
  })
  it('should have a propsMapping', () => {
    expect(typeof propsMapping.onPress).toEqual('function')
  })
}
