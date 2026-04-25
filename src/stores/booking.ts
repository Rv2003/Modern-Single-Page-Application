
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookingStore = defineStore('booking', () => {
  const selectedPackage = ref<string>('')

  function setPackage(name: string) {
    selectedPackage.value = name
  }

  return { selectedPackage, setPackage }
})