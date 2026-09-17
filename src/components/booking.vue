<script setup lang="ts">
import { ref, computed } from 'vue'
import { userstore } from '@/stores/login'
import { useBookingStore } from '@/stores/booking'
import router from '@/Router'

const booking = useBookingStore()
const storeuser = userstore()

const selectedDate = ref('')
const dateError = ref(false)

// Today formatted as YYYY-MM-DD for min date attribute
const today = new Date().toISOString().split('T')[0]

// Default package fallback if navigated directly
if (!booking.selectedPackage) {
  booking.setPackage('Gold')
}

function confirm() {
  if (!selectedDate.value) {
    dateError.value = true
    return
  }
  dateError.value = false
  booking.addBooking(selectedDate.value)
  router.push('/booked')
}
</script>

<template>
  <section class="min-h-[85vh] flex items-center justify-center py-24 px-4 sm:px-6 relative">
    
    <div class="w-full max-w-lg bg-zinc-900/80 border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-10 backdrop-blur-xl">
      
      <!-- Top Badges & Title -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Step 2 of 2
          </span>
          <RouterLink to="/packages" class="text-xs text-zinc-400 hover:text-white transition flex items-center gap-1">
            ← Change Package
          </RouterLink>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Confirm Your Session
        </h2>
        <p class="text-sm text-zinc-400 mt-1">
          Lock in your preferred production date with CineStudios.
        </p>
      </div>

      <!-- Form Details -->
      <div class="space-y-5 mb-8">
        
        <!-- Client Profile -->
        <div>
          <label class="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
            Booked For
          </label>
          <div class="flex items-center gap-3 px-4 py-3 bg-zinc-950/60 border border-zinc-800 rounded-2xl">
            <img
              :src="storeuser.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'"
              alt="Avatar"
              class="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/40"
            />
            <div>
              <p class="text-sm font-bold text-white capitalize leading-tight">
                {{ storeuser.name || 'Valued Client' }}
              </p>
              <p class="text-xs text-zinc-400">Authenticated Client Account</p>
            </div>
          </div>
        </div>

        <!-- Selected Package Display -->
        <div>
          <label class="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
            Selected Tier
          </label>
          <div class="flex items-center justify-between px-4 py-3.5 bg-zinc-950/60 border border-zinc-800 rounded-2xl">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-base font-bold text-white">{{ booking.selectedPackage }} Package</span>
            </div>
            <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
              Reserved
            </span>
          </div>
        </div>

        <!-- Date Picker Input -->
        <div>
          <label class="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
            Select Production Date
          </label>
          <input
            type="date"
            :min="today"
            v-model="selectedDate"
            @input="dateError = false"
            class="w-full px-4 py-3.5 rounded-2xl bg-zinc-950/60 border text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-sm scheme-dark"
            :class="dateError ? 'border-red-500' : 'border-zinc-800'"
          />
          <p v-if="dateError" class="text-xs text-red-400 mt-1.5 flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Please pick an available future date.
          </p>
        </div>

      </div>

      <!-- Submit Button -->
      <button
        @click="confirm()"
        class="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
      >
        <span>Confirm Booking</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      <!-- Reassurance / Guarantee -->
      <div class="mt-6 text-center text-xs text-zinc-500">
        Free cancellation & rescheduling up to 48 hours in advance.
      </div>

    </div>

  </section>
</template>