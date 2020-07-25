<template>
  <main class="min-h-screen max-w-screen justify-center text-center">
    <div>
      <h1 class="mt-8 font-serif font-bold text-3xl md:text-4xl text-gray-800">
        Meet the team
      </h1>
    </div>

    <div class="flex flex-col items-center justify-center my-12 px-16 md:px-64">
      <img
        class="mt-16 rounded-full w-48 h-48 border-2"
        src="~/assets/image/mujahid.jpeg"
      />
      <div class="mt-2">
        <a
          href="mailto:mujahidfanuar@gmail.com"
          class="text-2xl font-semibold hover:underline"
          >Mujahid Anuar</a
        >
        <h2 class="text-xl">
          Tinkers with web & mobile apps, and loves everything beautiful <br />
          and open source.
        </h2>
        <div class="mt-2 flex flex-row justify-center">
          <a href="https://github.com/mujahidfa"
            ><GithubIcon class="w-8 mx-2"
          /></a>
          <a href="https://github.com/mujahidfa"
            ><TwitterIcon class="w-8 mx-2"
          /></a>

          <InstaIcon class="w-8 mx-2" />
        </div>
      </div>

      <img
        class="mt-16 rounded-full w-48 h-48 border-2"
        src="~/assets/image/riza-min.jpg"
      />

      <div class="my-2">
        <a
          href="mailto:ruhulruzbihan@gmail.com"
          class="text-2xl font-semibold hover:underline"
          >Riza Hassan</a
        >
        <h2 class="text-xl">
          A Computer Science student interested in building things and <br />
          learning Entrepreneurship.
        </h2>
        <div class="mt-2 flex flex-row justify-center">
          <a href="https://github.com/rizahassan"
            ><GithubIcon class="w-8 mx-2"
          /></a>
          <a href="https://github.com/rizahassan"
            ><TwitterIcon class="w-8 mx-2"
          /></a>
          <a href="https://www.instagram.com/riza__hassan/"
            ><InstaIcon class="w-8 mx-2"
          /></a>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
