import { defineUserConfig, Page } from 'vuepress'
import theme from './theme.js'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
const __dirname = import.meta.dirname || getDirname(import.meta.url)
export default defineUserConfig({
  base: '/',
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: 'SkrepyのBlog',
  description: 'SkrepyのBlog',

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
})
