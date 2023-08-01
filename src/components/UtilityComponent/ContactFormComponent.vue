<template>
  <div class="isolate bg-white px-6 py-4 sm:py-5 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-xl font-bold tracking-tight text-colorMain sm:text-3xl">
        Parlez-nous de votre projet
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        Envoyez-nous un message pour une demande de devis ou pour tout autre renseignement.
      </p>
    </div>
    <!-- Validation de l'envoi du formulaire -->
    <div v-if="formStatus" class="bg-green-100 p-6 rounded mt-5 text-green-800">
      {{ formStatus }}
    </div>

    <form
      action="#"
      method="POST"
      @submit.prevent="submitForm"
      class="mx-auto mt-5 max-w-xl sm:mt-5"
    >
      <label for="statue" class="block text-sm leading-6 text-gray-900">Je suis : </label>
      <select
        id="statue"
        name="statue"
        v-model="statue"
        class="block w-full rounded-md bg-white border-0 border-colorSecond px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option value="particulier">Particulier</option>
        <option value="entreprise">Entreprise</option>
      </select>
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div v-if="statue === 'particulier'">
          <label for="first-name" class="mt-2.5 block text-sm leading-6 text-gray-900"
            >Prénom</label
          >
          <div class="mt-1.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="firstname"
            />
          </div>
        </div>
        <div v-if="statue === 'particulier'">
          <label for="last-name" class="mt-2.5 block text-sm leading-6 text-gray-900"
            >Nom de famille</label
          >
          <div class="mt-1.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="lastname"
            />
          </div>
        </div>
        <div v-if="statue === 'entreprise'" class="sm:col-span-2">
          <label for="company" class="mt-2.5 block text-sm leading-6 text-gray-900"
            >Entreprise</label
          >
          <div class="mt-1.5">
            <input
              type="text"
              name="company"
              id="company"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="company"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm leading-6 text-gray-900">Email</label>
          <div class="mt-1.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="email"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm leading-6 text-gray-900"
            >Numéro de téléphone (facultatif)</label
          >
          <div class="relative mt-1.5">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select
                id="country"
                name="country"
                class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>FR</option>
                <option>BE</option>
              </select>
              <ChevronDownIcon
                class="pointer-events-none absolute right-3 top-0 h-full w-4 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="phonenumber"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm leading-6 text-gray-900">Message</label>
          <div class="mt-1.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="message"
            />
          </div>
        </div>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch
              v-model="agreed"
              :class="[
                agreed ? 'bg-colorThird' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              ]"
            >
              <span class="sr-only">politique de confidentialité</span>
              <span
                aria-hidden="true"
                :class="[
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                ]"
              />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-gray-600">
            En validant, j'accepte la
            {{ ' ' }}
            <a href="#" class="font-semibold text-colorThird">politique de confidentialité</a>.
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <input type="hidden" id="csrf_token" name="csrf_token" value="{{ csrf_token }}" />
      <div class="mt-10">
        <button
          type="submit"
          :class="[
            agreed
              ? 'block w-full rounded-md bg-colorSecond px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-colorMain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              : 'block w-full rounded-md border-gray-400 bg-gray-300 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-700 shadow-sm '
          ]"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const statue = ref('particulier')
const firstname = ref('')
const lastname = ref('')
const company = ref('')
const email = ref('')
const phonenumber = ref('')
const message = ref('')
const agreed = ref(false)

const error = ref(false)
let csrf_token = ''
const formStatus = ref('')

/*onMounted(async () => {
  const res = await fetch(process.env.VUE_APP_API_URL + '/csrf_token/contact-form');

  const rawResponse = await res.text();  // Get the raw response
  console.log(rawResponse);  // Log the raw response

  // Parse it as JSON
  try {
    const json = JSON.parse(rawResponse);
    csrf_token = json.csrf_token;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});*/
const submitForm = async () => {
  console.log('bon')
  const formData = {
    statue: statue.value,
    firstname: firstname.value,
    lastname: lastname.value,
    company: company.value,
    email: email.value,
    phonenumber: phonenumber.value,
    message: message.value,
    agreed: agreed.value,
    csrf_token: csrf_token,
    date: new Date().toISOString()
  }
  try {
    /*const headers = {'X-CSRF-TOKEN' : csrf_token}
    const instance = axios.create({
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
    });*/
    await axios
      .post(import.meta.env.VITE_BASE_URL + 'api/contact_forms', formData)
      .catch((error) => console.log(error))
    formStatus.value = 'Le formulaire a bien été envoyé'
    statue.value = 'particulier'
    firstname.value = ''
    lastname.value = ''
    company.value = ''
    email.value = ''
    phonenumber.value = ''
    message.value = ''
    agreed.value = false
  } catch (err) {
    console.error(err)
    formStatus.value = "Echec de l'envoi du formulaire"
  }
}
</script>
