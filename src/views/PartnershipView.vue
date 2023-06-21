<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
// SEO Optimization
/*import { computed, ref } from 'vue'
import { useHead } from '@vueuse/head'

const siteData = ref({
  title: 'Artisans - Menuisier Trièves et Grenoble',
  description:
    "Un projet de menuiserie ? Nous travaillons avec les meilleurs artisans. Faites appel à des professionnels de l'agenecement, contactez nous !"
})
useHead({
  title: computed(() => siteData.value.title),
  meta: [
    {
      name: 'description',
      content: computed(() => siteData.value.description)
    }
  ]
})*/
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
