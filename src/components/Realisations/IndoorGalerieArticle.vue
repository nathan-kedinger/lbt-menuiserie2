<template>
  <h3>Cuisines et agencements intérieurs</h3>
  <p>
    Nous réalisons toutes vos demandes d'agencements intérieurs. Nos compétences s'étendent de la
    conception et la fabrication complète de vos agencements, à la pose simple, avec fourniture.
    Vous serrez acompagnés de conseils professionnels pendant toute la durée du projet.
  </p>

  <div class="flex flex-col lg:grid lg:gap-7 lg: grid-cols-6 grid-rows-6">
    <div
      v-for="image in images"
      :key="image.name"
      :class="'col-span-' + image.width + ' row-span-' + image.height"
      class="relative hover:scale-105"
      @click="selectedImage = image"
    >
      <img :src="image.src" class="image-class" />
    </div>
  </div>

  <!-- Image Modal -->
  <div
    v-if="selectedImage"
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        @click="selectedImage = null"
      ></div>

      <!-- Modal Content -->
      <div
        class="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <img :src="selectedImage.src" alt="selected image" class="w-full h-full" />
        <button @click="selectedImage = null">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import cuisine1 from '@/assets/img/cuisine1-min.jpg'
import cuisine2 from '@/assets/img/cuisine2-min.jpg'
import cuisine4 from '@/assets/img/cuisine4-min.jpg'
import cuisine5 from '@/assets/img/cuisine5-min.jpg'
import cuisine6 from '@/assets/img/cuisine6-min.jpg'
import cuisine7 from '@/assets/img/cuisine7-min.jpg'

let selectedImage = ref(null)
function height(id) {
  let theHeight
  if (id % 4 === 1) {
    theHeight = 3
  } else {
    theHeight = 1
  }
  return theHeight
}

let imgArray = [
  [cuisine1, 'cuisine', 'Cuisine blanche bois'],
  [cuisine2, 'cuisine', 'Cuisine blanche'],
  [cuisine4, 'cuisine', 'Cuisine bois massif'],
  [cuisine5, 'cuisine', 'Cuisine rouge vif'],
  [cuisine6, 'meuble', 'Meuble laqué'],
  [cuisine7, 'cuisine', 'Cuisine blanche bois'],
  [cuisine2, 'cuisine', 'Cuisine blanche'],
  [cuisine4, 'cuisine', 'Cuisine bois massif'],
  [cuisine5, 'cuisine', 'Cuisine rouge vif'],
  [cuisine7, 'meuble', 'Meuble laqué'],
  [cuisine1, 'cuisine', 'Cuisine blanche bois'],
  [cuisine2, 'cuisine', 'Cuisine blanche'],
  [cuisine4, 'cuisine', 'Cuisine bois massif'],
  [cuisine5, 'cuisine', 'Cuisine rouge vif'],
  [cuisine1, 'cuisine', 'Cuisine blanche bois'],
  [cuisine6, 'meuble', 'Meuble laqué']
]

const images = ref(
  imgArray.map((img, index) => {
    return {
      id: index + 1,
      src: img[0],
      name: img[1],
      alt: img[2],
      height: height(index + 1),
      width: height(index + 1)
    }
  })
)
</script>

<style scoped>
.image-class {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
