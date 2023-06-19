<template>
  <div class="fixed -right-4 lg:right-0 top-3 z-10">
    <ul>
      <li class="relative">
        <a @click="showPhone = !showPhone">
          <img
            :src="phoneLogo"
            alt="Logo téléphone"
            class="h-8 lg:h-9 w-auto p-1 m-5 bg-colorMain rounded-full hover:bg-colorSecond hover:scale-110"
          />
        </a>
        <transition
          name="slide"
          enter-active-class="transition-all duration-300 ease-in-out"
          leave-active-class="transition-all duration-300 ease-in-out"
        >
          <div
            v-if="showPhone"
            class="absolute opacity-100 right-7 top-0 z-10 rounded-full h-8 lg:h-9 p-1 pb-4 pl-4 pr-7 bg-colorSecond text-center"
          >
            <p class="relative inline-flex text-gray-50 m-0.5">06.06.06.06.06</p>
          </div>
        </transition>
      </li>
      <li v-for="item in sideLogo" :key="item.name" :class="item.class">
        <router-link v-if="item.internal" :to="item.href">
          <img
            :src="item.src"
            :alt="item.alt"
            class="h-8 lg:h-9 w-auto p-1 m-5 bg-colorMain rounded-full hover:bg-colorSecond hover:scale-110"
          />
        </router-link>
        <a v-else :href="item.href">
          <img
            :src="item.src"
            :alt="item.alt"
            class="h-8 lg:h-9 w-auto p-1 m-5 bg-colorMain rounded-full hover:bg-colorSecond hover:scale-110"
          />
        </a>
      </li>
    </ul>
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
.slide-enter-from {
  opacity: 0;
  transform: translateX(8%);
}
.slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-enter-active {
  transition: opacity 0.7s, transform 0.3s;
}
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(8%);
}
.slide-leave-active {
  transition: opacity 0.7s, transform 0.3s;
}
</style>
