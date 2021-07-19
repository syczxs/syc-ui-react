import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name="xiaomi"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    // const fn = jest.fn()
    let n=1
    const fn=()=>{
      n=2
    }
    const component = mount(<Icon name="xiaomi" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(n).toEqual(2)
  })
})