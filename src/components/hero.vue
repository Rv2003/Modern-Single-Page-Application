<template>
  <section class="relative bg-gradient-to-br from-indigo-600 to-blue-500 text-white">
    <div class="max-w-7xl mx-auto px-6 py-24 lg:py-32">
      
      <div class="text-center max-w-3xl mx-auto animate-fadeUp">
        <!-- Badge -->
        <span class="inline-block mb-6 px-4 py-1 text-sm bg-white/20 rounded-full backdrop-blur">
          🚀 New Release
        </span>

        <!-- Heading -->
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Build Modern Apps with
          <span class="bg-white text-transparent bg-clip-text">
            Vue & Tailwind
          </span>
        </h1>

        <!-- Description -->
        <p class="text-lg md:text-xl text-white/90 mb-10">
          Create fast, scalable, and beautifully designed web applications 
          using Vue 3 and Tailwind CSS.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button
            class="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Get Started
          </button>

          <button
            class="px-8 py-3 border border-white/50 rounded-full hover:bg-white/10 transition"
          >
            Live Demo
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// No logic needed for basic hero
</script>

<style>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeUp {
  animation: fadeUp 1s ease forwards;
}
</style>