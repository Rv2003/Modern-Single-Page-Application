<script setup lang="ts">
import { useBookingStore } from '@/stores/booking'
import { RouterLink } from 'vue-router'

const booking = useBookingStore()

function remove(index: number) {
  booking.removeBooking(index)
}
</script>

<template>
  <div class="min-h-[85vh] py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
    
    <!-- Top Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-zinc-800">
      <div>
        <div class="flex items-center gap-3">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Bookings
          </h1>
          <span
            v-if="booking.bookings.length > 0"
            class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
          >
            {{ booking.bookings.length }} Active
          </span>
        </div>
        <p class="text-sm text-zinc-400 mt-1">
          Review and manage your scheduled film and photography sessions.
        </p>
      </div>

      <RouterLink
        to="/packages"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-md shadow-indigo-600/20 transition self-start sm:self-auto"
      >
        <span>+ Book Another Session</span>
      </RouterLink>
    </div>

    <!-- Empty State -->
    <div
      v-if="booking.bookings.length === 0"
      class="text-center py-20 px-4 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl backdrop-blur-xl"
    >
      <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-zinc-800 text-zinc-400 flex items-center justify-center">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-white mb-2">No Bookings Yet</h3>
      <p class="text-sm text-zinc-400 max-w-sm mx-auto mb-6">
        You haven't reserved any studio productions yet. Choose from our tiered packages to lock in your date.
      </p>
      <RouterLink
        to="/packages"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition"
      >
        <span>Explore Packages</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </RouterLink>
    </div>

    <!-- Bookings List -->
    <div v-else class="space-y-4">
      <transition-group name="list">
        <div
          v-for="(b, index) in booking.bookings"
          :key="b.package + '-' + b.date + '-' + index"
          class="bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-zinc-700 transition shadow-lg"
        >
          <!-- Left: Details -->
          <div class="flex items-start sm:items-center gap-4">
            <!-- Calendar Day Icon -->
            <div class="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex flex-col items-center justify-center text-center flex-shrink-0">
              <span class="text-[10px] font-bold uppercase text-indigo-400">Date</span>
              <span class="text-sm font-extrabold text-white leading-none mt-0.5">
                {{ b.date ? b.date.split('-')[2] || '—' : '—' }}
              </span>
            </div>

            <!-- Booking Info -->
            <div>
              <div class="flex items-center gap-2.5 flex-wrap">
                <h4 class="text-lg font-bold text-white">
                  {{ b.package }} Package
                </h4>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Confirmed
                </span>
              </div>
              
              <div class="flex items-center gap-4 text-xs text-zinc-400 mt-1.5 flex-wrap">
                <span class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ b.date }}
                </span>
                <span class="text-zinc-600">•</span>
                <span class="text-zinc-400">Cinematic Eye Production Crew</span>
              </div>
            </div>
          </div>

          <!-- Right: Action Button -->
          <button
            @click="remove(index)"
            class="self-end sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 transition"
            title="Cancel Booking"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Cancel</span>
          </button>
        </div>
      </transition-group>
    </div>

  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>