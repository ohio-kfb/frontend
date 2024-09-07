<script setup>
const props = defineProps(['foo']);
console.log(props['foo']);
</script>

<template>
  <div class="p-2 bg-white shadow-[rgba(50,_50,_105,_0.25)_1px_2px_5px_1px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border border-white mb-4 md:mb-0"
  :class="{'hover:border-orange-500 transition duration-700 ease-in-out hover:text-orange-600' : props.foo}">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>