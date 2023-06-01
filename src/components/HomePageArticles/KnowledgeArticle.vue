<template>
  <div class="flex flex-col lg:grid lg:gap-10 lg:grid-cols-4 lg:my-20">
    <div class="col-start-1 rounded-full text-center bg-amber-50 p-8">
      <h3 class="text-2xl font-bold m-4">Nos prestations</h3>
      <p>
        Nous prennons le temps de réfléchir ensemble, du début à la fin de votre projet. Qu'il soit
        d'un design contemporain ou traditionnel.<br />
        Nous réalisons les dessins et nous vous aiguillons concernant le choix du bois.<br />
        Tout est pensé pour répondre au mieu à votre demande.
      </p>
    </div>
    <div
      v-for="(prestation, index) in prestations"
      :key="prestation.h3"
      :class="'col-start-' + prestation.colNumber"
      class="relative"
      data-aos="fade-up"
      :data-aos-delay="(index + 1) * 200"
    >
      <RouterLink :to="prestation.to">
        <img class="h-full w-full" :src="prestation.src" />
        <div class="bg-white lg:-m-6 lg:absolute -bottom-10 lg:right-10 mb-5">
          <h3 class="font-bold mb-1 text-xl">{{ prestation.h3 }}</h3>
          <p>{{ prestation.p }}</p>
          <br />
          <p class="font-semibold">Plus d'informations -></p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import parquet from '@/assets/img/parquet.jpg'
import exterieur from '@/assets/img/exterieur.jpg'
import interieur from '@/assets/img/cuisine6-min.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    offset: 200,
    delay: 0.1,
    duration: 1500
  })
})

const prestations = ref([
  {
    h3: 'Agencement intérieur :',
    to: '/',
    colNumber: '2',
    src: interieur,
    p: 'Cuisine, salle de bain, dressing, bibliothèque, mobilier.'
  },
  {
    h3: 'Agencement extérieur :',
    to: '/',
    colNumber: '3',
    src: exterieur,
    p: 'Terrasse, pergola, jardinière, bardage.'
  },
  {
    h3: 'Sol et plafond :',
    to: '/',
    colNumber: '4',
    src: parquet,
    p: 'Parquet flottant, massif, stratifié, lambris.'
  }
])
</script>

<style scoped></style>
