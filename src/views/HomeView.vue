<script setup>
import CardComponent from '@/components/CardComponent.vue'
import RLinkComponent from '@/components/RLinkComponent.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-y-0 gap-y-4">

    <r-link-component :to="{name: 'kitchen'}" class="no-underline border border-white hover:border-orange-600">
      <CardComponent class="h-full">
        <img src="@/assets/images/home/kit-2.jpg" alt="kitchen" class="h-44 w-full object-cover object-center">
        <div>
          <h3 class="font-bold text-lg mb-4">
            A Culinary Haven
          </h3>
          <p>
            Transform your kitchen into a culinary haven with our expert renovation services. From modern upgrades to
            classic makeovers, we design and create functional, stylish spaces that meet your needs and reflect your
            taste.
          </p>
        </div>
      </CardComponent>
    </r-link-component>

    <r-link-component :to="{name: 'bath'}" class="no-underline border border-white hover:border-orange-600">
      <CardComponent class="h-full">
        <img src="@/assets/images/home/bath-10.jpg" alt="bathroom" class="h-44 w-full object-cover object-center">
        <div>
          <h3 class="font-bold text-lg mb-4">
            Elevate your bathroom
          </h3>
          <p>
            Elevate your bathroom experience with our tailored renovation solutions. Whether you’re
            dreaming of a spa-like retreat or a sleek, contemporary look, we craft beautiful, practical bathrooms that
            offer
            both comfort and elegance.
          </p>
        </div>
      </CardComponent>
    </r-link-component>

    <r-link-component :to="{name: 'flooring'}" class="no-underline border border-white hover:border-orange-600">
      <CardComponent class="h-full">
        <img src="@/assets/images/home/floor-13.jpg" alt="flooring"
             class="h-36 md:h-44 w-full object-cover object-bottom">
        <div>
          <h3 class="font-bold text-lg mb-4">
            Premium flooring
          </h3>
          <p>
            Revitalize your home with our premium flooring options. From luxurious hardwood to
            durable tile and cozy carpets, we provide expert installation and design advice to ensure your floors enhance
            the
            beauty and functionality of your space.
          </p>
        </div>
      </CardComponent>
    </r-link-component>

  </div>
</template>
