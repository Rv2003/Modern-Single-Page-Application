
<template>
  <section class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
          Our Portfolio
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Gallery
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg mt-3">
          Recent works from us captured in high definition.
        </p>
      </div>

      <!-- Loading Skeletons while DummyJSON images fetch -->
      <div v-if="imagess.length === 0" class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="n in 8"
          :key="n"
          class="h-64 rounded-2xl bg-zinc-900/80 border border-zinc-800 animate-pulse flex items-center justify-center"
        >
          <div class="w-8 h-8 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
        </div>
      </div>

      <!-- Image Grid from DummyJSON -->
      <div v-else class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="(image, index) in imagess"
          :key="index"
          @click="selected = image"
          class="relative group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/80 shadow-xl hover:shadow-2xl hover:border-indigo-500/40 cursor-pointer transition-all duration-300 hover:-translate-y-1"
        >
          <img
            :src="image"
            :alt="'Event ' + (index + 1)"
            class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
          />

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
            <span class="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
              Event {{ index + 1 }}
            </span>
            <div class="flex items-center gap-2 text-xs text-zinc-300">
              <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Click to view</span>
            </div>
          </div>

          <!-- Event Tag -->
          <div class="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-semibold text-zinc-200 border border-white/10">
            Event {{ index + 1 }}
          </div>
        </div>
      </div>

    </div>

    <!-- Interactive Lightbox Modal -->
    <transition name="fade">
      <div
        v-if="selected"
        @click.self="selected = null"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
      >
        <div class="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
          
          <!-- Top Bar with Close -->
          <div class="w-full flex items-center justify-between text-white mb-3 px-2">
            <span class="text-sm font-semibold text-indigo-400">Captured Event Preview</span>

            <button
              @click="selected = null"
              class="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition"
              aria-label="Close"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Preview Image -->
          <div class="relative w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl flex items-center justify-center">
            <img
              :src="selected"
              alt="Preview"
              class="max-h-[75vh] w-auto max-w-full object-contain"
            />
          </div>

        </div>
      </div>
    </transition>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const selected = ref(null);
const imagess = ref([]);

onMounted(async () => {
  for (let i = 1; i <= 8; i++) {
    const response = await fetch(
      `https://dummyjson.com/image/800x400/224860?type=webp&text=Event+${i}`
    );

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    imagess.value.push(imageUrl);
  }
});

function handleKeyDown(e) {
  if (e.key === "Escape") {
    selected.value = null;
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>