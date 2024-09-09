<script setup>
defineProps({
  to: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <router-link :to="to" class="underline hover:text-orange-700 transition duration-500 ease-in-out">
    <slot></slot>
  </router-link>
</template>

<style scoped>

</style>