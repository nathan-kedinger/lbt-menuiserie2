<script setup>
import MainHeader from '@/components/Header/MainHeader.vue'
import MainFooter from '@/components/Footer/MainFooter.vue'
import ArrowUp from '@/components/UtilityComponent/ArrowUp.vue'
import ContactsLogos from '@/components/UtilityComponent/ContactsLogos.vue'
</script>

<template>
  <div class="container px-44">
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
