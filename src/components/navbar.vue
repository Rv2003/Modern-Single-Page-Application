<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
      
      <!-- Logo & Brand -->
      <RouterLink to="/" class="flex items-center gap-3 group">
        <div class="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 p-1 flex items-center justify-center transition-transform group-hover:scale-105">
          <img src="../assets/trans.png" alt="Cine Logo" class="h-full w-full object-contain filter drop-shadow" />
        </div>
        <div class="hidden sm:block">
          <span class="block font-bold text-lg text-white tracking-wider leading-none">CINEMATIC</span>
          <span class="block text-[10px] tracking-[0.25em] text-indigo-400 font-semibold uppercase">Eye Studios</span>
        </div>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-zinc-300">
        <RouterLink
          to="/"
          class="px-4 py-2 rounded-xl transition duration-200 hover:text-white hover:bg-white/5"
          active-class="text-white bg-indigo-600/20 border border-indigo-500/30 font-semibold"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/packages"
          class="px-4 py-2 rounded-xl transition duration-200 hover:text-white hover:bg-white/5"
          active-class="text-white bg-indigo-600/20 border border-indigo-500/30 font-semibold"
        >
          Packages
        </RouterLink>

        <RouterLink
          to="/gallery"
          class="px-4 py-2 rounded-xl transition duration-200 hover:text-white hover:bg-white/5"
          active-class="text-white bg-indigo-600/20 border border-indigo-500/30 font-semibold"
        >
          Gallery
        </RouterLink>

        <!-- Divider -->
        <div class="h-5 w-px bg-zinc-800 mx-2"></div>

        <!-- Unauthenticated -->
        <button
          v-if="!storeuser.token"
          @click="login()"
          :disabled="isLoggingIn"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all font-medium active:scale-95 disabled:opacity-75"
        >
          <svg v-if="isLoggingIn" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{{ isLoggingIn ? 'Logging in...' : 'Log In' }}</span>
        </button>

        <!-- Authenticated -->
        <div v-else class="flex items-center gap-3">
          <RouterLink
            to="/booked"
            class="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl transition duration-200 hover:text-white hover:bg-white/5"
            active-class="text-white bg-indigo-600/20 border border-indigo-500/30 font-semibold"
          >
            <span>Bookings</span>
            <span
              v-if="bookingStore.bookings.length > 0"
              class="px-1.5 py-0.5 text-xs font-bold bg-indigo-500 text-white rounded-full leading-none"
            >
              {{ bookingStore.bookings.length }}
            </span>
          </RouterLink>

          <!-- User Profile Pill -->
          <div class="flex items-center gap-2.5 pl-3 border-l border-zinc-800">
            <img
              :src="storeuser.image || defaultAvatar"
              :alt="storeuser.name || 'User'"
              class="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/50"
            />
            <div class="hidden lg:block text-left text-xs">
              <p class="font-semibold text-white capitalize leading-tight">{{ storeuser.name }}</p>
              <p class="text-zinc-400 text-[10px]">Client</p>
            </div>
            <button
              @click="logout()"
              title="Log out"
              class="p-2 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>

      </nav>

      <!-- Mobile Hamburger Button -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

    </div>

    <!-- Mobile Dropdown Menu -->
    <transition name="slide">
      <div
        v-if="isOpen"
        class="md:hidden px-6 pt-2 pb-6 space-y-3 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800 shadow-2xl"
      >
        <RouterLink
          to="/"
          @click="isOpen = false"
          class="block px-4 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
          active-class="text-white bg-indigo-600/20 font-semibold"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/packages"
          @click="isOpen = false"
          class="block px-4 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
          active-class="text-white bg-indigo-600/20 font-semibold"
        >
          Packages
        </RouterLink>

        <RouterLink
          to="/gallery"
          @click="isOpen = false"
          class="block px-4 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
          active-class="text-white bg-indigo-600/20 font-semibold"
        >
          Gallery
        </RouterLink>

        <div class="pt-3 border-t border-zinc-800 space-y-2">
          <button
            v-if="!storeuser.token"
            @click="login(); isOpen = false"
            class="w-full text-center px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition shadow-md shadow-indigo-600/20"
          >
            Log In
          </button>

          <template v-else>
            <div class="flex items-center gap-3 px-4 py-2 bg-zinc-900/60 rounded-xl mb-2">
              <img
                :src="storeuser.image || defaultAvatar"
                class="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500"
              />
              <span class="font-semibold text-white capitalize text-sm">{{ storeuser.name }}</span>
            </div>

            <RouterLink
              to="/booked"
              @click="isOpen = false"
              class="flex items-center justify-between px-4 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
            >
              <span>My Bookings</span>
              <span
                v-if="bookingStore.bookings.length > 0"
                class="px-2 py-0.5 text-xs font-bold bg-indigo-500 text-white rounded-full"
              >
                {{ bookingStore.bookings.length }}
              </span>
            </RouterLink>

            <button
              @click="logout(); isOpen = false"
              class="w-full text-left px-4 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Log out</span>
            </button>
          </template>
        </div>

      </div>
    </transition>

  </header>

  <!-- Notification Toast -->
  <transition name="toast">
    <div
      v-if="storeuser.show"
      class="fixed bottom-6 right-6 z-50 max-w-sm flex items-center gap-3 bg-zinc-900/95 backdrop-blur-md border border-amber-500/30 text-amber-300 px-5 py-4 rounded-2xl shadow-2xl shadow-black/50"
    >
      <svg class="w-5 h-5 flex-shrink-0 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span class="text-sm font-medium">Please log in to continue booking.</span>
      <button
        @click="storeuser.show = false"
        class="ml-auto text-zinc-400 hover:text-white"
      >
        ✕
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import router from "@/Router";
import { ref } from "vue";
import { userstore } from "@/stores/login";
import { useBookingStore } from "@/stores/booking";

const storeuser = userstore();
const bookingStore = useBookingStore();
const isOpen = ref<boolean>(false);
const isLoggingIn = ref<boolean>(false);
const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80";

const toggleMenu = (): void => {
  isOpen.value = !isOpen.value;
};

function login() {
  isLoggingIn.value = true;
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
    storeuser.saveUser(data);
    isLoggingIn.value = false;
  })
  .catch(err => {
    console.error(err);
    isLoggingIn.value = false;
  });
}

function logout() {
  storeuser.clearUser();
  router.push('/');
}

function book() {
  router.push('/booked');
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style>