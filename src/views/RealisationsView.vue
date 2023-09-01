<template>
  <Disclosure as="nav2" v-slot="{ open, close }">
    <!-- Large screen -->
    <div class="hidden w-full mt-1 mb-8 sm:block">
      <div class="flex justify-center">
        <div
          v-for="item in navigation"
          :key="item.name"
          class="text-white bg-colorMain cursor-pointer font-semibold hover:text-colorMain hover:bg-colorFifth px-4 py-2 w-full text-center text-sm font-semibold drop-shadow-md"
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
        <p class="m-6">
          {{ item.description }}
        </p>
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
              @click="
                () => {
                  updateCurrent(item)
                  close()
                }
              "
            >
              <p>{{ item.name }}</p>
            </div>
          </div>
        </DisclosurePanel>

        <!-- Access to galleries-->
        <component :is="item.gallery" :galleryData="item.galleryData" />
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import { markRaw, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'
import { useHead } from '@vueuse/head'
import GenericGallery from '@/components/Realisations/GenericGallery.vue'

const navigation = ref([
  {
    name: 'Cuisines et Agencements',
    href: 'interieur',
    current: true,
    gallery: markRaw(GenericGallery), // using markRaw to improve performance (avoid reactivity)
    galleryData: 'api/indoor_pictures',
    description:
      '    ' +
      "    Nous réalisons toutes vos demandes d'agencements intérieurs. Nos compétences s'étendent de la\n" +
      '    conception et la fabrication complète de vos agencements, à la pose simple, avec fourniture.\n' +
      '    Vous serez accompagnés de conseils professionnels pendant toute la durée du projet.',
    class: ''
  },
  {
    name: 'Agencements Extérieurs',
    href: 'exterieur',
    current: false,
    gallery: markRaw(GenericGallery),
    galleryData: 'api/outdoor_pictures',
    description:
      '' +
      "    Nous réalisons toutes vos demandes d'agencements extérieur. La réalisation d'ouvrage exposés aux\n" +
      '    intempéries du climat demande un savoir faire particulier. Nous serons heureux de partager avec\n' +
      "    vous nos connaissances. nous vous acompagnons de conception à la fabrication complète, jusqu'à\n" +
      '    la de vos agencements extérieurs. Si vous avez un projet de terrasse, de pergola, de\n' +
      "    jardinière... N'hesitez plus et contactez-nous.",
    class: 'border-r-2 border-l-2'
  },
  {
    name: 'Sols et Plafonds',
    href: 'sol-et-plafond',
    current: false,
    gallery: markRaw(GenericGallery),
    galleryData: 'api/floor_pictures',
    description:
      "    Nous réalisons toutes vos poses de sol, d'habillages muraux et de plafonds. Parquet en bois\n" +
      '    massif cloué ou collé, parquet stratifié, lambris bois... Nous maitrisons les techniques de pose\n' +
      "    d'habillage, du sol au plafond. Nous vous accompagnerons de la réflexion à la réalisation de vos\n" +
      "    projets d'habillages en bois ou en matériaux composites.",
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
