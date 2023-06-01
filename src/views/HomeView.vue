<script setup>
import PresentationArticle from '@/components/HomePage/TopArticle.vue'
import SeparationComponent from '@/components/UtilityComponent/SeparationComponent.vue'
import DescriptionArticle from '@/components/HomePage/DescriptionArticle.vue'
import ContactArticle from '@/components/SharedArticles/ContactArticle.vue'
import KnowledgeArticle from '@/components/HomePage/PrestationsArticle.vue'
</script>

<template>
  <main>
    <PresentationArticle />
    <SeparationComponent></SeparationComponent>
    <DescriptionArticle></DescriptionArticle>
    <SeparationComponent></SeparationComponent>
    <knowledge-article />
    <SeparationComponent></SeparationComponent>
    <ContactArticle />
  </main>
</template>
