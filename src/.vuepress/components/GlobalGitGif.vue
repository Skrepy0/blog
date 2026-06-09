<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showImage = ref(false)
let buttonElement: HTMLElement | null = null
let isMobile = false
let longPressTimer: ReturnType<typeof setTimeout> | null = null
let touchStartPos = { x: 0, y: 0 }

const toggleImage = () => {
  showImage.value = !showImage.value
  localStorage.setItem('showGitGif', showImage.value ? 'true' : 'false')
}

const onTouchStart = (e: TouchEvent) => {
  e.preventDefault()
  const touch = e.touches[0]
  touchStartPos = { x: touch.clientX, y: touch.clientY }

  longPressTimer = setTimeout(() => {
    toggleImage()
    longPressTimer = null
  }, 1000)
}

const onTouchEnd = () => {
  if (longPressTimer) {
    clearTimeout(longPressTimer)
    longPressTimer = null
  }
}

const onTouchCancel = () => {
  if (longPressTimer) {
    clearTimeout(longPressTimer)
    longPressTimer = null
  }
}

const onTouchMove = (e: TouchEvent) => {
  if (!longPressTimer) return
  const touch = e.touches[0]
  const deltaX = Math.abs(touch.clientX - touchStartPos.x)
  const deltaY = Math.abs(touch.clientY - touchStartPos.y)
  if (deltaX > 10 || deltaY > 10) {
    clearTimeout(longPressTimer)
    longPressTimer = null
  }
}

const bindLongPress = (el: HTMLElement) => {
  el.addEventListener('touchstart', onTouchStart, { passive: false })
  el.addEventListener('touchend', onTouchEnd)
  el.addEventListener('touchcancel', onTouchCancel)
  el.addEventListener('touchmove', onTouchMove)
  el.style.touchAction = 'manipulation'
}

const unbindLongPress = (el: HTMLElement) => {
  el.removeEventListener('touchstart', onTouchStart)
  el.removeEventListener('touchend', onTouchEnd)
  el.removeEventListener('touchcancel', onTouchCancel)
  el.removeEventListener('touchmove', onTouchMove)
  el.style.touchAction = ''
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }

  const saved = localStorage.getItem('showGitGif')
  if (saved === 'true') showImage.value = true

  buttonElement = document.getElementsByClassName('vp-nav-logo')[0] as HTMLElement

  const attachEvents = (el: HTMLElement) => {
    if (isMobile) {
      bindLongPress(el)
    } else {
      el.addEventListener('dblclick', toggleImage)
    }
  }

  const detachEvents = (el: HTMLElement) => {
    if (isMobile) {
      unbindLongPress(el)
    } else {
      el.removeEventListener('dblclick', toggleImage)
    }
  }

  if (buttonElement) {
    attachEvents(buttonElement)
  } else {
    const observer = new MutationObserver(() => {
      const btn = document.getElementsByClassName('vp-nav-logo')[0] as HTMLElement
      if (btn && !buttonElement) {
        buttonElement = btn
        attachEvents(buttonElement)
        observer.disconnect()
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
    setTimeout(() => observer.disconnect(), 10000)
  }

  onUnmounted(() => {
    if (buttonElement) {
      detachEvents(buttonElement)
    }
    if (longPressTimer) clearTimeout(longPressTimer)
  })
})
</script>

<template>
  <div v-if="showImage" class="git-gif-container" title="天禄辟邪">
    <img src="/assets/images/tianlubixie.gif" alt="tianlubixie" />
  </div>
</template>

<style scoped>
.git-gif-container {
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
