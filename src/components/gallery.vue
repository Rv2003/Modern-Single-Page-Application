
<template>
 



  <section class="backdrop-blur py-10">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- Title -->
      <h2 class="text-3xl font-bold text-center mb-8">
        Image Gallery
      </h2>

      <!-- Gallery Grid -->
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        <div
          v-for="(image, index) in imagess"
          :key="index"
          class="relative group overflow-hidden rounded-xl shadow-lg"
        >
          <!-- Image -->
          <img
            :src="image"
            :alt="'image'+ index"
            class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
          />

          <!-- Overlay -->
          
        </div>

      </div>
    </div>
  </section>


</template>

<script setup>


const selected = ref(null)

import { ref, onMounted } from "vue";

const imagess = ref([]);

onMounted(async () => {
  for (let i = 1; i <= 8; i++) {
    const response = await fetch(
      `https://dummyjson.com/image/600x400/224860?type=webp&text=Event+${i}`
    );

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    imagess.value.push(imageUrl);
  }
});





</script>