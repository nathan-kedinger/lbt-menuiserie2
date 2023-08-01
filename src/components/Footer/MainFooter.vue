<template class="absolute left-0 bottom-0 right-0">
  <footer class="mt-20">
    <div class="bg-colorMain text-white pt-16 px-32">
      <div class="grid grid-cols-3 mb-5 gap-x-20">
        <div class="relative block justify-center">
          <h3 class="mb-4 text-3xl text-white">Savoirs faires</h3>
          <p>
            Concéption et fabrication de menuiserie et d'agencement sur mesure à Grenoble et dans le
            Trièves. Agencement intérieur et extérieur. Fourniture et pose. Cuisinie, Salle de bain,
            parquets, bibliothèques, dressing, lambris, volets...
          </p>
        </div>
        <div class="relative">
          <h3 class="mb-2 text-3xl text-white">PLAN DU SITE</h3>
          <ul>
            <li>
              <RouterLink to="/">{{ 'Accueil' }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/realisations/interieur">{{ 'Intérieur' }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/realisations/exterieur">{{ 'Extérieur' }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/realisations/sol-et-plafond">{{ 'Sol et plafond' }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/partnership">{{ 'Partenaires' }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact">{{ 'Contact' }}</RouterLink>
            </li>
            <li></li>
          </ul>
        </div>
        <div class="relative">
          <h3 class="mb-4 text-3xl text-white">COORDONEES</h3>
          <div class="inline-flex">
            <a href="">
              <img
                class="block h-6 w-6"
                src="../../assets/img/logos/logo-instagram.png"
                alt="Logo Instagram"
              />
            </a>
            <a href="">
              <img
                class="block h-6 w-6 ml-3"
                src="../../assets/img/logos/logo-facebook.png"
                alt="Logo Facebook"
              />
            </a>
          </div>

          <p>Bastien LEGENDRE</p>
          <p>Tel : 06.17.62.46.26</p>
          <p>Mail : legendre.bastien@gmail.com</p>
        </div>
      </div>
      <div class="relative text-center">
        <p>© LB Trièves Menuiserie | Tous droits réservés</p>
        <RouterLink to="/legal">{{ 'Mentions légales' }}</RouterLink>
        <p>Réalisation Nathan KEDINGER</p>
        <br />
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
