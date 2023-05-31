<template>
  <div class="fixed right-4 top-10 z-50">
    <ul>
      <li class="relative">
        <a @click="showPhoneNumber">
          <img
            :src="phoneLogo"
            class="h-11 w-auto p-2 m-5 bg-gray-700 rounded-full hover:bg-gray-600 hover:scale-110"
          />
        </a>
      </li>
      <li v-for="item in sideLogo" :key="item.name" :class="item.class">
        <router-link v-if="item.internal" :to="item.href">
          <img
            :src="item.src"
            :alt="item.alt"
            class="h-11 w-auto p-2 m-5 bg-gray-700 rounded-full hover:bg-gray-600 hover:scale-110"
          />
        </router-link>
        <a v-else :href="item.href">
          <img
            :src="item.src"
            :alt="item.alt"
            class="h-11 w-auto p-2 m-5 bg-gray-700 rounded-full hover:bg-gray-600 hover:scale-110"
          />
        </a>
      </li>
    </ul>
  </div>
  <div class="fixed right-4 top-10 z-40">
    <div
      v-show="showPhone"
      :class="[
        'absolute right-2 top-0.5 rounded-full h-10 p-2 pl-4 pr-11 m-5 bg-gray-700 text-center',
        showPhone
          ? 'opacity-100 -translate-x-0 duration-700 ease-in-out transition-transform'
          : 'opacity-0 translate-x-full'
      ]"
    >
      <p class="relative inline-flex text-gray-50 m-0.5">06.06.06.06.06</p>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

import phoneLogo from '@/assets/img/logos/logo-phone.png'
import facebookLogo from '@/assets/img/logos/logo-facebook.png'
import instagramLogo from '@/assets/img/logos/logo-instagram.png'
import contactLogo from '@/assets/img/logos/logo-mail.png'

const sideLogo = ref([
  {
    name: 'FACEBOOK',
    href: 'https://www.facebook.com/profile.php?id=100083121973265',
    alt: 'Facebook logo',
    src: facebookLogo,
    class: '',
    internal: false
  },
  {
    name: 'INSTAGRAM',
    href: 'https://www.instagram.com/lbtmenuiserie/',
    alt: 'Instagram logo',
    src: instagramLogo,
    class: '',
    internal: false
  },
  {
    name: 'CONTACT',
    href: '/contact',
    alt: 'Contact logo',
    src: contactLogo,
    class: '',
    internal: true
  }
])

let showPhone = ref(false)

const checkScroll = function checkscroll() {
  hidePhoneNumber()
}
function showPhoneNumber() {
  if (showPhone.value === false || showPhone.value === true) {
    showPhone.value = !showPhone.value
  }
}
function hidePhoneNumber() {
  showPhone.value = false
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.phone {
}

.logo {
}
</style>
