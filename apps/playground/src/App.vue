<template>
  <div style="padding: 20px">
    <div>
      <!-- <LumaHero
    eyebrow="New"
    title="Luma"
    subtitle="A minimal, content-first design system for Vue."
    :media="{
      type: 'image',
      src: '/hero.jpg',
    }"
  /> -->
      <!-- <LumaHeading level="1" align="center"> Luma </LumaHeading>
    <LumaHeading level="2" align="center"> Luma </LumaHeading>
    <LumaHeading level="3" align="center"> Luma </LumaHeading>
    <LumaHeading level="4" align="center"> Luma </LumaHeading>
    <LumaHeading level="5" align="center"> Luma </LumaHeading>
    <LumaHeading level="6" align="center"> Luma </LumaHeading> -->
      <!-- <div style="display: flex; flex-direction: column; gap: 20px">
        <LumaCard background="#000">
          <h3>Simple Card</h3>
        </LumaCard>
        <LumaCard width="320px" height="200px" background="#000" radius="lg">
          Content
        </LumaCard>
        <LumaCard width="320px" height="200px" background="#000" radius="lg" scale>
          Content22
        </LumaCard>
        <LumaCard
          width="320px"
          height="360px"
          backgroundImage="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          backgroundPosition="left center"
        >
          <h3>Product</h3>
        </LumaCard>
        <LumaCard
          width="320px"
          height="420px"
          radius="xl"
          backgroundImage="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          overlayColor="linear-gradient(
    to bottom,
    rgba(0,0,0,0.1),
    rgba(0,0,0,0.6)
  )"
        >
          <template #overlay>
            <div style="margin-top: auto; padding: 24px; color: white">
              <h3>Overlay Title</h3>
            </div>
          </template>
        </LumaCard>
      </div> -->

      <div
        style="
          background: url('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
          height: 600px;
        "
      >
        <LumaButton> 深入了解显示器 </LumaButton>

        <LumaButton>
          深入了解显示器
          <template #icon> + </template>
        </LumaButton>

        <LumaButton
          glass
          background="rgba(255,255,255,0.6)"
          icon-background="#0071e3"
        >
          深入了解显示器
          <template #icon> + </template>
        </LumaButton>

        <LumaButton size="sm">Small</LumaButton>
        <LumaButton size="md">Medium</LumaButton>
        <LumaButton size="lg">Large</LumaButton>

        <LumaButton height="60px"> 自定义高度 </LumaButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LumaHero } from "@luma-ui/core";
import { LumaHeading } from "@luma-ui/core";
import { LumaCard, LumaButton } from "@luma-ui/core";
</script>
