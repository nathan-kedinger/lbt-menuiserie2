<template>
  <div class="sm:ml-6 sm:block">
    <div class="flex justify-center">
      <RouterLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.href"
        :class="[
          item.current
            ? 'text-yellow-600'
            : 'text-dark text-xl font-semibold hover:text-yellow-600',
          'rounded-md px-3 py-2 text-sm text-xl font-semibold font-medium'
        ]"
        :aria-current="item.current ? 'page' : undefined"
        @click="updateCurrent(item)"
        >{{ item.name }}</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const navigation = ref([
  { name: ' ', href: '/', current: true },
  { name: 'CUISINES ET AGENCEMENTS', href: '/realisations', current: false },
  { name: 'PARTENAIRES', href: '/about', current: false }
])
function updateCurrent(item) {
  navigation.value.forEach(function (navItem) {
    navItem.current = navItem === item
  })
}
</script>
