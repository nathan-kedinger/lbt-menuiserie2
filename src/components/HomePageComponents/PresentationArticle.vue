<template>
  <div class="flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-7">
    <div class="lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-4">
      <img
        class="reveal-left lg:border-r-8 border-white"
        src="@/assets/img/cuisine1-min.jpg"
        alt="cuisine double hauteur gain d'espace"
      />
    </div>
    <div class="reveal-bottom-left p-5 -mb-10 bg-white lg:col-start-1 lg:col-span-4 lg:row-end-5">
      <h2 class="font-bold text-xl">Agencement, cuisines, salles de bain, en pose ou sur mesure</h2>
      <p>__</p>
      <RouterLink to="/realisations">Nos réalisations</RouterLink>
    </div>
    <div
      class="lg:col-start-6 lg:col-span-4 lg:row-start-1 lg:row-span-6 z-10 overflow-hidden relative"
    >
      <img
        class="reveal-top absolute top-0 left-0 w-full h-full lg:border-l-8 border-white object-cover object-top"
        src="@/assets/img/cuisine10-min.jpg"
        alt="Cuisine plan de travail blanc et façades en bois massif"
      />
    </div>
    <div
      class="reveal-bottom-right lg:col-start-9 lg:col-span-4 lg:row-start-5 lg:row-span-3 z-20 lg:border-8 lg:border-r-0 border-white"
    >
      <img
        class="lg:border-8 lg:border-r-0 border-white"
        src="@/assets/img/cuisine4-min.jpg"
        alt="cuisine îlot déporté"
      />
    </div>
    <div
      class="p-5 bg-white lg:col-start-10 lg:col-span-4 lg:row-start-2 text-center font-semibold"
    >
      <p class="reveal-right text-xl">
        LB Trièves MENUISERIE, une entreprise du Trièves, au coeur des montagnes. C'est à
        Monestier-de-Clermont, au sud de Grenoble, que nous travaillons le bois et imaginons votre
        futur intérieur.
      </p>
    </div>
  </div>
</template>

<style scoped>
.reveal-left {
  opacity: 0;
  transform: translate(-5%, 5%);
}
.reveal-bottom-left {
  opacity: 0.8;
  transform: translate(-10%, 0%);
}

.reveal-right {
  opacity: 0.8;
  transform: translate(10%, 0%);
}
.reveal-bottom-right {
  opacity: 0;
  transform: translate(10%, 10%);
}
.reveal-top {
  opacity: 0;
  transform: translate(0%, -10%);
}
.reveal-visible {
  opacity: 1;
  transform: translate(0%);
  transition: 1s cubic-bezier(0.5, 0, 0, 1);
}
</style>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  const threshold = 0.1
  const options = {
    root: null,
    rootMargin: '0px',
    threshold
  }

  const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > threshold) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersect, options)
  const targets = document.querySelectorAll(
    '.reveal-left, .reveal-right, .reveal-top, .reveal-bottom-left, .reveal-bottom-right'
  )
  targets.forEach(function (target) {
    observer.observe(target)
  })
})

onBeforeUnmount(() => {
  const targets = document.querySelectorAll(
    '.reveal-left, .reveal-right, .reveal-top, .reveal-bottom-left, .reveal-bottom-right'
  )
  targets.forEach(function (target) {
    target.classList.remove('reveal-visible')
  })
})
</script>
