<template>
  <div class="flex flex-col lg:grid lg:gap-10 lg:grid-cols-4 lg:my-20">
    <div class="col-start-1 mb-10">
      <h3 class="text-4xl text-colorMain font-bold my-4">Nos prestations</h3>
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
      class="relative mb-5"
      data-aos="fade-up"
      :data-aos-delay="(index + 1) * 200"
    >
      <RouterLink :to="{ name: 'realisations', params: { gallery: prestation.gallery } }">
        <img class="hover:drop-shadow-2xl h-full w-full" :src="prestation.src" />
        <div class="bg-white pl-5 lg:-m-6 lg:absolute -bottom-10 lg:right-10 mb-5">
          <h3 class="font-bold mb-1 text-colorMain text-xl">{{ prestation.h3 }}</h3>
          <p>{{ prestation.p }}</p>
          <br />
          <p class="font-semibold text-colorThird">
            Plus d'informations <ArrowRightIcon class="h-6 w-6 inline-block" />
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

import parquet from '@/assets/img/floor/parquet.jpg'
import exterieur from '@/assets/img/outdoor/exterieur.jpg'
import interieur from '@/assets/img/indoor/cuisine6-min.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    offset: 10,
    delay: 0,
    duration: 600
  })
})

const prestations = ref([
  {
    h3: 'Agencement intérieur :',
    gallery: 'interieur',
    colNumber: '2',
    src: interieur,
    p: 'Cuisine, salle de bain, dressing, bibliothèque, mobilier.'
  },
  {
    h3: 'Agencement extérieur :',
    gallery: 'exterieur',
    colNumber: '3',
    src: exterieur,
    p: 'Terrasse, pergola, marquise, jardinière, bardage.'
  },
  {
    h3: 'Sol et plafond :',
    gallery: 'sol-et-plafond',
    colNumber: '4',
    src: parquet,
    p: 'Parquet flottant, massif, stratifié, lambris.'
  }
])
</script>

<style scoped></style>
