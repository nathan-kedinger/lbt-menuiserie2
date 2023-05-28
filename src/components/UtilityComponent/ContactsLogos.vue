<template>
  <div class="fixed right-4 top-10">
    <ul>
      <li v-for="item in sideLogo" :key="item.name" :class="item.class">
        <a :href="item.href">
          <img
            :src="item.src"
            :alt="item.alt"
            class="h-11 w-auto p-2 m-5 bg-gray-700 rounded-full hover:bg-yellow-700 hover:scale-110"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import phoneLogo from '@/assets/img/logos/logo-phone.png'
import facebookLogo from '@/assets/img/logos/logo-facebook.png'
import instagramLogo from '@/assets/img/logos/logo-instagram.png'
import contactLogo from '@/assets/img/logos/logo-mail.png'

const sideLogo = ref([
  {
    name: 'PHONE',
    href: '',
    alt: 'Phone logo',
    src: phoneLogo,
    class: 'phone'
  },
  {
    name: 'FACEBOOK',
    href: 'https://www.facebook.com/profile.php?id=100083121973265',
    alt: 'Facebook logo',
    src: facebookLogo,
    class: ''
  },
  {
    name: 'INSTAGRAM',
    href: 'https://www.instagram.com/lbtmenuiserie/',
    alt: 'Instagram logo',
    src: instagramLogo,
    class: ''
  },
  {
    name: 'CONTACT',
    href: '/contact',
    alt: 'Contact logo',
    src: contactLogo,
    class: ''
  }
])
</script>

<style scoped>
.phone {
}

.logo {
}
</style>
