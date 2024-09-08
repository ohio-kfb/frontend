<script setup>
import HomePageCardContentComponent from '@/components/HomePageCardContentComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4">
    <CardComponent foo="true">
      <HomePageCardContentComponent>
        <template #img>
          <img src="@/assets/images/home/kit-2.jpg" alt="kitchen" class="object-center object-cover">
        </template>
        <template #title>
          A Culinary Haven
        </template>
        <template #text>
          Transform your kitchen into a culinary haven with our expert renovation services. From modern upgrades to
          classic makeovers, we design and create functional, stylish spaces that meet your needs and reflect your
          taste.
        </template>
      </HomePageCardContentComponent>
    </CardComponent>
    <CardComponent foo="true">
      <HomePageCardContentComponent>
        <template #img>
          <img src="@/assets/images/home/bath-10.jpg" alt="bathroom" class="object-center object-cover">
        </template>
        <template #title>
          Elevate your bathroom
        </template>
        <template #text>
          Elevate your bathroom experience with our tailored renovation solutions. Whether you’re
          dreaming of a spa-like retreat or a sleek, contemporary look, we craft beautiful, practical bathrooms that
          offer
          both comfort and elegance.
        </template>
      </HomePageCardContentComponent>
    </CardComponent>
    <CardComponent foo="true">
      <HomePageCardContentComponent>
        <template #img>
          <img src="@/assets/images/home/floor-13.jpg" alt="flooring" class="object-center object-cover">
        </template>
        <template #title>
          custom cabinets
        </template>
        <template #text>
          Custom cabinets are ideal for a complete kitchen makeover, offering extensive options for design
          and layout. They’re perfect if your existing cabinets are in poor condition.
          With a wide range of wood species, stain colors, and door styles, we’ll help you create a personalized
          and beautiful kitchen that you’ll love.
        </template>
      </HomePageCardContentComponent>
    </CardComponent>
  </div>
</template>
<style scoped>
</style>