<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)

function handleSubscribe() {
  if (email.value) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => {
      subscribed.value = false
    }, 4000)
  }
}
</script>

<template>
  <footer class="bg-zinc-950 border-t border-zinc-850 text-zinc-400 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        
        <!-- Brand / Studio Info -->
        <div class="lg:col-span-2 space-y-4">
          <RouterLink to="/" class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 p-1 flex items-center justify-center">
              <img src="../assets/trans.png" alt="Cine Logo" class="h-full w-full object-contain filter drop-shadow" />
            </div>
            <div>
              <span class="block font-bold text-lg text-white tracking-wider leading-none">CINEMATIC</span>
              <span class="block text-[10px] tracking-[0.25em] text-indigo-400 font-semibold uppercase">Eye Studios</span>
            </div>
          </RouterLink>

          <p class="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
            Crafting high-definition cinematic films, editorial portraits, and documentary wedding memories that transcend generations.
          </p>

          <!-- Social Links -->
          <div class="flex items-center gap-3 pt-2">
            <a href="#" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 transition">
              <span class="sr-only">Instagram</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 transition">
              <span class="sr-only">YouTube</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 transition">
              <span class="sr-only">Twitter</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div>
          <h4 class="text-xs font-semibold text-white uppercase tracking-wider mb-4">Pages</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm">
            <li><RouterLink to="/" class="hover:text-white transition">Home</RouterLink></li>
            <li><RouterLink to="/packages" class="hover:text-white transition">Packages</RouterLink></li>
            <li><RouterLink to="/gallery" class="hover:text-white transition">Gallery</RouterLink></li>
            <li><RouterLink to="/booked" class="hover:text-white transition">My Bookings</RouterLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-xs font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm">
            <li><a href="#" class="hover:text-white transition">Wedding Cinematography</a></li>
            <li><a href="#" class="hover:text-white transition">Editorial Portraits</a></li>
            <li><a href="#" class="hover:text-white transition">Color Grading Suite</a></li>
            <li><a href="#" class="hover:text-white transition">Drone 4K Aerials</a></li>
          </ul>
        </div>

        <!-- Subscribe Form -->
        <div>
          <h4 class="text-xs font-semibold text-white uppercase tracking-wider mb-4">Stay Inspired</h4>
          <p class="text-xs text-zinc-400 mb-3">
            Subscribe to our behind-the-scenes journal and seasonal package discounts.
          </p>
          <form @submit.prevent="handleSubscribe" class="space-y-2">
            <div class="flex gap-2">
              <input 
                type="email"
                v-model="email"
                placeholder="Enter your email" 
                required
                class="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 transition"
              />
              <button 
                type="submit"
                class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md transition whitespace-nowrap"
              >
                Join
              </button>
            </div>
            <p v-if="subscribed" class="text-xs text-emerald-400 font-medium pt-1">
              ✓ Thank you for subscribing!
            </p>
          </form>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <p>© 2026 Cinematic Eye Studios. All rights reserved.</p>
        <p class="flex items-center gap-1">
          Crafted with Vue 3 &amp; Tailwind CSS
        </p>
      </div>

    </div>
  </footer>
</template>