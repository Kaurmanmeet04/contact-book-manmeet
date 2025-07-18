<template>
  <h2 class="text-center mt-4">Edit Contact</h2>
  <ContactForm :contactData="contact" isEdit />
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getContactById } from '../helpers/localStorage'
import ContactForm from '../components/ContactForm.vue'

const route = useRoute()
const contact = ref(getContactById(route.params.id))
</script>
