import { createApp, h } from "vue"
import Dialog from './Dialog.vue'
export const openDialog = (options) => {
  console.log(options)
  const {title, content, ok, cancel} = options
  const div = document.createElement("div")
  document.body.appendChild(div)
  const close = () => {
    app.unmount(div)
  }
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newV) => {
            if(newV === false) {
              close()
            }
          },
          ok,
          cancel
        },
        {
          title,
          content
        }
      )
    }
  })
  console.log(app)
  app.mount(div)
}