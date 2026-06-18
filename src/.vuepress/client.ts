import { defineClientConfig } from 'vuepress/client'
import { setupRunningTimeFooter } from 'vuepress-theme-hope/presets/footerRunningTime.js'
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import GlobalGitGif from './components/GlobalGitGif.vue'
//@ts-ignore
import 'vuepress-theme-hope/presets/shinning-feature-panel.scss'
//@ts-ignore
import 'vuepress-theme-hope/presets/bounce-icon.scss'
//@ts-ignore
import 'vuepress-theme-hope/presets/round-blogger-avatar.scss'
import { isElementVisible, typeWriter } from './utils/typewriter.js'

export default defineClientConfig({
  rootComponents: [GlobalGitGif],
  setup() {
    setupRunningTimeFooter(
      new Date('2026-04-04'),
      {
        '/': '本站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒',
      },
      true
    )
    let stopTyping: (() => void) | null = null
    let observer: MutationObserver | null = null
    let wasVisible = false

    const startTyping = () => {
      const element = document.querySelector('.vp-blogger-description') as HTMLElement
      const isNowVisible = element && isElementVisible(element)
      if (isNowVisible === wasVisible) return
      wasVisible = isNowVisible
      if (isNowVisible) {
        if (stopTyping) {
          stopTyping()
          stopTyping = null
        }
        stopTyping = typeWriter(element, element.innerText, 150)
      } else {
        if (stopTyping) {
          stopTyping()
          stopTyping = null
        }
      }
    }
    onMounted(() => {
      const sendStatusToParent = () => {
        if (window.parent !== window) {
          const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html'
          window.parent.postMessage(
            {
              type: 'navigation-change',
              isHome: isHome,
              url: window.location.href,
            },
            '*'
          )
        }
      }
      const router = useRouter()
      sendStatusToParent()
      router.afterEach(() => {
        sendStatusToParent()
      })
      startTyping()
      observer = new MutationObserver(() => {
        startTyping()
      })
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class'],
      })
    })
    onUnmounted(() => {
      if (stopTyping) stopTyping()
      if (observer) observer.disconnect()
    })
  },
})
