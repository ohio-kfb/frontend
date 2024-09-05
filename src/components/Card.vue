<script setup>

</script>

<template>
  <div class="bg-white rounded-xl">
    <div class="w-full h-52 overflow-hidden">
      <slot name="img"></slot>
    </div>
    <div class="p-2">
      <h3 class="font-bold text-lg mb-4">
        <slot name="title"></slot>
      </h3>
      <p>
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>