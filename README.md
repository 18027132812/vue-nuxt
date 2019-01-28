# 运行项目
`npm run dev`

# 打包项目
`npm run generate`

# 配置 ui 依赖
##### 1, 在 plugins 目录下新建依赖移入文件
`iview.js`
##### 2, 在 nuxt.config.js配置 如下：
`
  plugins: [
    {
      src: '~plugins/iview',
      ssr: true
    }
  ],
  css: [
    'iview/dist/styles/iview.css'
  ]
`
# 路由守卫
##### 1， 在plugins目录下简历route.js
`
  export default ({ app }) => {
    app.router.afterEach((to, from) => {
      console.log(to.path)
    })
  }
`
##### 2， 在 nuxt.config.js中添加配置plugins即可
`
  plugins: [
    '~/plugins/route'
  ]
`
