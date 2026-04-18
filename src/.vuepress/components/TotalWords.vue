<template>
  <span v-if="totalWords !== null">文章总字数：{{ totalWords }} 字</span>
  <span v-else>加载中...</span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const totalWords = ref<number | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('/totalWords.json')
    const data = await res.json()
    totalWords.value = data.totalWords
  } catch (error) {
    console.error('加载总字数失败', error)
    totalWords.value = 0
  }
})
</script>