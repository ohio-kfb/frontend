<script setup>

</script>

<template>
  <header class="flex flex-wrap uppercase mb-4">
    <div class="flex w-full items-center justify-between gap-x-4 px-4">
      <router-link :to="{name: 'home'}" class="py-2 hover:text-blue-500">
        <img class="w-48" src="/img/dummy-logo-3.png" alt="">
      </router-link>
      <h1 class="grow text-center text-4xl font-bold normal-case">UsZenith</h1>
      <div class="flex gap-x-4">
        <a href="https://www.instagram.com/uszenithllc/"><i class="fa-brands fa-square-instagram text-4xl text-cyan-700"></i></a>
        <a href="https://www.facebook.com/photo/?fbid=122100626798506838&set=a.122100625010506838&rdid=HRRtgb49V5zkoyyi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FCELVw8t4c6aLR3F3%2F"><i class="fa-brands fa-square-facebook text-4xl text-cyan-700"></i></a>
<!--        <a href=""><i class="fa-brands fa-pinterest text-4xl text-cyan-700"></i></a>-->
        <a href="https://www.tiktok.com/@uszenithllc?lang=en"><i class="fa-brands fa-tiktok text-3xl text-cyan-700"></i></a>
      </div>
      <!--      <a href="#" class="hover:text-blue-500"><i class="fa-regular fa-user mr-2"></i>login</a>-->
      <!--      <div class="flex border border-blue-500">-->
      <!--        <input type="text" class="p-1 w-full">-->
      <!--        <button class="bg-blue-500 px-4 py-1 uppercase">search</button>-->
      <!--      </div>-->
    </div>
    <nav class="flex w-full justify-evenly border-t border-b border-cyan-800 bg-orange-300">
      <router-link :to="{name: 'home'}" class="py-2 hover:text-blue-500 font-bold">home</router-link>
      <router-link :to="{name: 'about'}" class="py-2 hover:text-blue-500 font-bold">about us</router-link>
      <router-link :to="{name: 'kitchen'}" class="py-2 hover:text-blue-500 font-bold">kitchen</router-link>
      <router-link :to="{name: 'flooring'}" class="py-2 hover:text-blue-500 font-bold">flooring</router-link>
      <router-link :to="{name: 'bath'}" class="py-2 hover:text-blue-500 font-bold">bath</router-link>
      <router-link :to="{name: 'beyond'}" class="py-2 hover:text-blue-500 font-bold">beyond</router-link>
      <router-link :to="{name: 'curtain'}" class="py-2 hover:text-blue-500 font-bold">curtain</router-link>
    </nav>
  </header>
</template>

<style scoped>

</style>