<script setup>
import CardComponent from '@/components/CardComponent.vue'
import LinkComponent from '@/components/LinkComponent.vue'
</script>

<template>
  <aside class="w-full text-center md:basis-1/4 space-y-4">
    <CardComponent>
      <div>
        <img src="@/assets/images/deals/kitchen1.jpeg" alt="" class="w-full h-36 object-cover">
        <p class="font-bold text-xl text-orange-600">Grand Opening Discount</p>
        <div class="grid grid-cols-3 space-x-2">
          <div class="text-right font-bold text-nowrap">
            <p>Valid for:</p>
          </div>
          <div class="text-left col-span-2">
            <p>all purchases</p>
          </div>
        </div>
        <div class="grid grid-cols-3 space-x-2">
          <div class="text-right font-bold text-nowrap">
            <p>Amount:</p>
          </div>
          <div class="text-left col-span-2">
            <p>%5 off</p>
          </div>
        </div>
        <div class="grid grid-cols-3 space-x-2">
          <div class="text-right font-bold text-nowrap">
            <p>Deadline:</p>
          </div>
          <div class="text-left col-span-2">
            <p>Dec 31st</p>
          </div>
        </div>
      </div>
      <hr class="my-2">
      <div>
        <img src="@/assets/images/deals/Flooring3.jpeg" alt="" class="w-full h-36 object-cover">
        <p class="font-bold text-xl text-orange-600">Bundle Work Discount</p>
        <div class="grid grid-cols-3 space-x-2">
          <div class="text-right font-bold text-nowrap">
            <p>Valid for:</p>
          </div>
          <div class="text-left col-span-2">
            <p>combination of at least three projects</p>
          </div>
        </div>
        <div class="grid grid-cols-3 space-x-2">
          <div class="text-right font-bold text-nowrap">
            <p>Amount:</p>
          </div>
          <div class="text-left col-span-2">
            <p>%5 off</p>
          </div>
        </div>
        <div class="grid grid-cols-3 space-x-2">
          <div class="text-right font-bold text-nowrap">
            <p>Deadline:</p>
          </div>
          <div class="text-left col-span-2">
            <p>March 1st</p>
          </div>
        </div>
      </div>
      <hr class="my-2">
      <div>
        <p class="font-bold text-xl text-orange-600">Neighborhood Discount</p>
        <div class="grid grid-cols-3 space-x-2">
          <div class="text-right font-bold text-nowrap">
            <p>Valid for:</p>
          </div>
          <div class="text-left col-span-2">
            <p>neighborhood coupons holder</p>
          </div>
        </div>
        <div class="grid grid-cols-3 space-x-2">
          <div class="text-right font-bold text-nowrap">
            <p>Amount:</p>
          </div>
          <div class="text-left col-span-2">
            <p>%5 off</p>
          </div>
        </div>
        <div class="grid grid-cols-3 space-x-2">
          <div class="text-right font-bold text-nowrap">
            <p>Deadline:</p>
          </div>
          <div class="text-left col-span-2">
            <p>April 1st</p>
          </div>
        </div>
      </div>
      <hr class="my-2">
      <p>Maximum 2 deals could be applied at the same time.</p>

    </CardComponent>
    <CardComponent>
      <h2 class="uppercase font-bold text-xl text-orange-600">contact us</h2>
      <p><span class="font-bold">Tel: </span>
        <link-component href="tel:+12166305055">+1 216 630 5055</link-component>
      </p>
      <p><span class="font-bold">E-mail: </span>
        <link-component href="mailto: info@uszenith.com" target="_blank">info@uszenith.com</link-component>
      </p>
      <p><span class="font-bold">Address: </span>
        <link-component href="https://maps.app.goo.gl/jh4zkoHKZUgAiFgG6" target="_blank">20700 Miles Rd, Warrensville
          Heights, OH 44128
        </link-component>
      </p>
    </CardComponent>
  </aside>
</template>

<style scoped>

</style>