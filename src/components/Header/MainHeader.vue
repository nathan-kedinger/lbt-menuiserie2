<template>
  <header>
    <!-- Background color -->
    <!--<div class="absolute top-0 left-0 right-0 bg-amber-50 h-3/5 -z-10"></div>-->
    <img
      class="hidden relative mx-auto mt-8 h-32 w-auto md:block rounded-full"
      src="../../assets/img/logobastien-min.jpg"
      alt="Logo LB Trièves Menuiserie"
    />
    <Disclosure as="nav" class="sm:mt-8" v-slot="{ open }">
      <div class="w-full px-2 sm:px-6 lg:px-8 border-t-2 border-black">
        <div class="relative flex h-16 items-center">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- Logo -->
          <div class="flex flex-auto items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-10 w-auto md:hidden rounded-full"
                src="../../assets/img/logobastien-min.jpg"
                alt="logo LB Trièves menuiserie"
              />
            </div>
            <div class="hidden w-full sm:ml-6 sm:block">
              <div class="flex justify-between">
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
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden z-50">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium'
            ]"
            :aria-current="item.current ? 'page' : undefined"
            @click="updateCurrent(item)"
            >{{ item.name }}
          </RouterLink>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = ref([
  { name: 'ACCUEIL', href: '/', current: true },
  { name: 'REALISATIONS', href: '/realisations', current: false },
  { name: 'PARTENAIRES', href: '/about', current: false },
  { name: 'DEVIS', href: '/where', current: false }
])
function updateCurrent(item) {
  navigation.value.forEach(function (navItem) {
    navItem.current = navItem === item
  })
}
</script>
