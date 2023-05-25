<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <div class="container">
    <main>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>

      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
