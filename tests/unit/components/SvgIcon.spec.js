import { shallowMount } from '@vue/test-utils'
import SvgIcon from '@/components/SvgIcon/index.vue'

function nextTickBuilder(nextTick) {
  return () => new Promise((resolve) => {
    return nextTick(resolve)
  })
}

describe('SvgIcon.vue', () => {
  it('iconClass', () => {
    const wrapper = shallowMount(SvgIcon, {
      propsData: {
        iconClass: 'test'
      }
    })
    expect(wrapper.find('use').attributes().href).toBe('#icon-test')
  })
  it('className', async () => {
    const wrapper = shallowMount(SvgIcon, {
      propsData: {
        iconClass: 'test'
      }
    })
    const nextTick = nextTickBuilder(wrapper.vm.$nextTick)
    expect(wrapper.classes().length).toBe(1)

    wrapper.setProps({ className: 'test' })
    await nextTick()
    expect(wrapper.classes().includes('test')).toBe(true)
  })
})
