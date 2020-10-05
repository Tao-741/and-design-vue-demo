const Mock = require('mockjs')
const id = Mock.mock('@id')
console.log(id)

const obj = Mock.mock({
  id: '@id()', // 随机生成的id
  username: '@cname()', // 随机生成中文名字
  date: '@date()', // 随机生成日期
  // Random.image( size, background, foreground, format, text )
  avatar: "@image('200x100', '#894FC4', '#FFF', 'png', '!')",
  description: '@cparagraph()', // 随机生成一段文字
  ip: '@ip',
  email: '@email()'
})
console.log(obj)
