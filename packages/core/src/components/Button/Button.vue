<template>
  <div
    class="luma-button"
    :class="[
      glass ? 'luma-glass' : 'luma-solid',
      sizeClass
    ]"
    :style="rootStyle"
  >
    <!-- 左侧文字 -->
    <div class="luma-button__label">
      <slot />
    </div>

    <!-- 右侧图标插槽（可选） -->
    <div
      v-if="$slots.icon"
      class="luma-button__icon"
      :style="iconStyle"
    >
      <slot name="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed,ref, watch } from 'vue'
const stage = ref<'idle' | 'pop' | 'morph' | 'expand' | 'done'>('idle')
const props = defineProps({
  /** 毛玻璃模式 */
  glass: {
    type: Boolean,
    default: false
  },

  /** 按钮尺寸 */
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md'
  },

  /** 主背景色 */
  background: {
    type: String,
    default: ''
  },

  /** 右侧图标背景色 */
  iconBackground: {
    type: String,
    default: '#0a84ff'
  },

  /** 自定义高度 */
  height: {
    type: String,
    default: ''
  },
  animate: {
    type: Boolean,
    default: false
  }
})

watch(
  () => props.animate,
  (val) => {
    if (!val) return

    stage.value = 'pop'

    setTimeout(() => stage.value = 'morph', 420)
    setTimeout(() => stage.value = 'expand', 760)
    setTimeout(() => stage.value = 'done', 1100)
  },
  { immediate: true }
)

const sizeClass = computed(() => `luma-${props.size}`)

const rootStyle = computed(() => ({
  ...(props.background && { '--luma-bg': props.background }),
  ...(props.height && { '--luma-height': props.height })
}))

const iconStyle = computed(() => ({
  background: props.iconBackground
}))
</script>

<style scoped>
.luma-button {
  --luma-bg: #f5f5f7;
  --luma-height: 44px;

  display: inline-flex;
  align-items: center;

  height: var(--luma-height);
  padding-left: 18px;
  padding-right: 6px;

  border-radius: 999px;
  background: var(--luma-bg);

  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #1d1d1f;

  cursor: pointer;
  user-select: none;

  transition: all 0.2s ease;
}

/* 毛玻璃 */
.luma-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

/* 纯色 */
.luma-solid {
  backdrop-filter: none;
}

/* 左侧文字 */
.luma-button__label {
  padding-right: 12px;
  white-space: nowrap;
}

/* 右侧图标 */
.luma-button__icon {
  min-width: calc(var(--luma-height) - 8px);
  height: calc(var(--luma-height) - 8px);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  font-weight: 600;

  transition: transform 0.15s ease;
}

/* 尺寸预设 */
.luma-sm { --luma-height: 32px; font-size: 13px; }
.luma-md { --luma-height: 44px; }
.luma-lg { --luma-height: 56px; font-size: 16px; }

/* 交互反馈 */
.luma-button:hover {
  transform: translateY(-1px);
}

.luma-button:active {
  transform: scale(0.96);
}

:root {
  --spring-pop: cubic-bezier(0.22, 1.4, 0.36, 1);
  --spring-morph: cubic-bezier(0.4, 0, 0.2, 1);
}


.luma-animate-wrapper {
  position: relative;
  width: max-content;
  height: 56px;
}

.luma-animate-core {
  position: absolute;
  left: 0;
  bottom: 0;

  width: 56px;
  height: 56px;

  transform-origin: center;
}

.luma-outer {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #0a84ff;
}

.luma-inner {
  position: absolute;
  inset: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,0.45);

  display: flex;
  align-items: center;
  justify-content: center;
}


.luma-animate-wrapper.pop .luma-animate-core {
  transform: translateY(0) scale(1);
  animation: popUp 420ms var(--spring-pop);
}

@keyframes popUp {
  0% {
    transform: translateY(40px) scale(0.8);
    opacity: 0;
  }
  70% {
    transform: translateY(-6px) scale(1.05);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
  }
}


.luma-animate-wrapper.morph .luma-outer {
  border-radius: 999px;
  width: 100%;
  transition: all 320ms var(--spring-morph);
}

.luma-animate-wrapper.morph .luma-inner {
  transform: translateX(calc(100% - 56px));
  transition: transform 320ms var(--spring-morph);
}

.luma-button-content {
  opacity: 0;
  transform: translateX(-8px);
  transition: all 240ms ease;
}

.luma-animate-wrapper.expand .luma-button-content {
  opacity: 1;
  transform: translateX(0);
}

.luma-animate-wrapper.done .luma-animate-core {
  opacity: 0;
  pointer-events: none;
}

</style>
