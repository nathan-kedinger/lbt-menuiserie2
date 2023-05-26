<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MainHeader from '@/components/Header/MainHeader.vue'
import MainFooter from '@/components/Footer/MainFooter.vue'
import ArrowUp from '@/components/UtilityComponent/ArrowUp.vue'
</script>

<template>
  <MainHeader />
  <main>
    <div class="container px-4">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>

      <RouterView />
    </div>
  </main>
  <MainFooter />
  <ArrowUp />
</template>

<style scoped></style>
