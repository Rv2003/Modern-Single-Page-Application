<template>
  <section id="packages" class="py-20 relative">
    
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto px-4 mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
        Tailored Productions
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        Production Packages
      </h2>
      <p class="text-zinc-400 text-base sm:text-lg mt-3">
        Transparent packages tailored for high-end photography, cinematic events, and commercial film.
      </p>
    </div>

    <!-- Cards Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">

        <div
          v-for="packs in pack"
          :key="packs.name"
          :class="[
            'relative flex flex-col rounded-3xl p-8 transition-all duration-300 backdrop-blur-xl',
            packs.name.toLowerCase() === 'gold'
              ? 'bg-gradient-to-b from-indigo-950/40 via-zinc-900/90 to-zinc-900 border-2 border-indigo-500/60 shadow-2xl shadow-indigo-500/10 lg:-translate-y-2'
              : 'bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:shadow-xl hover:-translate-y-1'
          ]"
        >
          <!-- Popular Badge for Gold -->
          <div
            v-if="packs.name.toLowerCase() === 'gold'"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-indigo-500/30"
          >
            Most Popular
          </div>

          <!-- Package Header -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-2xl font-bold text-white tracking-tight">
                {{ packs.name }}
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 font-medium">
                {{ packs.name.toLowerCase() === 'diamond' ? 'VIP' : 'Standard' }}
              </span>
            </div>
            <p class="text-sm text-zinc-400 min-h-[40px] leading-relaxed">
              {{ packs.description }}
            </p>
          </div>

          <!-- Feature List -->
          <div class="flex-grow">
            <p class="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Included in package</p>
            <ul class="text-sm text-zinc-300 space-y-3.5 mb-8">
              <li class="flex items-start gap-3">
                <span class="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mt-0.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{{ packs.d1 }}</span>
              </li>

              <li class="flex items-start gap-3">
                <span class="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mt-0.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{{ packs.d2 }}</span>
              </li>

              <li class="flex items-start gap-3">
                <span class="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mt-0.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{{ packs.d3 }}</span>
              </li>
            </ul>
          </div>

          <!-- CTA Button -->
          <button
            @click="goToBooking(packs)"
            :class="[
              'w-full py-3.5 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-md',
              packs.name.toLowerCase() === 'gold'
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30 hover:shadow-indigo-600/50'
                : 'bg-zinc-800 hover:bg-zinc-700 text-white'
            ]"
          >
            <span>Select {{ packs.name }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>

      </div>
    </div>

    <!-- Login Prompt Modal -->
    <div
      v-if="showLoginModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
    >
      <div class="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
        <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">Log In Required</h3>
        <p class="text-sm text-zinc-400 mb-6">
          Please log in to your account to reserve the <strong>{{ pendingPackage?.name }}</strong> package.
        </p>
        <div class="flex gap-3">
          <button
            @click="showLoginModal = false"
            class="flex-1 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium transition"
          >
            Cancel
          </button>
          <button
            @click="quickLogin"
            class="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 transition"
          >
            Log In Now
          </button>
        </div>
      </div>
    </div>

  </section>
</template>
<script setup lang="ts">
import router from '@/Router';
import packages from '../assets/packages.json'
import { ref } from 'vue'
import { useBookingStore } from '@/stores/booking'
import { userstore } from '@/stores/login';

const pack = ref(packages)
const booking = useBookingStore()
const storeuser = userstore()

const showLoginModal = ref(false)
const pendingPackage = ref<any>(null)

function goToBooking(packs: any) {
  if (storeuser.token != null) {
    booking.setPackage(packs.name)
    router.push('/booking')
  } else {
    pendingPackage.value = packs
    showLoginModal.value = true
    storeuser.show = true
  }
}

function quickLogin() {
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    }),
    credentials: 'include'
  })
  .then(res => res.json())
  .then(data => {
    storeuser.saveUser(data)
    showLoginModal.value = false
    if (pendingPackage.value) {
      booking.setPackage(pendingPackage.value.name)
      router.push('/booking')
    }
  })
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>