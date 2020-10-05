module.exports = {
  devServer: {
    before: require('./mock/index.js')// 引入mock的index文件
  }
}
