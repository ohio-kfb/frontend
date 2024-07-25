<script setup>

</script>

<template>
  <header class="flex flex-wrap uppercase">
    <div class="flex w-full items-center justify-between gap-x-4 px-4">
      <router-link :to="{name: 'home'}" class="py-2 hover:text-blue-500">
        <img class="w-48" src="/public/img/dummy-logo-3.png" alt="">
      </router-link>
      <h1 class="grow text-center text-4xl font-bold">KFB</h1>
      <div class="flex gap-x-4">
        <i class="fa-brands fa-square-instagram text-4xl text-blue-500"></i>
        <i class="fa-brands fa-square-facebook text-4xl text-blue-500"></i>
        <i class="fa-brands fa-square-pinterest text-4xl text-blue-500"></i>
      </div>
      <a href="#" class="hover:text-blue-500"><i class="fa-regular fa-user mr-2"></i>login</a>
      <div class="flex border border-blue-500">
        <input type="text" class="p-1 w-full">
        <button class="bg-blue-500 px-4 py-1 uppercase">search</button>
      </div>
    </div>
    <nav class="flex w-full justify-evenly border-t border-b border-blue-500">
      <router-link :to="{name: 'home'}" class="py-2 hover:text-blue-500">home</router-link>
      <router-link :to="{name: 'about'}" class="py-2 hover:text-blue-500">about us</router-link>
      <router-link :to="{name: 'kitchen'}" class="py-2 hover:text-blue-500">kitchen</router-link>
      <router-link :to="{name: 'flooring'}" class="py-2 hover:text-blue-500">flooring</router-link>
      <router-link :to="{name: 'bath'}" class="py-2 hover:text-blue-500">bath</router-link>
      <router-link :to="{name: 'beyond'}" class="py-2 hover:text-blue-500">beyond</router-link>
      <router-link :to="{name: 'contact-us'}" class="py-2 hover:text-blue-500">contact us</router-link>
    </nav>
  </header>
</template>

<style scoped>

</style>