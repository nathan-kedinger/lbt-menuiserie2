<script setup>
import ContactFormComponent from '@/components/UtilityComponent/ContactFormComponent.vue'
import GoogleMapsComponent from '@/components/UtilityComponent/GoogleMapsComponent.vue'
</script>

<template>
  <h2 class="text-4xl text-black font-bold m-10 text-center">Nous contacter</h2>
  <div class="flex flex-col lg:grid lg:grid-cols-2 content-center">
    <div class="col-start-1 col-span-1">
      <GoogleMapsComponent />
    </div>
    <div class="col-start-2 col-span-1">
      <ContactFormComponent />
    </div>
  </div>
</template>

<style scoped></style>
