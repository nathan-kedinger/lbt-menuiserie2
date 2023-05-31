<script setup>
import MainHeader from '@/components/Header/MainHeader.vue'
import MainFooter from '@/components/Footer/MainFooter.vue'
import ArrowUp from '@/components/UtilityComponent/ArrowUpComponent.vue'
import ContactsLogos from '@/components/UtilityComponent/RightTopContactsLogosComponent.vue'
</script>

<template>
  <div class="container lg:px-44">
    <MainHeader />
    <ContactsLogos />
    <main class="relative">
      <RouterView />
    </main>
    <ArrowUp />
  </div>
  <MainFooter />
</template>

<style scoped></style>
