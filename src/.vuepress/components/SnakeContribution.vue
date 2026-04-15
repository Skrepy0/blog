<template>
  <img :src="currentSrc" alt="GitHub Contribution Snake" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const lightSrc = 'https://raw.githubusercontent.com/Skrepy0/HomePage/output/github-contribution-grid-snake.svg'
const darkSrc = 'https://raw.githubusercontent.com/Skrepy0/HomePage/output/github-contribution-grid-snake-dark.svg'
const currentSrc = ref(lightSrc)

let observer = null

onMounted(() => {
  const updateTheme = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
    currentSrc.value = isDark ? darkSrc : lightSrc
  }
  updateTheme()

  observer = new MutationObserver(updateTheme)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
