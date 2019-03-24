import Vue from 'vue'
import { shallow } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import MyAccount from '@/components/MyAccount'


describe('MyAccount', () => {

  it('renders an error when username is less than 7 characters', () => {
    const userNm= 'benny'
    const wrapper = shallow(MyAccount,{
      username: { userNm }
    })


    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('does not render an error when username is 7 characters or more', () => {
    const userNm= 'benjamin'
    const wrapper = shallow(MyAccount,{
      username: { userNm }
    })


    expect(wrapper.find('.error').exists()).toBeFalsy()
  })

  it('renders an error when height is less than 7 characters', () => {
    const hight= '5foot10'
    const wrapper = shallow(MyAccount,{
      height: { hight }
    });


    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('does not render an error when password is 7 characters or more', () => {
    const hight= '5 foot 10'
    const wrapper = shallow(MyAccount,{
      height: { hight }
    })

    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
  
  it('does not render an error when weight is a double', () => {
    const wight= 160.0
    const wrapper = shallow(MyAccount,{
      weight: { wight }
    })

    expect(wrapper.find('.error').exists()).toBeFalsy()
  })

  it('renders an error when weight is not a double', () => {
    const wight= 'hello'
    const wrapper = shallow(MyAccount,{
      weight: { wight }
    })

    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('renders an error when weight is not a double', () => {
    const wight= 'hello'
    const wrapper = shallow(MyAccount,{
      weight: { wight }
    })

    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('renders an error when target date is not equal to 10 characters', () => {
    const date= '10-10-100'
    const wrapper = shallow(MyAccount,{
      targetDate: { date }
    })

    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('does not render an error when target date is equal to 10 characters', () => {
    const date= '10-10-2020'
    const wrapper = shallow(MyAccount,{
      targetDate: { date }
    })

    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
  it('does not render an error when targetWeight is a double', () => {
    const targetWight= 150.0
    const wrapper = shallow(MyAccount,{
      targetWeight : { targetWight }
    })

    expect(wrapper.find('.error').exists()).toBeFalsy()
  })

  it('renders an error when targetWeight is not a double', () => {
    const targetWight= 'hello'
    const wrapper = shallow(MyAccount,{
      targetWeight: { targetWight }
    })
    expect(wrapper.find('.error').exists()).toBeTruthy()
})



describe('Click event', () => {
  it('Click on add user information calls our method with arguments username, height, weight, targetWeight and targetDate set', () => {
    const spy = sinon.spy()
    const wrapper = mount(MyAccount, {
      propsData: {
        username: 'matthew',
        height: '5 foot 10',
        weight: 160.0,
        targetDate: '10-10-2020',
        targetWeight: 150.0,
        submitted: spy
      }
    })
    wrapper.find('button.changeUserInfo').trigger('click')

    spy.should.have.been.calledWith(username,height,weight,targetDate,targetWeight)
  })
})
})
