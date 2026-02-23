<template>
  <section class=" g-white/30 backdrop-blur-sm py-20 ">
    <div class="max-w-7xl mx-auto px-6 ">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-yellow-500 mb-4">
          Choose Your Package
        </h2>
        <p class="text-white-600 text-lg">
          Flexible pricing designed for businesses of all sizes.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid gap-15 md:grid-cols-3 content-align-center -center">
        
        <!-- Basic -->
        <div class=" bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 class="text-2xl font-semibold mb-4">Basic</h3>
          <p class="text-4xl font-bold mb-6">
            $19<span class="text-lg text-gray-500">/mo</span>
          </p>

          <ul class="space-y-3 text-gray-600 mb-8">
            <li>✔ 5 Projects</li>
            <li>✔ Basic Support</li>
            <li>✔ Analytics Dashboard</li>
          </ul>

          <button class="w-full  py-3 dark:bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
            Get Started
          </button>
        </div>

        <!-- Pro (Featured) -->
        <div class=" relative bg-white rounded-2xl shadow-xl p-8 border-2">
         

          <h3 class="text-2xl font-semibold mb-4">Pro</h3>
          <p class="text-4xl font-bold mb-6">
            $49<span class="text-lg text-gray-500">/mo</span>
          </p>

          <ul class="space-y-3 text-gray-600 mb-8">
            <li>✔ Unlimited Projects</li>
            <li>✔ Priority Support</li>
            <li>✔ Advanced Analytics</li>
            <li>✔ Custom Reports</li>
          </ul>

          <button class="w-full py-3 bg-gray-800 text-white rounded-full  transition">
            Get Started
          </button>
        </div>

        <!-- Enterprise -->
        <div class="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 class="text-2xl font-semibold mb-4">Enterprise</h3>
          <p class="text-4xl font-bold mb-6">
            $99<span class="text-lg text-gray-500">/mo</span>
          </p>

          <ul class="space-y-3 text-gray-600 mb-8">
            <li>✔ Dedicated Manager</li>
            <li>✔ 24/7 Support</li>
            <li>✔ API Access</li>
            <li>✔ Custom Integrations</li>
          </ul>

          <button class="w-full py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Static example — can be converted to props/dynamic later
</script>