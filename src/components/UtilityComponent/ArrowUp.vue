<template>
  <div class="relative">
    <img
      @click="scrollTop"
      v-show="isShown"
      src="@/assets/img/logobastien-min.jpg"
      class="rounded-full h-10 w- auto z-50 fixed right-3 bottom-4"
      alt="scroll top button"
    />
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'

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
