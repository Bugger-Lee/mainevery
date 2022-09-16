/*
 * @Author: lijian
 * @since: 2022-09-08 10:57:55
 * @lastTime: 2022-09-08 14:59:14
 * @LastAuthor: lijian
 * @message:
 */
class MVVM {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data

    if (this.$el) {
      new Observe(this.$data)

      this.proxyData(this.$data)

      new Compile(this.$el, this)
    }
  }
}
