<template>
  <section
    class="luma-hero"
    :class="[
      `luma-hero--${align}`,
      `luma-hero--${theme}`,
      { 'has-media': !!media }
    ]"
  >
    <div class="luma-hero__inner">
      <!-- Copy -->
      <div class="luma-hero__copy">
        <p v-if="eyebrow" class="luma-hero__eyebrow">
          {{ eyebrow }}
        </p>

        <h1 class="luma-hero__title">
          {{ title }}
        </h1>

        <p v-if="subtitle" class="luma-hero__subtitle">
          {{ subtitle }}
        </p>
      </div>

      <!-- Visual -->
      <div v-if="media" class="luma-hero__media">
        <img
          v-if="media.type === 'image'"
          :src="media.src"
          :alt="media.alt || ''"
        />
        <video
          v-else-if="media.type === 'video'"
          :src="media.src"
          autoplay
          muted
          loop
          playsinline
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'LumaHero' })


export interface HeroMedia {
  type: 'image' | 'video'
  src: string
  alt?: string
}

withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    eyebrow?: string
    media?: HeroMedia
    align?: 'center' | 'left'
    theme?: 'light' | 'dark'
  }>(),
  {
    align: 'center',
    theme: 'light'
  }
)
</script>
