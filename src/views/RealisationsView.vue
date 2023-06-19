<template>
  <Disclosure as="nav2" v-slot="{ open }">
    <!-- Large screen -->
    <div class="hidden my-10 sm:ml-6 sm:block">
      <div class="flex flex-col items-center">
        <div class="inline-flex">
          <div
            v-for="item in navigation"
            :key="item.name"
            :class="[
              item.current
                ? 'text-colorMain'
                : 'text-grey-900 font-semibold hover:text-colorMain group-hover:',
              ' bg-gradient-to-b from-gray-50 via-white to-gray-100 px-4 py-2 text-sm font-semibold drop-shadow-2xl',
              item.class
            ]"
            :aria-current="item.current ? 'page' : undefined"
            @click="updateCurrent(item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-hidden">
      <div v-for="item in navigation" :key="item.name" v-show="item.current">
        <h1>{{ item.name }}</h1>
        <div class="flex justify-center">
          <div class="flex justify-center w-1/2 sm:hidden border-2 rounded-lg">
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
        <DisclosurePanel class="sm:hidden">
          <!-- Small screen -->
          <div>
            <div
              v-for="item in navigation"
              :key="item.name"
              :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              ]"
              :aria-current="item.current ? 'page' : undefined"
              @click="updateCurrent(item)"
            >
              {{ item.name }}
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
import { ref } from 'vue'
import IndoorGalleryArticle from '@/components/Realisations/IndoorGalerieArticle.vue'
import OutdoorGalleryArticle from '@/components/Realisations/OutdoorGalerieArticle.vue'
import FloorGalleryArticle from '@/components/Realisations/FloorGalerieArticle.vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'
const navigation = ref([
  {
    name: 'CUISINES ET AGENCEMENTS',
    href: '/',
    current: true,
    gallery: IndoorGalleryArticle,
    class: 'rounded-l-lg'
  },
  {
    name: 'AGENCEMENTS EXTERIEURS',
    href: '/realisations',
    current: false,
    gallery: OutdoorGalleryArticle,
    class: 'border-r-2 border-l-2'
  },
  {
    name: 'SOLS ET PLAFONDS',
    href: '/about',
    current: false,
    gallery: FloorGalleryArticle,
    class: 'rounded-r-lg'
  }
])
function updateCurrent(item) {
  navigation.value.forEach(function (navItem) {
    navItem.current = navItem === item
  })
}
</script>
