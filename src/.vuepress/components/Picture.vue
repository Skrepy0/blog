<script setup lang="ts">
interface Props {
  url: string // 图片地址（必需）
  height?: number // 可选，图片高度（像素）
  info?: string // 可选，图片说明文字
  pos?: 'left' | 'center' | 'right' // 可选，对齐方式
}

const props = withDefaults(defineProps<Props>(), {
  height: undefined,
  info: '',
  pos: 'center',
})

// 动态样式
const imgStyle = props.height ? { height: `${props.height}px`, width: 'auto', maxWidth: '100%' } : { width: '100%', height: 'auto' }
</script>

<template>
  <div class="picture-wrapper" :style="{ textAlign: props.pos }">
    <img :src="props.url" :style="imgStyle" class="picture-img" :alt="props.info || '图片'" />
    <div v-if="props.info" class="picture-caption">{{ props.info }}</div>
  </div>
</template>

<style scoped>
.picture-container {
  margin: 1.5rem 0;
}

.picture-img {
  display: inline-block;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.picture-img:hover {
  transform: scale(1.0075);
}

.picture-caption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2, #4a5568);
  text-align: center;
}

@media (max-width: 768px) {
  .picture-img {
    max-width: 100%;
    height: auto !important;
    width: 100%;
  }
  .picture-caption {
    font-size: 0.8rem;
  }
}
</style>
