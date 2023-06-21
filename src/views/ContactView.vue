<template>
  <ContactArticle></ContactArticle>
  <SeparationComponent />
  <CitiesArticle />
</template>

<script setup>
import ContactArticle from '@/components/SharedArticles/ContactArticle.vue'
import CitiesArticle from '@/components/Contact/CitiesArticle.vue'
import SeparationComponent from '@/components/UtilityComponent/SeparationComponent.vue'
import { useHead } from '@vueuse/head'
import { computed, ref } from 'vue'

// SEO Optimization
const siteData = ref({
  title: 'Contact - Menuisier Trièves et Grenoble',
  description:
    "Un projet de menuiserie à Grenoble ou dans le Trièves  ? Faites appel à des professionnels de la menuiserie et de l'agenecement, contactez nous !"
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

<style scoped></style>
