<template>
  <section class="py-20 px-6 bg-gray-50 min-h-screen">

    <!-- Heading -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800">Our Packages</h1>
      <p class="text-gray-500 mt-2">Choose the plan that fits your needs</p>
    </div>

    <!-- Cards -->
    <div class="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      <div
        v-for="packs in pack"
        :key="packs.name"
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100"
      >

        <!-- Name -->
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">
          {{ packs.name }}
        </h2>

        <!-- Description -->
        <p class="text-gray-500 mb-6">
          {{ packs.description }}
        </p>

        <!-- Optional features (if you add later) -->
        <ul class="text-sm text-gray-600 space-y-2 mb-6">
          <li>✔ Fast performance</li>
          <li>✔ Modern design</li>
          <li>✔ Mobile responsive</li>
        </ul>

        <!-- Button -->
        <button class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
          Get Started
        </button>

      </div>

    </div>
  </section>
</template>

<script setup>
import packages from '../assets/package.json'
import { ref } from 'vue'

const pack = ref(packages)
</script>