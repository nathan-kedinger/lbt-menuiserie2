<template>
  <div class="lg:grid lg:gap-5 lg:grid-cols-3">
    <div
      v-for="image in images"
      :key="image.name"
      class="hover:scale-105 hover:opacity-100 ease-in-out duration-300 overflow-hidden shadow-xl my-10 lg:my-0 opacity-90"
      @click="selectedImage = image"
    >
      <img :src="image.src" :alt="image.alt" class="image-class rounded-lg" />
      <div class="relative">
        <div
          v-if="image.description"
          class="absolute left-0 -top-7 bg-white p-6 pb-5 -my-10 -ml-3 mr-10"
        >
          <p class="font-bold text-xl">
            {{ image.alt }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Image Modal selection -->
  <div
    v-if="selectedImage"
    class="fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    @click.self="selectedImage = null"
  >
    <div class="relative max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <button class="fixed right-10 top-96 z-20" @click="nextImage">
          <ChevronRightIcon class="h-12 w-12" />
        </button>
        <button class="fixed left-10 top-96" @click="previousImage">
          <ChevronLeftIcon class="h-12 w-12" />
        </button>
        <!-- Modal header -->
        <div class="flex items-center justify-between p-3 border-b">
          <h3 class="text-xl font-medium text-gray-900">
            {{ selectedImage.name }}
          </h3>
          <button
            @click="selectedImage = null"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <XMarkIcon class="block h-6 w-6" aria-hidden="true" />
            <span class="sr-only">Fermer le modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-2">
          <img
            :src="selectedImage.src"
            :alt="selectedImage.name"
            class="object-contain h-full w-full p-1"
          />
          <p>{{ selectedImage.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ImageApiClass } from '@/assets/js/ImageApiClass'

const props = defineProps({
  galleryData: String
})
const selectedImage = ref(null)
const images = ref([])
const imageApi = new ImageApiClass()

async function fetchImages() {
  try {
    images.value = await imageApi.getImages(props.galleryData)
  } catch (e) {
    console.error(e)
  }
}

fetchImages()

function nextImage() {
  const currentIndex = images.value.findIndex((image) => image.id === selectedImage.value.id)
  if (currentIndex < images.value.length - 1) {
    selectedImage.value = images.value[currentIndex + 1]
  } else {
    selectedImage.value = images.value[0]
  }
}

function previousImage() {
  const currentIndex = images.value.findIndex((image) => image.id === selectedImage.value.id)
  if (currentIndex > 0) {
    selectedImage.value = images.value[currentIndex - 1]
  } else {
    selectedImage.value = images.value[images.value.length - 1]
  }
}
</script>

<style scoped>
.image-class {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
