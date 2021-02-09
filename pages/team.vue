<template>
  <main class="justify-center min-h-screen text-center max-w-screen">
    <div>
      <h1 class="mt-8 font-serif text-3xl font-bold text-gray-800 md:text-4xl">
        Meet the team
      </h1>
    </div>

    <div class="flex flex-col items-center justify-center px-16 my-12 md:px-64">
      <img
        class="w-48 h-48 mt-16 border-2 rounded-full"
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
        <div class="flex flex-row justify-center mt-2">
          <a
            href="https://github.com/mujahidfa"
            target="_blank"
            rel="noopener noreferrer"
            ><GithubIcon class="w-8 mx-2"
          /></a>
          <a
            href="https://twitter.com/mujahid_fa"
            target="_blank"
            rel="noopener noreferrer"
            ><TwitterIcon class="w-8 mx-2"
          /></a>
          <a
            href="https://www.linkedin.com/in/mujahid-fakhrul-anuar-16b6751b2/"
            target="_blank"
            rel="noopener noreferrer"
            ><LinkedinIcon class="w-8 mx-2"
          /></a>
        </div>
      </div>

      <img
        class="w-48 h-48 mt-16 border-2 rounded-full"
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
        <div class="flex flex-row justify-center mt-2">
          <a
            href="https://github.com/rizahassan"
            target="_blank"
            rel="noopener noreferrer"
            ><GithubIcon class="w-8 mx-2"
          /></a>
          <a
            href="https://twitter.com/ruhulruzbihan"
            target="_blank"
            rel="noopener noreferrer"
            ><TwitterIcon class="w-8 mx-2"
          /></a>
          <a
            href="https://www.linkedin.com/in/riza-hassan/"
            target="_blank"
            rel="noopener noreferrer"
            ><LinkedinIcon class="w-8 mx-2"
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
