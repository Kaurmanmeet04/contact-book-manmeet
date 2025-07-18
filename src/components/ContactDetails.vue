<template>
  <div v-if="contact" class="container mt-4">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p><strong>Email:</strong> {{ contact.email }}</p>
    <p><strong>Phone:</strong> {{ contact.phone }}</p>

    <div class="mt-3">
      <router-link :to="`/edit/${contact.id}`" class="btn btn-warning me-2">Edit</router-link>
      <button @click="deleteContact" class="btn btn-danger me-2">Delete</button>
      <router-link to="/" class="btn btn-secondary">Back</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getContactById, getContacts, saveContacts } from '../helpers/localStorage'

const route = useRoute()
const router = useRouter()
const contact = ref(getContactById(route.params.id))

function deleteContact() {
  const contacts = getContacts().filter(c => c.id !== contact.value.id)
  saveContacts(contacts)
  router.push('/')
}
</script>
