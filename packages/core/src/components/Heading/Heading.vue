<template>
  <component
    :is="tag"
    class="luma-heading"
    :class="[
      `luma-heading--level-${level}`,
      `luma-heading--${align}`,
      { 'is-muted': muted },
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
defineOptions({ name: "LumaHeading" });

const props = withDefaults(
  defineProps<{
    level?: 1 | 2 | 3 | 4;
    as?: "h1" | "h2" | "h3" | "h4" | "div";
    align?: "left" | "center";
    muted?: boolean;
  }>(),
  {
    level: 1,
    align: "left",
    muted: false,
  }
);

const tag = computed(() => {
  if (props.as) return props.as;
  return `h${props.level}` as const;
});
</script>
