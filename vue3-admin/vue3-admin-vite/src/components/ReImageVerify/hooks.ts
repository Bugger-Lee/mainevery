/*
 * @Author: lijian
 * @since: 2022-08-16 16:41:08
 * @lastTime: 2022-08-16 16:46:56
 * @LastAuthor: lijian
 * @message:
 */
import { ref } from 'vue'

const domRef = ref<HTMLCanvasElement>()
const imgCode = ref('')
const getImageCode = () => {
  if (!domRef.value) return
  imgCode.value = draw(domRef.value, 120, 40)
}

const setImgCode = (code: string) => {
  imgCode.value = code
}

const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}
const randomColor = (min: number, max: number) => {
  const r = randomNum(min, max)
  const g = randomNum(min, max)
  const b = randomNum(min, max)
  return `rgb(${r},${g},${b})`
}
const draw = (dom: HTMLCanvasElement, width: number, height: number) => {
  let code = ''
  const NUMBER = '0123456789'
  const ctx = dom.getContext('2d')
  if (!ctx) return code
  ctx.fillStyle = randomColor(180, 230)
  ctx.fillRect(0, 0, width, height)
  for (let i = 0; i < 4; i++) {
    const text = NUMBER[randomNum(0, NUMBER.length)]
    code += text
    const fontSize = randomNum(18, 41)
    const deg = randomNum(-30, 30)
    ctx.font = `${fontSize}px Simhei`
    ctx.textBaseline = 'top'
    ctx.fillStyle = randomColor(50, 120)
    ctx.save()
    ctx.translate(30 * i + 15, 15)
    ctx.rotate((deg * Math.PI) / 180)
    ctx.fillText(text, -10, -15)
    ctx.restore()
  }
  for (let i = 0; i < 5; i += 1) {
    ctx.beginPath()
    ctx.moveTo(randomNum(0, width), randomNum(0, height))
    ctx.lineTo(randomNum(0, width), randomNum(0, height))
    ctx.strokeStyle = randomColor(180, 230)
    ctx.closePath()
    ctx.stroke()
  }
  for (let i = 0; i < 41; i += 1) {
    ctx.beginPath()
    ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = randomColor(150, 200)
    ctx.fill()
  }
  return code
}
export default { domRef, imgCode, getImageCode, setImgCode }
