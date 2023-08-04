<template>
  <header>
    <!-- Background color -->
    <!--<div class="absolute top-0 left-0 right-0 bg-colorFourth h-2/5 -z-10"></div>-->
    <img
      class="hidden relative mx-auto mt-7 h-32 w-auto md:block rounded-full"
      src="../../assets/img/logobastien-min.jpg"
      alt="Logo LB Trièves Menuiserie"
    />
    <Disclosure as="nav" class="sm:mt-8" v-slot="{ open, close }">
      <div class="w-full px-2 sm:px-6 lg:px-8 border-t-2 border-colorMain">
        <div class="relative flex h-16 items-center">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Ouvrir le menu principal</span>
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

            <!-- Large screen -->
            <div class="hidden w-full sm:ml-6 sm:block">
              <div class="flex justify-between">
                <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  :class="[
                    item.current ? 'text-colorThird' : 'text-colorMain nav-link-m',
                    ' px-3 py-2 text-xl relative nav-font'
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  @click="updateCurrent(item)"
                  ><div class="">
                    {{ item.name }}
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Smaller screen -->
      <DisclosurePanel class="sm:hidden z-50">
        <div class="space-y-1 px-2 pb-3 pt-2 w-11/12">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :class="[
              item.current ? 'bg-colorMain text-white' : 'text-colorMain',
              'block rounded-md px-3 py-2 text-base font-medium'
            ]"
            :aria-current="item.current ? 'page' : undefined"
            @click="
              () => {
                updateCurrent(item)
                close()
              }
            "
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
  { name: 'Accueil', href: '/', current: true },
  { name: 'Réalisations', href: '/realisations/interieur', current: false },
  { name: 'Partenaires', href: '/partnership', current: false },
  { name: 'Contact', href: '/contact', current: false }
])
function updateCurrent(item) {
  navigation.value.forEach(function (navItem) {
    navItem.current = navItem === item
  })
}
</script>
