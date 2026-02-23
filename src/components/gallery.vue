<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Our Gallery
        </h2>
        <p class="text-gray-600 text-lg">
          Explore our latest photos and projects.
        </p>
      </div>

      <!-- Image Grid -->
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
          @click="open(image)"
        >
          <img
            :src="image"
            alt="Gallery image"
            class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
          />

          <!-- Hover Overlay -->
          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
          >
            <span class="text-white font-semibold text-lg">View</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="selected"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
      @click.self="selected = null"
    >
      <div class="relative max-w-4xl w-full">
        <button
          class="absolute -top-10 right-0 text-white text-2xl"
          @click="selected = null"
        >
          ✕
        </button>

        <img
          :src="selected"
          class="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref(null)

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  'https://images.unsplash.com/photo-1493244040629-496f6d136cc3',
]

const open = (image) => {
  selected.value = image
}
</script>