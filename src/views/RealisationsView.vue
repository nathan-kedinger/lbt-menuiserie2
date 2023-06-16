<template>
  <div class="sm:ml-6 sm:block">
    <div class="flex justify-center border-2">
      <div>
        <div
          v-for="item in navigation"
          :key="item.name"
          :class="[
            item.current ? 'text-yellow-600' : 'text-dark font-semibold hover:text-yellow-600 ',
            'rounded-md border-2 bg-amber-50 px-3 py-2 text-sm  font-semibold font-medium'
          ]"
          :aria-current="item.current ? 'page' : undefined"
          @click="updateCurrent(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>

  <div>
    <div v-for="item in navigation" :key="item.name" v-show="item.current">
      <component :is="item.galerie" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IndoorGalerieArticle from '@/components/Realisations/IndoorGalerieArticle.vue'
import OutdoorGalerieArticle from '@/components/Realisations/OutdoorGalerieArticle.vue'
import FloorGalerieArticle from '@/components/Realisations/FloorGalerieArticle.vue'
const navigation = ref([
  { name: 'CUISINES ET AGENCEMENTS', href: '/', current: true, galerie: IndoorGalerieArticle },
  {
    name: 'AGENCEMENTS EXTERIEURS',
    href: '/realisations',
    current: false,
    galerie: OutdoorGalerieArticle
  },
  { name: 'SOLS ET PLAFONDS', href: '/about', current: false, galerie: FloorGalerieArticle }
])
function updateCurrent(item) {
  navigation.value.forEach(function (navItem) {
    navItem.current = navItem === item
  })
}
</script>
