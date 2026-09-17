import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useBookingStore = defineStore('booking', () => {

  const selectedPackage = ref('')

  const bookings = ref<{ package: string; date: string }[]>(
    JSON.parse(localStorage.getItem('bookings') || '[]')
  )

  function setPackage(name: string) {
    selectedPackage.value = name
  }

  function addBooking(date: string) {
    bookings.value.push({
      package: selectedPackage.value,
      date
    })
  }

  
  function removeBooking(index: number) {
    bookings.value.splice(index, 1)
  }

  watch(
    bookings,
    (newVal) => {
      localStorage.setItem('bookings', JSON.stringify(newVal))
    },
    { deep: true }
  )

  return {
    selectedPackage,
    bookings,
    setPackage,
    addBooking,
    removeBooking 
  }
})