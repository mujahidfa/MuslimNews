<template>
  <main class="justify-center min-h-screen mx-12 text-center lg:mx-48">
    <h1 class="mt-8 font-serif text-3xl font-bold text-gray-800 md:text-4xl">
      MuslimNews
    </h1>
    <div class="p-12 text-justify">
      <div class="text-center">
        <h2 class="text-lg text-gray-700 md:text-2xl">
          MuslimNews is a news website gathering all Islam and Muslim related
          news articles from around the world. The website is to help users find
          relevant news and articles relating to Islam and the Muslim world with
          the added capability of specifying a keyword of their interest.
        </h2>
      </div>

      <div class="mt-24 border-t-2 border-b-2">
        <h1 class="text-xl font-bold text-indigo-600 md:text-3xl">
          Articles
        </h1>
        <h2 class="text-lg text-gray-700 md:text-xl">
          Muslim and Islam related news articles are collected using
          <a
            class="text-gray-900 hover:underline"
            href="https://azure.microsoft.com/en-us/try/cognitive-services/?api=search-api-v7"
            target="_blank"
            rel="noopener noreferrer"
            >the Bing Search API</a
          >
          . It retrieves news headlines and articles from reputable news sources
          from all around the world.
        </h2>
      </div>
      <div class="mt-12 border-t-2 border-b-2">
        <h1 class="text-xl font-bold text-indigo-600 md:text-3xl">
          Features
        </h1>
        <h2 class="text-lg text-gray-700 md:text-xl">
          Readers will be able to search for news using keywords, then sort them
          by published date, popularity, and relevancy. Popular categories are
          pre-determined according to trending news.
        </h2>
      </div>
      <div class="mt-12 border-t-2 border-b-2">
        <h1 class="text-xl font-bold text-indigo-600 md:text-3xl">
          History
        </h1>
        <h2 class="text-lg text-gray-700 md:text-xl">
          This platform was developed for
          <a
            class="text-gray-900 hover:underline"
            href="https://www.ummahacks.com/"
            target="_blank"
            rel="noopener noreferrer"
            >UmmaHacks 2020</a
          >, the world's first virtual Muslim hackathon. It was developed by two
          Malaysians
          <a
            class="text-gray-900 hover:underline"
            href="https://twitter.com/mujahid_fa"
            target="_blank"
            rel="noopener noreferrer"
            >Mujahid Anuar</a
          >
          and
          <a
            class="text-gray-900 hover:underline"
            href="mailto:ruhulruzbihan@gmail.com"
            >Riza Hassan</a
          >
          who are interested in making Islam and Muslim related news more
          accessible to all.
        </h2>
      </div>
    </div>
    <div class="text-center inline-block my-24">
      <a
        class="p-2 text-white hover:text-black text-xl border-2 bg-indigo-600 hover:bg-white border-purple-800"
        href="mailto:muslimnewsapp@gmail.com"
        >Contact Us</a
      >
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
