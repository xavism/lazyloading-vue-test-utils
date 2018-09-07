import { shallowMount } from '@vue/test-utils'
import Test from '../Test.vue'

it('reproduction', () => {
  const wrapper = shallowMount(Test)
  expect(wrapper.html()).not.toContain('This text should not be appeared')
})