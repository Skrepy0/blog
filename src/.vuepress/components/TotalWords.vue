<template>
  <ClientOnly>
    <div ref="target" class="total-words-box">
      <div class="total-words-wrapper" v-if="totalWords !== null">📖 博客总字数：{{ tweened.number.toFixed(0) }} 字</div>
      <div class="total-words-wrapper loading" v-else>⏳ 加载中...</div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch } from 'vue'
import { withBase } from 'vuepress/client'
import gsap from 'gsap'
import { useIntersectionObserver } from '@vueuse/core'

const totalWords = ref<number | null>(null)
const tweened = reactive({ number: 0 })
const hasLoaded = ref(false)
const target = ref<HTMLElement | null>(null)

watch(totalWords, (n) => {
  if (n !== null) {
    gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
  }
})

const fetchData = async () => {
  if (hasLoaded.value) return
  try {
    const url = withBase('/totalWords.json')
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    totalWords.value = data.totalWords
    hasLoaded.value = true
  } catch (error) {
    console.error('加载总字数失败', error)
    totalWords.value = 0
    hasLoaded.value = true
  }
}

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasLoaded.value) {
      fetchData()
    }
  },
  { threshold: 0.1 }
)
</script>

<style scoped>
.total-words-box {
  font-size: small;
  margin: 5px;
}
.total-words-wrapper {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: var(--vp-c-bg-soft, #f6f8fa);
  border-radius: 24px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--vp-c-text-2, #4e6e8e);
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
  border: 1px solid var(--vp-c-divider, #eaecef);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
}

.total-words-wrapper:hover {
  background: var(--vp-c-bg-soft, #eef2f6);
  border-color: var(--vp-c-accent, #3eaf7c);
  color: var(--vp-c-accent, #3eaf7c);
  transform: translateY(-1px);
}

.total-words-wrapper.loading {
  opacity: 0.7;
  cursor: wait;
}

[data-theme='dark'] .total-words-wrapper {
  background: var(--vp-c-bg-soft, #2d2d32);
  border-color: var(--vp-c-divider, #3e3e44);
  color: var(--vp-c-text-2, #9ca3af);
}

[data-theme='dark'] .total-words-wrapper:hover {
  background: #3a3a40;
  border-color: var(--vp-c-accent, #3eaf7c);
  color: var(--vp-c-accent, #3eaf7c);
}

@media (max-width: 768px) {
  .total-words-wrapper {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 20px;
  }
}
</style>
