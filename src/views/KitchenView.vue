<script setup>

import CardComponent from '@/components/CardComponent.vue'
</script>

<template>
  <h1 class="text-4xl font-bold uppercase text-cyan-700">Kitchen</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

    <CardComponent class="h-full">
      <img src="@/assets/images/kit-5.jpg" alt="kitchen" class="h-44 w-full object-cover object-center">
      <div>
        <h3 class="font-bold text-lg mb-4">
          Variety of products and designs
        </h3>
        <p>
          Our kitchen cabinets are available in a variety of designs, sizes, and features to fit
          different homes. Made with natural wood, plywood panels, dovetail joints, solid wood
          frame doors, soft-close hinges, and built to industry-standard sizes and styles.
        </p>
      </div>
    </CardComponent>

    <CardComponent class="h-full">
      <img src="@/assets/images/home/bath-10.jpg" alt="bathroom" class="h-44 w-full object-cover object-center">
      <div>
        <h3 class="font-bold text-lg mb-4">
          Custom Cabinets
        </h3>
        <p>
          Tell us what you need, and our technicians will bring it to life. We customize cabinets
          based on your style guide, offering a wide range of options like colors, designs, space-saving
          features, accessories, decorative hardware, and more.
        </p>
      </div>
    </CardComponent>

    <CardComponent class="h-full">
      <img src="@/assets/images/home/floor-13.jpg" alt="flooring"
           class="h-36 md:h-44 w-full object-cover object-bottom">
      <div>
        <h3 class="font-bold text-lg mb-4">
          Semi-Custom Cabinets
        </h3>
        <p>
          Looking for a flexible and affordable cabinet option that lets you personalize certain
          features? Our semi-custom cabinets are the perfect solution. They offer customization
          along with a variety of designs, sizes, materials, and luxurious finishes.
        </p>
      </div>
    </CardComponent>

  </div>
</template>

<style scoped>
</style>
