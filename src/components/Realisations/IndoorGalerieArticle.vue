<template>
  <p class="m-10">
    Nous réalisons toutes vos demandes d'agencements intérieurs. Nos compétences s'étendent de la
    conception et la fabrication complète de vos agencements, à la pose simple, avec fourniture.
    Vous serrez acompagnés de conseils professionnels pendant toute la durée du projet.
  </p>

  <div class="lg:grid lg:gap-5 lg:grid-cols-3">
    <div
      v-for="image in images"
      :key="image.name"
      class="hover:scale-105 hover:opacity-100 ease-in-out duration-300 overflow-hidden opacity-90"
      @click="selectedImage = image"
    >
      <img :src="image.src" :alt="image.alt" class="image-class rounded-lg" />
      <div v-if="image.description" class="relative bg-white p-3 -my-16 -ml-3 mr-10">
        <h2 class="font-bold text-xl">
          {{ image.alt }}
        </h2>
      </div>
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
        <p class="m-2">{{ selectedImage.alt }}</p>
        <img :src="selectedImage.src" alt="selected image" class="w-full h-full p-3" />
        <button @click="selectedImage = null" class="absolute top-2 right-2">
          <XMarkIcon class="block h-6 w-6" aria-hidden="true" />
        </button>
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
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { DisclosureButton } from '@headlessui/vue'

const selectedImage = ref(null)

const imgArray = [
  [cuisine1, 'cuisine', 'Cuisine blanche bois', '1'],
  [cuisine2, 'cuisine', 'Cuisine blanche', '0'],
  [cuisine4, 'cuisine', 'Cuisine bois massif', '0'],
  [cuisine5, 'cuisine', 'Cuisine rouge vif', '0'],
  [cuisine6, 'meuble', 'Meuble laqué', '1'],
  [cuisine7, 'cuisine', 'Cuisine blanche bois', '0'],
  [cuisine2, 'cuisine', 'Cuisine blanche', '1'],
  [cuisine4, 'cuisine', 'Cuisine bois massif', '0'],
  [cuisine5, 'cuisine', 'Cuisine rouge vif', '0'],
  [cuisine7, 'meuble', 'Meuble laqué', '0'],
  [cuisine1, 'cuisine', 'Cuisine blanche bois', '0'],
  [cuisine2, 'cuisine', 'Cuisine blanche', '0'],
  [cuisine4, 'cuisine', 'Cuisine bois massif', '0'],
  [cuisine5, 'cuisine', 'Cuisine rouge vif', '0'],
  [cuisine1, 'cuisine', 'Cuisine blanche bois', '0'],
  [cuisine6, 'meuble', 'Meuble laqué', '1']
]

const images = ref(
  imgArray.map((img, index) => {
    let id = index + 1
    return {
      id: id,
      src: img[0],
      name: img[1],
      alt: img[2],
      description: img[3] === '1'
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
