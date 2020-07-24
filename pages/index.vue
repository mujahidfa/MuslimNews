<template>
  <main
    class="min-h-screen max-w-screen-xl justify-center text-center p-12 pt-0"
  >
    <!-- First section -->
    <!-- <h1 class="lg:text-left font-semibold text-2xl text-gray-800 mt-4">
      Trending categories
    </h1>
    <section
      class="lg:text-left flex flex-row border-box overflow-x-auto text-gray-800"
    >

      <a
        v-for="category in category.slice(0, 8)"
        :key="category"
        :href="category.link"
        class="inline-block md:hidden lg:hidden mx-2 mt-2 p-2 rounded-lg shadow-xl border-2 border-indigo-600 font-semibold text-xl"
      >
        {{ category.name }}
      </a>

      <a
        v-for="category in category.slice(0, 8)"
        :key="category"
        :href="category.link"
        class="hidden md:inline-block mx-2 mt-2 p-2 rounded-lg border-2 border-indigo-600 font-medium lg:font-semibold lg:text-2xl"
      >
        {{ category.name }}
      </a>
    </section> -->
    <div class="lg:flex lg:flex-row">
      <div class="lg:w-8/12">
        <!-- Featured news -->
        <h1
          class="font-semibold text-2xl md:text-4xl lg:text-left mt-4 text-gray-800"
        >
          FEATURED NEWS
        </h1>
        <div
          class="pt-4"
          v-for="article in articles.slice(0, 1)"
          :key="article.title"
        >
          <BigCard :article="article" />
        </div>
        <!-- Categories for sm-->
      </div>
      <!-- Trending news -->
      <div class="lg:w-4/12 lg:ml-12">
        <h1 class="mt-4 font-semibold text-2xl md:text-4xl">TRENDING TOPIC</h1>
        <div
          v-for="(article, index) in articles.slice(0, 4)"
          :key="article.title"
        >
          <SmallCard class="pt-4" :trending="article" :number="index + 1" />
        </div>
      </div>
    </div>
    <div class="inline-block text-center mt-12 max-w-full">
      <h1 class="text-2xl md:text-4xl font-semibold">LATEST NEWS</h1>
      <div class="flex flex-row overflow-x-auto">
        <div
          class="mt-4 mx-2 md:mx-4 lg:mx-8"
          v-for="latestArticle in latestArticle"
          :key="latestArticle.title"
        >
          <LatestNews :trending="latestArticle" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import BigCard from '~/components/BigCard.vue'
import SmallCard from '~/components/SmallCard.vue'
import LatestNews from '~/components/LatestNews.vue'

export default Vue.extend({
  components: { BigCard, SmallCard, LatestNews },
  async asyncData({ params, $axios }) {
    const popularityURL =
      'https://newsapi.org/v2/everything?apiKey=3213fec8c1894a8db251b15ae592f23d' +
      '&page=1&' +
      'q=(islam OR muslim) ' +
      '&sortBy=popularity'

    const latestArticleURL =
      'https://newsapi.org/v2/everything?apiKey=3213fec8c1894a8db251b15ae592f23d' +
      '&page=1&' +
      'q=(islam OR muslim) ' +
      '&sortBy=publishedAt'

    const { status, totalResults, articles } = await $axios.$get(popularityURL)
    const latestArticle = await $axios.$get(latestArticleURL)

    return {
      status,
      totalResults,
      articles,
      latestArticle: latestArticle.articles,
    }
  },
  data: function () {
    return {
      category: [
        { name: 'Canada', link: 'https://www.google.com' },
        { name: 'Finance', link: 'https://www.google.com' },
        { name: 'COVID', link: 'https://www.google.com' },
        { name: 'Android', link: 'https://www.google.com' },
      ],
    }
  },
  methods: {},
})
</script>

<style scoped>
::-webkit-scrollbar {
  width: 12px;
  height: 6px;
}
::-webkit-scrollbar-track {
  border: 1px solid white;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgb(235, 235, 235);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #bbbbbb;
}
</style>
