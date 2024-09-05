<script setup>
import { ref } from 'vue'
import SocialNetworkComponent from '@/components/SocialNetworkComponent.vue'

let isExpanded = ref(false)

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <nav class="w-full justify-evenly border-t border-b border-cyan-800 bg-orange-300">
    <div class="md:hidden flex">
      <h1 class="grow text-center text-4xl font-bold block my-auto normal-case"><router-link :to="{name: 'home'}">UsZenith</router-link></h1>
      <SocialNetworkComponent />
      <button @click="toggleMenu" type="button"
              class="border border-gray-500 m-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden">
        <svg class="w-5 h-5" :class="{hidden: isExpanded}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
        </svg>
        <svg class="w-5 h-5" :class="{hidden: !isExpanded}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1 15 15 M15 1 1 15" />
        </svg>
      </button>
    </div>
    <ul class="w-full md:flex justify-evenly text-end pr-4 md:space-y-0 space-y-2 md:py-2" :class="{hidden: !isExpanded}">
      <li>
        <router-link :to="{name: 'home'}" class="py-2 hover:text-blue-500 font-bold">home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'kitchen'}" class="py-2 hover:text-blue-500 font-bold">kitchen</router-link>
      </li>
      <li>
        <router-link :to="{name: 'flooring'}" class="py-2 hover:text-blue-500 font-bold">flooring</router-link>
      </li>
      <li>
        <router-link :to="{name: 'bath'}" class="py-2 hover:text-blue-500 font-bold">bath</router-link>
      </li>
      <li>
        <router-link :to="{name: 'beyond'}" class="py-2 hover:text-blue-500 font-bold">beyond</router-link>
      </li>
      <li>
        <router-link :to="{name: 'curtain'}" class="py-2 hover:text-blue-500 font-bold">curtain</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>