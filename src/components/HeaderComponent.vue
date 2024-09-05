<script setup>

import NavigationComponent from '@/components/NavigationComponent.vue'
import SocialNetworkComponent from '@/components/SocialNetworkComponent.vue'
</script>

<template>
  <header class="flex flex-wrap uppercase mb-4">
    <div class="w-full items-center justify-between gap-x-4 px-4 md:flex hidden">
      <router-link :to="{name: 'home'}" class="py-2 hover:text-blue-500">
        <img class="w-48" src="/img/dummy-logo-3.png" alt="">
      </router-link>
      <h1 class="grow text-center text-4xl font-bold normal-case">UsZenith</h1>
      <SocialNetworkComponent />
    </div>
    <NavigationComponent />
  </header>
</template>

<style scoped>

</style>