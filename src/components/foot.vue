<script setup>

</script>

<template>
    <footer class="bg-gray-900 text-gray-300">
  <div class="max-w-7xl mx-auto px-6 py-12">
    
    <!-- Top Section -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
      
      <!-- Brand -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-4">MyBrand</h2>
        <p class="text-gray-400 text-sm leading-relaxed">
          Building modern web experiences with clean design 
          and powerful technology.
        </p>
      </div>

      <!-- Links -->
      <div>
        <h3 class="text-white font-semibold mb-4">Company</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-indigo-400 transition">About</a></li>
          <li><a href="#" class="hover:text-indigo-400 transition">Services</a></li>
          <li><a href="#" class="hover:text-indigo-400 transition">Blog</a></li>
          <li><a href="#" class="hover:text-indigo-400 transition">Careers</a></li>
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h3 class="text-white font-semibold mb-4">Support</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-indigo-400 transition">Help Center</a></li>
          <li><a href="#" class="hover:text-indigo-400 transition">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-indigo-400 transition">Terms of Service</a></li>
          <li><a href="#" class="hover:text-indigo-400 transition">Contact</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-white font-semibold mb-4">Subscribe</h3>
        <p class="text-gray-400 text-sm mb-4">
          Get the latest updates and news.
        </p>
        <div class="flex">
          <input 
            type="email" 
            placeholder="Your email"
            class="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
          />
          <button class="bg-indigo-600 px-4 py-2 rounded-r-lg text-white hover:bg-indigo-700 transition">
            Join
          </button>
        </div>
      </div>

    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      
      <p>
        © 2026 MyBrand. All rights reserved.
      </p>

      <!-- Social Icons -->
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-indigo-400 transition">Facebook</a>
        <a href="#" class="hover:text-indigo-400 transition">Twitter</a>
        <a href="#" class="hover:text-indigo-400 transition">Instagram</a>
        <a href="#" class="hover:text-indigo-400 transition">LinkedIn</a>
      </div>

    </div>
  </div>
</footer>
</template>