<template>
  <footer>
    <div class="bg-black text-white">
      <div class="grid grid-flow-col justify-stretch gap-x-4">
        <div class="relative flex justify-center">
          <h3>PLAN DU SITE</h3>
          <p></p>
        </div>
        <div class="relative flex justify-center">
          <h3>LEGAL</h3>
          <br />
          <RouterLink to="/legal">{{ 'Mentions légales' }}</RouterLink>
        </div>
        <div class="relative flex justify-center">
          <h3>COORDONEES</h3>
          <p></p>
        </div>
        <div class="relative flex justify-center">
          <h3>RESEAUX SOCIAUX</h3>
          <p></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
