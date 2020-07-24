<template>
  <main class="min-h-screen justify-center text-center px-48">
    <div>
      <h1 class="mt-8 font-serif font-bold text-3xl md:text-4xl text-gray-800">
        Meet the team
      </h1>
    </div>

    <div class="flex flex-col items-center justify-center mt-12">
      <div class="rounded-full w-48 h-48 border-2">
        Image
      </div>
      <div class="">
        <h2 class="text-2xl font-semibold">Mujahid Anuar</h2>
        <h2 class="text-xl">
          A thinker with web & mobile apps, and loves everything beautiful and
          open source.
        </h2>
        <div class="flex flex-row">
          <GithubIcon class="w-8" /> <InstaIcon class="w-8" />
        </div>
      </div>
      <div class="mt-12 rounded-full w-48 h-48 border-2">
        Image
      </div>
      <div class="">
        <h2 class="text-2xl font-semibold">Riza Hassan</h2>
        <h2 class="text-xl">
          Computer Science student interested in Entrepreneurship
        </h2>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
