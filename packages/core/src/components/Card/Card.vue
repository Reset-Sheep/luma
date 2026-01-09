<template>
  <div
    class="luma-card"
    :class="[
      `luma-card--radius-${radius}`,
      `luma-card--shadow-md`,
      { 'is-square': square, 'has-overlay': hasOverlay,'is-scale':scale },
    ]"
    :style="cardStyle"
  >
    <!-- Overlay -->
    <div
      v-if="hasOverlay"
      class="luma-card__overlay"
      :style="overlayStyle"
    >
      <slot name="overlay" />
    </div>

    <!-- Content -->
    <div class="luma-card__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = withDefaults(defineProps<{
  width?: string | number
  height?: string | number
  square?: boolean

  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: string
  backgroundImage?: string
  backgroundPosition?: string
  overlayColor?: string
  scale?:boolean
}>(), {
  radius: 'md',
  backgroundPosition: 'center',
  scale:false
})

const cardStyle = computed(() => ({
  width: formatSize(props.width),
  height: formatSize(props.height),

  background: props.background,
  backgroundImage: props.backgroundImage
    ? `url(${props.backgroundImage})`
    : undefined,
  backgroundPosition: props.backgroundPosition,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}))

const overlayStyle = computed(() => ({
  background: props.overlayColor
}))

const hasOverlay = computed(() => !!useSlots().overlay)

function formatSize(value?: string | number) {
  if (value == null) return undefined
  return typeof value === 'number' ? `${value}px` : value
}
</script>
