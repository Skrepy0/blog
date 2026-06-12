<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const showImage = ref(false)
let isMobile = false
let longPressTimer: ReturnType<typeof setTimeout> | null = null
let touchStartPos = { x: 0, y: 0 }

const getLogoElement = () => {
  return [
    document.getElementsByClassName('vp-nav-logo')[0] as HTMLImageElement | null,
    document.getElementsByClassName('vp-blog-hero-image')[0] as HTMLImageElement | null,
    document.getElementsByClassName('vp-blogger-avatar')[0] as HTMLImageElement | null,
    document.querySelector('.vp-portfolio-avatar > img') as HTMLImageElement | null,
  ]
}

const updateLogoSrc = () => {
  const logo = getLogoElement()
  if (logo) {
    logo.forEach((item) => {
      if (item) item.src = showImage.value ? '/assets/images/sibuxiang.jpg' : '/avatar.png'
    })
  }
}

const toggleImage = () => {
  showImage.value = !showImage.value
  localStorage.setItem('showGitGif', showImage.value ? 'true' : 'false')
  updateLogoSrc()
}

const isContains = (e: HTMLElement, logo: (HTMLImageElement | null)[]) => {
  for (let i = 0; i < logo.length; i++) {
    const img = logo[i]
    if (img && img.contains(e)) return true
  }
  return false
}

const onGlobalTouchStart = (e: TouchEvent) => {
  const target = e.target as HTMLElement
  const logo = getLogoElement()
  if (!logo || !isContains(target, logo)) return

  e.preventDefault()
  const touch = e.touches[0]
  touchStartPos = { x: touch.clientX, y: touch.clientY }

  longPressTimer = setTimeout(() => {
    toggleImage()
    longPressTimer = null
  }, 1000)
}

const onGlobalTouchEnd = (e: TouchEvent) => {
  const logo = getLogoElement()
  if (!logo) return
  if (longPressTimer) {
    clearTimeout(longPressTimer)
    longPressTimer = null
  }
}

const onGlobalTouchCancel = () => {
  if (longPressTimer) {
    clearTimeout(longPressTimer)
    longPressTimer = null
  }
}

const onGlobalTouchMove = (e: TouchEvent) => {
  if (!longPressTimer) return
  const touch = e.touches[0]
  const deltaX = Math.abs(touch.clientX - touchStartPos.x)
  const deltaY = Math.abs(touch.clientY - touchStartPos.y)
  if (deltaX > 10 || deltaY > 10) {
    clearTimeout(longPressTimer)
    longPressTimer = null
  }
}

const onGlobalDblClick = (e: MouseEvent) => {
  const logo = getLogoElement()
  if (logo && isContains(e.target as HTMLElement, logo)) {
    toggleImage()
  }
}

const bindGlobalEvents = () => {
  if (isMobile) {
    document.body.addEventListener('touchstart', onGlobalTouchStart, { passive: false })
    document.body.addEventListener('touchend', onGlobalTouchEnd)
    document.body.addEventListener('touchcancel', onGlobalTouchCancel)
    document.body.addEventListener('touchmove', onGlobalTouchMove)
    document.body.style.touchAction = 'manipulation' // 全局优化
  } else {
    document.body.addEventListener('dblclick', onGlobalDblClick)
  }
}

const unbindGlobalEvents = () => {
  if (isMobile) {
    document.body.removeEventListener('touchstart', onGlobalTouchStart)
    document.body.removeEventListener('touchend', onGlobalTouchEnd)
    document.body.removeEventListener('touchcancel', onGlobalTouchCancel)
    document.body.removeEventListener('touchmove', onGlobalTouchMove)
    document.body.style.touchAction = ''
  } else {
    document.body.removeEventListener('dblclick', onGlobalDblClick)
  }
}

watch(showImage, () => {
  updateLogoSrc()
})

let observer: MutationObserver | null = null
const watchLogoRecreation = () => {
  observer = new MutationObserver(() => {
    updateLogoSrc()
  })
  observer.observe(document.body, { childList: true, subtree: true })
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }
  const saved = localStorage.getItem('showGitGif')
  if (saved === 'true') showImage.value = true
  updateLogoSrc()
  bindGlobalEvents()
  watchLogoRecreation()
})

onUnmounted(() => {
  unbindGlobalEvents()
  if (longPressTimer) clearTimeout(longPressTimer)
  if (observer) observer.disconnect()
})
</script>

<template>
  <transition name="fade">
    <div v-if="showImage" class="git-gif-container" title="天禄辟邪">
      <img src="/assets/images/tianlubixie.gif" alt="tianlubixie" />
    </div>
  </transition>
</template>

<style scoped lang="scss">
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}

.git-gif-container {
  transition: opacity 0.5s ease;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 999;
  border-radius: 12px;
  overflow: hidden;
  cursor: default;
  pointer-events: none;
}

.git-gif-container img {
  display: block;
  width: 230px;
  height: auto;
  animation: zoomIn 1.3s linear;
  opacity: 0.8;
  pointer-events: none;
  -webkit-touch-callout: none;
  user-select: none;
}

@media (max-width: 719px) {
  .git-gif-container {
    bottom: 1rem;
    right: 1rem;
  }
  .git-gif-container img {
    width: 150px;
  }
}
</style>
