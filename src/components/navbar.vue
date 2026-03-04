<template>
  <nav class="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
    <div class="max-w-8xl mx-auto px-5 flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="text-lg-left font-medium tracking-wide">Brand</div>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-6 text-gray-100">
        <a href="/" class="hover:text-white transition hover:outline px-3 ">Home</a>
           <a href="/card" class="block hover:text-white transition">Packages</a>
        <a href="/gallery" class="hover:text-white transition">gallery</a>
       <a href="#"
   class="text-gray-700 font-medium tracking-wide
          hover:text-black
          transition duration-200">
  Log in
</a>
      </div>

      <!-- Mobile Hamburger -->
      <button
        @click="toggleMenu"
        class="md:hidden text-2xl focus:outline-none text-gray-100"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden px-6 pb-4 space-y-3 text-gray-100">
        <a href="/" class="block hover:text-white transition">Home</a>
        <a href="/card" class="block hover:text-white transition">Packages</a>
        <a href="/contact" class="block hover:text-white transition">Contact</a>
        
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref<boolean>(false);

const toggleMenu = (): void => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>