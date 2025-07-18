<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <input v-model="search" class="form-control me-3" placeholder="Search by name..." />
      <router-link to="/new" class="btn btn-primary">Add New Contact</router-link>
    </div>
    <ul class="list-group">
      <li
        v-for="contact in filteredContacts"
        :key="contact.id"
        class="list-group-item list-group-item-action"
      >
        <router-link :to="`/contact/${contact.id}`" class="text-decoration-none">
          {{ contact.firstName }} {{ contact.lastName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getContacts } from '../helpers/localStorage'

const search = ref('')
const contacts = ref(getContacts())

const filteredContacts = computed(() => {
  return contacts.value
    .filter(c => (c.firstName + c.lastName).toLowerCase().includes(search.value.toLowerCase()))
    .sort((a, b) => a.lastName.localeCompare(b.lastName))
})
</script>
