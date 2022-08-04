/*
 * @Author: lijian
 * @since: 2022-08-02 16:35:23
 * @lastTime: 2022-08-02 17:12:29
 * @LastAuthor: lijian
 * @message:
 */
import { Icon as IconifyIcon } from '@iconify/vue'
import { defineComponent, h } from 'vue'
export default defineComponent({
  name: 'MyIcon',
  components: { IconifyIcon },
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  render() {
    const attrs = this.$attrs
    return h(
      IconifyIcon,
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
