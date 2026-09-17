<script setup>
const props = defineProps({
  members: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section class="w-full py-20 relative overflow-hidden">
    
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto px-4 mb-14">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
        The Crew
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        Creative Minds Behind the Lens
      </h2>
      <p class="text-zinc-400 text-base sm:text-lg mt-3">
        Award-winning directors, cinematographers, and post-production specialists dedicated to perfection.
      </p>
    </div>

    <!-- Infinite Scroll Wrapper with Edge Masks -->
    <div class="relative w-full overflow-hidden group">
      
      <!-- Gradient Fade Edges -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>

      <!-- Marquee Track -->
      <div class="flex w-max animate-infiniteScroll group-hover:[animation-play-state:paused]">
        
        <template v-for="n in 2" :key="n">
          <div
            v-for="member in members"
            :key="`${n}-${member.id}`"
            class="px-4 flex-shrink-0 w-72 sm:w-80"
          >
            <div
              class="h-[400px] bg-zinc-900/60 border border-zinc-800/80 hover:border-indigo-500/40 rounded-3xl p-6
                     flex flex-col items-center justify-between text-center
                     shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10
                     transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl"
            >
              
              <!-- Avatar with Ring -->
              <div class="relative mt-2">
                <img
                  :src="member.image"
                  :alt="member.name"
                  class="w-24 h-24 rounded-2xl object-cover ring-2 ring-zinc-700/80 shadow-md transition-all"
                />
                <div class="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-indigo-400">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              <!-- Name & Role -->
              <div class="space-y-2 my-auto">
                <h3 class="text-xl font-bold text-white tracking-tight">
                  {{ member.name }}
                </h3>
                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {{ member.role }}
                </span>
                <p class="text-xs text-zinc-400 leading-relaxed max-w-[220px] mx-auto pt-2">
                  {{ member.bio }}
                </p>
              </div>

              <!-- Verified Studio Artist Badge -->
              <div class="w-full pt-4 border-t border-zinc-800/80 text-[11px] text-zinc-500 flex items-center justify-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Active Production Team</span>
              </div>

            </div>
          </div>
        </template>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes infiniteScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-infiniteScroll {
  animation: infiniteScroll 30s linear infinite;
}
</style>