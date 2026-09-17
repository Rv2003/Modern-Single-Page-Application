<template>
  <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
    
    <!-- Background Image Collage with Vignette Overlay -->
    <div class="absolute inset-0 z-0 flex pointer-events-none">
      <div class="relative w-1/3 h-full overflow-hidden">
        <img
          :src="img1"
          alt="Cinematic sample 1"
          class="w-full h-full object-cover scale-105 filter brightness-50 contrast-125 transition-transform duration-1000"
        />
      </div>
      <div class="relative w-1/3 h-full overflow-hidden border-x border-white/5">
        <img
          :src="img2"
          alt="Cinematic sample 2"
          class="w-full h-full object-cover scale-105 filter brightness-60 contrast-110 transition-transform duration-1000"
        />
      </div>
      <div class="relative w-1/3 h-full overflow-hidden">
        <img
          :src="img3"
          alt="Cinematic sample 3"
          class="w-full h-full object-cover scale-105 filter brightness-50 contrast-125 transition-transform duration-1000"
        />
      </div>

      <!-- Gradient Vignette & Tint Overlays -->
      <div class="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950"></div>
      <div class="absolute inset-0 bg-radial from-transparent via-zinc-950/60 to-zinc-950"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeUp">
      
      <!-- Welcome Pill -->
      <div v-if="storeuser.name" class="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium backdrop-blur-md shadow-lg shadow-indigo-500/5">
        <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
        Welcome back, <strong class="capitalize text-white">{{ storeuser.name }}</strong>
      </div>
      <div v-else class="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs sm:text-sm font-medium backdrop-blur-md">
        <span class="text-amber-400">✦</span> Premier Boutique Photography & Film Studio
      </div>

      <!-- Main Headline -->
      <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
        Capture Your Best Moments
        <span class="block mt-2 bg-gradient-to-r from-amber-200 via-rose-200 to-indigo-300 bg-clip-text text-transparent">
          With Us
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed mb-10">
        Turning fleeting moments into cinematic memories that last forever. We specialize in authentic emotions, timeless lighting, and high-production storytelling.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button
          @click="scroll"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span>Explore Packages</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        <RouterLink
          to="/gallery"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold rounded-2xl border border-zinc-700/80 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span>View Gallery</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>

      <!-- Studio Metrics / Trust Badges -->
      <div class="grid grid-cols-3 max-w-xl mx-auto pt-8 border-t border-zinc-800/80 text-center gap-4">
        <div>
          <p class="text-2xl sm:text-3xl font-bold text-white tracking-tight">500+</p>
          <p class="text-xs text-zinc-400 font-medium mt-0.5">Events Captured</p>
        </div>
        <div class="border-x border-zinc-800/80">
          <p class="text-2xl sm:text-3xl font-bold text-amber-300 tracking-tight">4.9 ★</p>
          <p class="text-xs text-zinc-400 font-medium mt-0.5">Client Rating</p>
        </div>
        <div>
          <p class="text-2xl sm:text-3xl font-bold text-indigo-400 tracking-tight">100%</p>
          <p class="text-xs text-zinc-400 font-medium mt-0.5">Cinematic 4K</p>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import img1 from '../assets/DSC_7809.png'
import img2 from '../assets/DSC_7855.png'
import img3 from '../assets/DSC_7809.png'
import { userstore } from "@/stores/login"

const storeuser = userstore()

const scroll = () => {
  const target = document.getElementById('packages')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeUp {
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>