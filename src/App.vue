<script setup>

import navbar from './components/navbar.vue'
import foot from './components/foot.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<navbar/>
<RouterView/>
<foot/>
</template>
<style scoped>

</style>
