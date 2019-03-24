import Vue from 'vue'
import { shallow } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import Login from '@/components/Login'


describe('Login', () => {

  it('renders an error when username is less than 7 characters', () => {
    const userNm= 'benny'
    const wrapper = shallow(Login,{
      username: { userNm }
    })


    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('does not render an error when username is 7 characters or more', () => {
    const userNm= 'benjamin'
    const wrapper = shallow(Login,{
      username: { userNm }
    })


    expect(wrapper.find('.error').exists()).toBeFalsy()
  })

  it('renders an error when password is less than 7 characters', () => {
    const psswrd= 'pass'
    const wrapper = shallow(Login,{
      username: { psswrd }
    });


    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('does not render an error when password is 7 characters or more', () => {
    const psswrd= 'password123'
    const wrapper = shallow(Login,{
      username: { passwrd }
    })

    expect(wrapper.find('.error').exists()).toBeFalsy()
  })

})

describe('Click event', () => {
  it('Click on sign in button calls our method with arguments username and password set', () => {
    const spy = sinon.spy()
    const wrapper = mount(Login, {
      propsData: {
        username: 'benjamin',
        password: 'password123',
        submitted: spy
      }
    })
    wrapper.find('button.login').trigger('click')

    spy.should.have.been.calledWith(username,password)
  })
})
