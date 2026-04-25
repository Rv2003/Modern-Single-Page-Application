<template>
  <nav class="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
    <div class="max-w-8xl mx-auto px-5 flex justify-between items-center h-20">
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
          transition duration-200" v-show="!storeuser.token" @click="login()">
  Log in
</a>

<a href="#"
   class="text-gray-700 font-medium tracking-wide
          hover:text-black
          transition duration-200" v-show="storeuser.token" @click="logout()">
  Log out
</a>

<img 
  v-if="storeuser.token"
  :src="image"
  class="w-10 h-10 rounded-full object-cover border
         transition-all duration-500 ease-out
         scale-100 opacity-100
         animate-fadeIn"
/>
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
  <div  v-if!="storeuser.show"  class="notif-bar">
  Please log in to continue
</div>

</template>

<script setup lang="ts">
import router from "@/Router";
import { ref } from "vue";
import {userstore} from "@/stores/login";

const storeuser = userstore();
const isOpen = ref<boolean>(false);
//const token=ref();
const image=ref();

const toggleMenu = (): void => {
  isOpen.value = !isOpen.value;
};

function login() {
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    }),
    credentials: 'include'
  })
  .then(res => res.json())
  .then(data => {
    storeuser.saveUser(data);  
  });
}


function logout() {
  storeuser.clearUser();   
  router.push('/')    
}
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