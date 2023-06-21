<template>
  <main>
    <PresentationArticle />
    <SeparationComponent></SeparationComponent>
    <KnowledgeArticle />
    <SeparationComponent></SeparationComponent>
    <DescriptionArticle></DescriptionArticle>
    <SeparationComponent></SeparationComponent>
    <ContactArticle />
  </main>
</template>

<script setup>
import PresentationArticle from '@/components/HomePage/TopArticle.vue'
import SeparationComponent from '@/components/UtilityComponent/SeparationComponent.vue'
import DescriptionArticle from '@/components/HomePage/DescriptionArticle.vue'
import ContactArticle from '@/components/SharedArticles/ContactArticle.vue'
import KnowledgeArticle from '@/components/HomePage/PrestationsArticle.vue'

import { computed, ref } from 'vue'
import { useHead } from '@vueuse/head'

const siteData = ref({
  title: 'LB Trièves Menuiserie - Menuisier - Agencement - Grenoble - Trièves',
  description:
    "Un projet de menuiserie : cuisine, dressing, parquet, terrasse ? Faites appel à des professionnels de la menuiserie et de l'agenecement, contactez nous !"
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
