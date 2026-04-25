<template>
  <section class="py-20 px-6 bg-gray-50 min-h-screen">
<!-- Toast -->
<div class="fixed top-6 right-6 z-50" v-show='notif'>
  
  <div class="bg-red-600 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in">

    <!-- Icon -->
    <span class="text-lg">🔒</span>

    <!-- Message -->
    <p class="text-sm font-medium">
      Please log in to continue
    </p>

  </div>

</div>
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
        <button class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition" @click="goToBooking(packs)">
          Get Started
        </button>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import router from '@/Router';
import packages from '../assets/packages.json'
import { ref } from 'vue'
import { useBookingStore } from '@/stores/booking'
const pack = ref(packages)


import { userstore } from '@/stores/login';


const booking = useBookingStore()
const storeuser = userstore();

function goToBooking(packs: any) {

  if (storeuser.token!=null){
   booking.setPackage(packs.name)   
   router.push('/booking')}
  else{
   window.alert("Log In to Continue")
  }       
}

</script>

<style>

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>