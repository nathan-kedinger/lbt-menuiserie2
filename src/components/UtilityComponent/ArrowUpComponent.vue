<template>
  <div class="relative">
    <IconArrowUp
      @click="scrollTop"
      v-show="isShown"
      class="z-50 fixed right-3 bottom-4 ease-in-out hover:scale-105"
      alt="scroll top button"
    />
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import IconArrowUp from '../icons/IconArrowUp.vue'

const isShown = ref(false)

const scrollTop = function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const checkScroll = function checkscroll() {
  isShown.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})
onBeforeMount(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped></style>
