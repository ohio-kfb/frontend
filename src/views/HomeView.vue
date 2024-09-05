<script setup>
import CardComponent from '@/components/CardComponent.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 p-4">
    <CardComponent>
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
    </CardComponent>
    <CardComponent>
      <template #img>
        <img src="@/assets/images/home/bath-10.jpg" alt="bathroom" class="object-center object-cover">
      </template>
      <template #title>
        Elevate your bathroom
      </template>
      <template #text>
        Elevate your bathroom experience with our tailored renovation solutions. Whether you’re
        dreaming of a spa-like retreat or a sleek, contemporary look, we craft beautiful, practical bathrooms that offer
        both comfort and elegance.
      </template>
    </CardComponent>
    <CardComponent>
      <template #img>
        <img src="@/assets/images/home/floor-13.jpg" alt="flooring" class="object-center object-cover">
      </template>
      <template #title>
        Premium flooring
      </template>
      <template #text>
        Revitalize your home with our premium flooring options. From luxurious hardwood to
        durable tile and cozy carpets, we provide expert installation and design advice to ensure your floors enhance
        the
        beauty and functionality of your space.
      </template>
    </CardComponent>
  </div>
</template>
