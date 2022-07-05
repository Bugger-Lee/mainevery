/*
 * @Author: lijian
 * @since: 2021-10-19 17:18:07
 * @lastTime: 2021-10-25 14:53:38
 * @LastAuthor: lijian
 * @message: mvvm
 */
const mvvm = function (options = {}) {
  this.$options = options
  let data = (this._data = this.$options.data)
  observe(data)
  for (let key in data) {
    Object.defineProperty(this, key, {
      configurable: true,
      get() {
        return this._data[key]
      },
      set(newVal) {
        this._data[key] = newVal
      }
    })
  }
  new Compile(options.el, this)
}

const Observe = (data) => {
  for (let i in data) {
    let val = data[i]
    observe(val)
    Object.defineProperty(data, i, {
      configurable: true,
      set(newVal) {
        if (val === newVal) return
        val = newVal
        observe(newVal)
      },
      get() {
        return val
      }
    })
  }
}

const observe = (data) => {
  if (!data || typeof data !== 'object') return
  return new Observe(data)
}

const Compile = (el, vm) => {
  vm.$el = document.querySelector(el)
  let fragment = document.createDocumentFragment()
  while ((child = vm.$el.firstChild)) {
    fragment.appendChild(child)
  }
  const replace = (frag) => {
    Array.from(frag.childNodes).forEach((node) => {
      let txt = node.textContent
      let reg = /\{\{(.*?)\}\}/g
      if (node.nodeType === 3 && reg.text(txt)) {
        console.log(RegExp.$1)
        let arr = RegExp.$1.split('.')
        let val = vm
        arr.forEach((key) => {
          val = val[key]
        })
        node.textContent = txt.replace(reg, val).trim()
      }
      if (node.childNodes && node.childNodes.length) {
        replace(node)
      }
    })
    replace(fragment)
    vm.$el.appendChild(fragment)
  }
}
