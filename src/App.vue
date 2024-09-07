<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import AsideComponent from '@/components/AsideComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'

export default {
  components: {
    CarouselComponent,
    FooterComponent,
    AsideComponent,
    HeaderComponent
  }
}
</script>

<template>
  <header-component />
  <div class="md:flex mt-16 md:mt-0">
    <main class="w-full md:basis-3/4">
      <carousel-component />
      <router-view />
    </main>
    <aside-component />
  </div>
  <footer-component />
</template>

<style scoped></style>
