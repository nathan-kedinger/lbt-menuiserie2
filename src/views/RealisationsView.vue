<template>
  <Disclosure as="nav2" v-slot="{ open }">
    <!-- Large screen -->
    <div class="hidden w-full mt-1 mb-8 sm:block">
      <div class="flex justify-center">
        <div
          v-for="item in navigation"
          :key="item.name"
          class="text-white bg-colorMain font-semibold hover:text-colorMain hover:bg-colorFifth px-4 py-2 w-full text-center text-sm font-semibold drop-shadow-md"
          :aria-current="item.current ? 'page' : undefined"
          @click="updateCurrent(item)"
        >
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>

    <div class="overflow-hidden">
      <div v-for="item in navigation" :key="item.name" v-show="item.current">
        <h1>{{ item.name }}</h1>
        <div class="flex justify-center">
          <div class="flex justify-center w-1/2 sm:hidden border-2 rounded-lg mb-3">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="inline-flex items-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <p class="text-center">{{ item.name }}</p>
              <ChevronDownIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <ChevronUpIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
        <DisclosurePanel class="flex items-center justify-center sm:hidden">
          <!-- Small screen -->
          <div class="inline-block border w-2/3">
            <div
              v-for="item in navigation"
              :key="item.name"
              :class="[
                item.current ? 'bg-colorMain text-white' : 'text-colorMain',
                'block rounded-md px-3 py-2  font-medium '
              ]"
              :aria-current="item.current ? 'page' : undefined"
              @click="updateCurrent(item)"
            >
              <p>{{ item.name }}</p>
            </div>
          </div>
        </DisclosurePanel>

        <!-- Access to galleries-->
        <component :is="item.gallery" />
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import { markRaw, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import IndoorGalleryArticle from '@/components/Realisations/IndoorGalerieArticle.vue'
import OutdoorGalleryArticle from '@/components/Realisations/OutdoorGalerieArticle.vue'
import FloorGalleryArticle from '@/components/Realisations/FloorGalerieArticle.vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'
import { useHead } from '@vueuse/head'

const navigation = ref([
  {
    name: 'Cuisines et Agencements',
    href: 'interieur',
    current: true,
    gallery: markRaw(IndoorGalleryArticle),
    class: ''
  },
  {
    name: 'Agencements Extérieurs',
    href: 'exterieur',
    current: false,
    gallery: markRaw(OutdoorGalleryArticle),
    class: 'border-r-2 border-l-2'
  },
  {
    name: 'Sols et Plafonds',
    href: 'sol-et-plafond',
    current: false,
    gallery: markRaw(FloorGalleryArticle),
    class: ''
  }
])

const router = useRouter()
function updateCurrent(item) {
  navigation.value.forEach(function (navItem) {
    navItem.current = navItem === item
  })
  router.push({ name: 'realisations', params: { gallery: item.href } })

  // SEO
  activeComponent.value = item.href
}

onMounted(() => {
  const route = useRoute() // useRoute pour obtenir l'instance de route actuelle
  const galleryToShow = route.params.gallery // Accéder aux paramètres de l'URL
  const gallery = navigation.value.find((item) => item.href === galleryToShow)
  updateCurrent(gallery)
})

// SEO Optimization
const activeComponent = ref('interieur') // Initialize this with your default component

watch(activeComponent, (newValue) => {
  switch (newValue) {
    case 'interieur':
      useHead({
        title: 'Cuisines - Menuisier Trièves et Grenoble',
        meta: [
          {
            name: 'description',
            content:
              "Un projet de menuiserie : cuisine, dressing, bibliothèque ? Faites appel à des professionnels de la menuiserie et de l'agenecement, contactez nous !"
          }
        ]
      })
      break
    case 'sol-et-plafond':
      useHead({
        title: 'Parquet - Menuisier Trièves et Grenoble',
        meta: [
          {
            name: 'description',
            content:
              "Un projet de menuiserie : Parquet, stratifié, lambris ? Faites appel à des professionnels de la menuiserie et de l'agenecement, contactez nous !"
          }
        ]
      })
      break
    case 'exterieur':
      useHead({
        title: 'Terrasses - Menuisier Trièves et Grenoble',
        meta: [
          {
            name: 'description',
            content:
              "Un projet de menuiserie : Terrasse, brise-vue, Pergola ? Faites appel à des professionnels de la menuiserie et de l'agenecement, contactez nous !"
          }
        ]
      })
      break
    default:
      break
  }
})
</script>
