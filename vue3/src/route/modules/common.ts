import img from '../../views/Common/img.vue'
import vedio from '../../views/Common/video.vue'
import wxPay from '../../views/Common/wx-pay.vue'
import paySuccess from '../../views/Common/pay-success.vue'
export default [
  {
    path: '/img',
    component: img,
    meta: {
      title: '约惠七夕 为爱免单'
    }
  },
  {
    path: '/vedio',
    component: vedio,
    meta: {
      title: '鹊桥会-狼人杀活动'
    }
  },
  {
    path: '/wx-pay',
    component: wxPay,
    meta: {
      title: '支付'
    }
  },
  {
    path: '/pay-success',
    component: paySuccess,
    meta: {
      title: '支付成功'
    }
  }
]
