import { shallowMount, mount } from '@vue/test-utils'
import Parent from '../ParentLazyLoading'

it('reproduction shallow', () => {
  const wrapper = shallowMount(Parent)
  expect(wrapper.html()).not.toContain('This text should not be appeared')
})

it('reproduction mount', () => {
  const wrapper = mount(Parent)
  expect(wrapper.html()).toContain('This text should not be appeared')
})

it('generate snapshots', () => {
  const wrapper = shallowMount(Parent)
  expect(wrapper.html()).toMatchSnapshot()

  const mountedWrapper = mount(Parent)
  expect(mountedWrapper.html()).toMatchSnapshot()
})