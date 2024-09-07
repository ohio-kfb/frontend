<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
  {
    title: 'Slide #1',
    content: 'Slide 1 content.',
    image: new URL('@/assets/images/carousel/bath-10.jpg', import.meta.url).href
  },
  {
    title: 'Slide #2',
    content: 'Slide 2 content.',
    image: new URL('@/assets/images/carousel/floor-1.jpg', import.meta.url).href
  },
  {
    title: 'Slide #3',
    content: 'Slide 3 content.',
    image: new URL('@/assets/images/carousel/kit-1.jpg', import.meta.url).href
  }
]
</script>

<template>
  <div>
    <vueper-slides>
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<style scoped>

</style>