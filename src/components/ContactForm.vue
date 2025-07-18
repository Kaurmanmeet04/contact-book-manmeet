<template>
  <form @submit.prevent="submitForm" class="container mt-4">
    <div class="mb-3">
      <label class="form-label">First Name</label>
      <input v-model="contact.firstName" class="form-control" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Last Name</label>
      <input v-model="contact.lastName" class="form-control" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Email</label>
      <input v-model="contact.email" type="email" class="form-control" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Phone</label>
      <input v-model="contact.phone" type="number" class="form-control" required />
    </div>


    <button type="submit" class="btn btn-success me-2">
      {{ isEdit ? 'Update Contact' : 'Add Contact' }}
    </button>
    <router-link to="/" class="btn btn-secondary">Cancel</router-link>
  </form>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { getContacts, saveContacts } from '../helpers/localStorage'
import { useRouter } from 'vue-router'

const props = defineProps({
  contactData: Object,
  isEdit: Boolean
})

const contact = ref(props.contactData || { id: Date.now().toString(), firstName: '', lastName: '', email: '', phone:'' })
const router = useRouter()

function submitForm() {
  const contacts = getContacts()

  if (props.isEdit) {
    const index = contacts.findIndex(c => c.id === contact.value.id)
    contacts[index] = contact.value
  } else {
    contacts.push(contact.value)
  }

  saveContacts(contacts)
  router.push(`/contact/${contact.value.id}`)
}
</script>
