import { shallowMount } from '@vue/test-utils'
import Hamburger from '@/components/Hamburger/index.vue'

function nextTickBuilder(nextTick) {
  return () => new Promise((resolve) => {
    return nextTick(resolve)
  })
}

describe('Hamburger.vue', () => {
  it('toggle click', () => {
    const wrapper = shallowMount(Hamburger)
    const mockFn = jest.fn()
    wrapper.vm.$on('toggleClick', mockFn)
    wrapper.find('.hamburger').trigger('click')
    expect(mockFn).toBeCalled()
  })
  it('prop isActive', async () => {
    const wrapper = shallowMount(Hamburger)
    const nextTick = nextTickBuilder(wrapper.vm.$nextTick)

    wrapper.setProps({ isActive: true })
    await nextTick()
    expect(wrapper.contains('.is-active')).toBe(true)

    wrapper.setProps({ isActive: false })
    await nextTick()
    expect(wrapper.contains('.is-active')).toBe(false)
  })
})
