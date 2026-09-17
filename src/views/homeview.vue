<script setup>
import hero from '../components/hero.vue'
import gallery from '../components/gallery.vue'
import Package from '@/components/package.vue'
import Members from '@/components/members.vue'

const team = [
  {
    id: 1,
    name: "Rusiru Vinvidu",
    role: "Lead Cinematographer",
    bio: "Visionary storyteller crafting evocative cinematic experiences with dramatic lighting.",
    image: new URL('@/assets/RV.jpg', import.meta.url).href
  },
  {
    id: 2,
    name: "Malith Chamikara",
    role: "Senior Photographer",
    bio: "Specialist in candid wedding captures, high-fashion portraits, and emotive documentary.",
    image: new URL('@/assets/RV.jpg', import.meta.url).href
  },
  {
    id: 3,
    name: "Kasun Edirisighe",
    role: "Lead Colorist & Editor",
    bio: "Master of cinematic tone curves, rich palette grading, and precision post-production.",
    image: new URL('@/assets/RV.jpg', import.meta.url).href
  },
  {
    id: 4,
    name: "Piyal Perera",
    role: "Visual Effects & Motion",
    bio: "Brings frames to life with dynamic motion graphics, sound design, and narrative flow.",
    image: new URL('@/assets/RV.jpg', import.meta.url).href
  }
]
</script>

<template>
  <hero />
  <Package />
  <gallery />
  <Members :members="team" />
</template>