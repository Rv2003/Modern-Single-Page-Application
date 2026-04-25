<script setup lang="ts">
import { userstore } from '@/stores/login';
import { useBookingStore } from '@/stores/booking'

const booking = useBookingStore()
const storeuser = userstore();
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-50 px-4">

    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

      <!-- Title -->
      <h2 class="text-2xl font-bold text-gray-800 mb-2">
        Confirm Booking
      </h2>
      <p class="text-gray-500 mb-6">
        Select your preferred date
      </p>

      <!-- Name (already given) -->
      <div class="mb-4">
        <label class="text-sm text-gray-600">Name</label>
        <div class="mt-1 px-4 py-3 bg-gray-100 rounded-xl text-gray-800">
        {{storeuser.name}}
        </div>
      </div>

      <!-- Package (already given) -->
      <div class="mb-6">
        <label class="text-sm text-gray-600">{{ booking.selectedPackage }}</label>
        <div class="mt-1 px-4 py-3 bg-gray-100 rounded-xl text-gray-800">
          
        </div>
      </div>

      <!-- Date Picker -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Select Date
        </label>
        <input
          type="date"
          class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <!-- Button -->
      <button
        class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
      >
        Confirm Booking
      </button>

    </div>

  </section>
</template>