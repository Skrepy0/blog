import { defineClientConfig } from 'vuepress/client'
import { setupRunningTimeFooter } from 'vuepress-theme-hope/presets/footerRunningTime.js'
//@ts-ignore
import 'vuepress-theme-hope/presets/shinning-feature-panel.scss'
//@ts-ignore
import 'vuepress-theme-hope/presets/bounce-icon.scss'
//@ts-ignore
import 'vuepress-theme-hope/presets/round-blogger-avatar.scss'

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date('2026-04-04'),
      {
        '/': '本站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒',
      },
      true
    )
  },
})
