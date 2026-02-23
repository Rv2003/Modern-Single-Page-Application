<template>
  <section
    class="relative bg-gray-900 text-white min-h-screen flex items-center"
    :style="backgroundStyle"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center md:text-left">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ title }}</h1>
      <p class="text-lg md:text-2xl mb-8 text-gray-200">{{ subtitle }}</p>
      <div class="flex justify-center md:justify-start gap-4">
        <a
          v-if="primaryCTA"
          :href="primaryCTA.link"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          {{ primaryCTA.text }}
        </a>
        <a
          v-if="secondaryCTA"
          :href="secondaryCTA.link"
          class="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg transition"
        >
          {{ secondaryCTA.text }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CTA {
  text: string
  link: string
}

interface Props {
  title?: string
  subtitle?: string
  backgroundImage?: string
  primaryCTA?: CTA
  secondaryCTA?: CTA
}

const props = defineProps<Props>()

const title = props.title ?? "Welcome to Your App"
const subtitle =
  props.subtitle ??
  "Build amazing websites and applications effortlessly."
const primaryCTA = props.primaryCTA ?? { text: "Get Started", link: "#get-started" }
const secondaryCTA = props.secondaryCTA ?? { text: "Learn More", link: "#learn-more" }

// Inline background image style
const backgroundStyle = props.backgroundImage
  ? { backgroundImage: `url(${props.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
  : {}
</script>

<style scoped>
/* Optional fade-in animation for hero content */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.relative.z-10 > * {
  animation: fadeIn 1s ease forwards;
}
</style>