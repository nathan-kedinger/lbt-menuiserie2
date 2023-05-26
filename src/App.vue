<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/Header/MainHeader.vue'
</script>

<template>
  <TheHeader />
  <main>
    <div class="container px-4">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>

      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
