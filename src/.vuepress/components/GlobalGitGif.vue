<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showImage = ref(false)
let buttonElement: HTMLElement | null = null
let doubleClickHandler: ((this: HTMLElement, ev: MouseEvent) => any) | null = null

const toggleImage = () => {
  showImage.value = !showImage.value
  if (showImage.value) {
    localStorage.setItem('showGitGif', 'true')
  } else {
    localStorage.setItem('showGitGif', 'false')
  }
}

onMounted(() => {
  const saved = localStorage.getItem('showGitGif')
  if (saved === 'true') {
    showImage.value = true
  }

  buttonElement = document.getElementsByClassName('vp-navbar-start')[0] as HTMLElement

  if (!buttonElement) {
    buttonElement = document.getElementsByClassName('vp-toggle-sidebar-button')[0] as HTMLElement
  }

  if (buttonElement) {
    doubleClickHandler = () => {
      toggleImage()
    }
    buttonElement.addEventListener('dblclick', doubleClickHandler)
  } else {
    const observer = new MutationObserver(() => {
      const btn = document.getElementsByClassName('vp-navbar-start')[0] as HTMLElement
      if (btn && !buttonElement) {
        buttonElement = btn
        doubleClickHandler = () => toggleImage()
        buttonElement.addEventListener('dblclick', doubleClickHandler)
        observer.disconnect()
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
    setTimeout(() => observer.disconnect(), 10000)
  }
})

onUnmounted(() => {
  if (buttonElement && doubleClickHandler) {
    buttonElement.removeEventListener('dblclick', doubleClickHandler)
  }
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
}

@media (max-width: 719px) {
  .git-gif-container {
    bottom: 1rem;
    right: 1rem;
  }
  .git-gif-container img {
    width: 120px;
  }
}
</style>
