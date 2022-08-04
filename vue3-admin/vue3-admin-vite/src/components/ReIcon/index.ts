/*
 * @Author: lijian
 * @since: 2022-08-03 16:14:12
 * @lastTime: 2022-08-03 16:49:30
 * @LastAuthor: lijian
 * @message:
 */
import { Icon as MyIcon } from '@iconify/vue'
import { Component, defineComponent, h } from 'vue'

interface iconType {
  inline?: boolean
  width?: string | number
  height?: string | number
  horizontalFlip?: boolean
  verticalFlip?: boolean
  flip?: string
  rotate?: number | string
  color?: string
  horizontalAlign?: boolean
  verticalAlign?: boolean
  align?: string
  online?: boolean
  onLoad?: Function
  includes?: Function

  //  all icon
  style?: object
}

const MyIcons = defineComponent({
  name: 'MyIcon',
  components: { MyIcon },
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  render() {
    const attrs = this.$attrs
    return h(
      MyIcon,
      {
        icon: `${this.icon}`,
        ...attrs
      },
      {
        default: () => []
      }
    )
  }
})
const useRenderIcons = (icon: string, attrs?: iconType) => {
  return defineComponent({
    name: 'MyIcon',
    render() {
      return h(
        MyIcons,
        {
          icon: icon,
          ...attrs
        },
        { default: () => [] }
      )
    }
  })
}

export { MyIcons, useRenderIcons }
