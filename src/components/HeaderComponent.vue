<script setup>

import NavigationComponent from '@/components/NavigationComponent.vue'
import SocialNetworkComponent from '@/components/SocialNetworkComponent.vue'
</script>

<template>
  <header class="fixed left-0 top-0 w-full md:static z-50 flex flex-wrap uppercase mb-4">
    <div class="w-full items-center justify-between gap-x-4 px-4 md:flex hidden">
      <router-link :to="{name: 'home'}" class="py-2 hover:text-blue-500">
        <img class="w-28" src="@/assets/logo-2.png" alt="logo">
      </router-link>
      <h1 class="grow text-center text-4xl font-bold normal-case">UsZenith Home Solutions</h1>
      <SocialNetworkComponent />
    </div>
    <NavigationComponent />
  </header>
</template>

<style scoped>

</style>