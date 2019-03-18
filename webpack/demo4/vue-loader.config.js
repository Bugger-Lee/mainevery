/**
 * vue-loader 配置
 * 打包处理.vue文件
 * 
 */
module.exports = (isDev) => {
  return {
    preserveWhitepace: true, // 处理空格
    extractCss: true  //提取到css文件 处理热更新
  }
}