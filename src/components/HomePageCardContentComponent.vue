<script setup>

</script>

<template>
  <div class="w-full h-36 overflow-hidden">
    <slot name="img"></slot>
  </div>

  <div>
    <h3 class="font-bold text-lg mb-4">
      <slot name="title"></slot>
    </h3>
    <p>
      <slot name="text"></slot>
    </p>
  </div>
</template>

<style scoped>

</style>