<script setup>
// SEO Optimization
import { computed, ref } from 'vue'
import { useHead } from '@vueuse/head'

const siteData = ref({
  title: 'Mentions légales - Menuisier Trièves et Grenoble',
  description:
    "Un projet de menuiserie : cuisine, parquet, terrasse? Faites appel à des professionnels de la menuiserie et de l'agenecement, contactez nous !"
})
useHead({
  title: computed(() => siteData.value.title),
  meta: [
    {
      name: 'description',
      content: computed(() => siteData.value.description)
    }
  ]
})
</script>
<template></template>

<style scoped></style>
