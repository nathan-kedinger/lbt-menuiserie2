<script setup>
import PresentationArticle from '@/components/HomePageArticles/PresentationArticle.vue'
import SeparationComponent from '@/components/UtilityComponent/SeparationComponent.vue'
import DescriptionArticle from '@/components/HomePageArticles/DescriptionArticle.vue'
import ContactArticle from '@/components/SharedArticles/ContactArticle.vue'
import KnowledgeArticle from '@/components/HomePageArticles/KnowledgeArticle.vue'
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
