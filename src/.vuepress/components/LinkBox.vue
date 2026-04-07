<script setup lang="ts">
interface LinkItem {
  url: string // 网页地址
  title: string // 标题
  subtitle?: string // 副标题(可选)
  icon?: string // 图标地址(可选,本组件可以根据url自动解析)
  tip?: string // 提示,默认值是'前往以下网站，但是不保证安全性哦~'
}
const props = withDefaults(defineProps<LinkItem>(), {
  subtitle: '',
  icon: '',
  tip: '前往以下网站，但是不保证安全性哦~',
})

const iconUrl = props.icon || `https://favicon.splitbee.io/?url=${props.url}`
</script>

<template>
  <a class="link-card" :href="url" target="_blank" rel="noopener noreferrer" :title="title">
    <iconify-icon icon="mdi:open-in-new" class="external-icon" />
    <div class="link-card__tip">{{ tip }}</div>
    <hr class="link-card__divider" />
    <div class="link-card__icon">
      <img :src="iconUrl" alt="Favicon" />
    </div>
    <div class="link-card__info">
      <div class="link-card__title">{{ title }}</div>
      <div v-if="subtitle" class="link-card__subtitle">{{ subtitle }}</div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.link-card {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 80px 1fr;
  position: relative;
  margin: 16px;
  padding: 12px 16px 12px 8px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  text-decoration: none;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 20px 28px -12px rgba(0, 0, 0, 0.15),
      0 2px 4px rgba(0, 0, 0, 0.02);
    border-color: rgba(59, 186, 129, 0.3);
    background: linear-gradient(135deg, #ffffff 0%, #ece5f7 100%);
  }

  .external-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 1rem;
    color: #6c7a8e;
    transition: color 0.2s;
    z-index: 1;
  }

  &:hover .external-icon {
    color: #3eaf7c;
  }

  &__tip {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    font-size: 0.7rem;
    font-weight: 500;
    color: #6c7a8e;
    text-align: left;
    padding: 0 0 6px 8px;
    letter-spacing: 0.3px;
  }

  &__divider {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    margin: 0 8px 8px 8px;
    border: 0;
    height: 1px;
    background: var(--vp-c-divider, #e2e8f0);
  }

  &__icon {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    background: white;
    border-radius: 18px;
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.05),
      inset 0 0 0 1px rgba(0, 0, 0, 0.02);
    transition: transform 0.2s ease;

    img {
      width: 48px;
      height: 48px;
      object-fit: contain;
      border-radius: 12px;
    }
  }

  &__info {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    padding-left: 8px;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__subtitle {
    font-size: 0.75rem;
    color: #5b6e8c;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

[data-theme='dark'] .link-card {
  background: linear-gradient(135deg, #26272c 0%, #1e1f24 100%);
  border-color: #3a3b42;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(135deg, #2d2e35 0%, #2a2630 100%);
    border-color: #4a6b5c;
  }

  &__title {
    color: #eef2ff;
  }

  &__subtitle,
  &__tip {
    color: #9ca3af;
  }

  &__divider {
    background: #3a3b42;
  }

  &__icon {
    background: #1e1f24;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  .external-icon {
    color: #9ca3af;
  }

  &:hover .external-icon {
    color: #3eaf7c;
  }
}

@media (max-width: 768px) {
  .link-card {
    grid-template-columns: 64px 1fr;
    padding: 10px 12px;
    margin: 8px;

    &__icon {
      width: 52px;
      height: 52px;
      img {
        width: 36px;
        height: 36px;
      }
    }

    &__title {
      font-size: 0.9rem;
    }

    &__subtitle,
    &__tip {
      font-size: 0.65rem;
    }

    .external-icon {
      top: 8px;
      right: 8px;
      font-size: 0.9rem;
    }
  }
}
</style>
