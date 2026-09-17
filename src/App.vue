<script setup>
import navbar from './components/navbar.vue'
import foot from './components/foot.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-indigo-500 selection:text-white">
    <navbar />
    <main class="flex-grow">
      <RouterView />
    </main>
    <foot />
  </div>
</template>

<style scoped>
</style>
