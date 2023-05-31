<script setup>
import PresentationArticle from '@/components/HomePageArticles/PresentationArticle.vue'
import SeparationComponent from '@/components/UtilityComponent/SeparationComponent.vue'
import DescriptionArticle from '@/components/HomePageArticles/DescriptionArticle.vue'
import ContactArticle from '@/components/SharedArticles/ContactArticle.vue'
</script>

<template>
  <main>
    <PresentationArticle />
    <SeparationComponent></SeparationComponent>
    <DescriptionArticle></DescriptionArticle>
    <SeparationComponent></SeparationComponent>
    <ContactArticle />
  </main>
</template>
