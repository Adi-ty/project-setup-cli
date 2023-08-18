<script setup lang="ts">
  import vueImg from "./assets/vue.svg";
</script>

<template>
  <div class="antialiased h-screen text-slate-400 bg-slate-900">
    <div class="mb-20 overflow-hidden sm:mb-32 md:mb-40">
      <div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 class="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white">
          Vue 3 + Vite + Tailwind CSS template
        </h1>
        <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          A simple Vue 3 + Vite + Tailwind CSS template to setup a vue3 project.
        </p>
        <div class="flex items-center justify-center mt-20 lg:mt-10">
          <img src="/vite.svg" alt="vite" class="h-16 w-16 lg:h-32 lg:w-32" />
          <span class="text-5xl font-extrabold text-slate-600">+</span>
          <img :src="vueImg" alt="vue" class="h-16 w-16 lg:h-32 lg:w-32" /> 
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>

</style>
