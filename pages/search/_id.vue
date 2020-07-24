<template>
  <main
    class="flex flex-col min-h-screen p-4 text-center md:px-10 md:py-8"
    :class="{
      'justify-start pt-8': totalResults === 0,
      'justify-center': totalResults !== 0,
    }"
  >
    <p class="text-lg md:text-xl">You have picked the keyword:</p>
    <h1 class="text-4xl font-bold md:text-5xl">
      {{ this.$route.params.id }}
    </h1>

    <template v-if="totalResults === 0">
      <p class="pt-6 pb-4">No news articles found for this keyword.</p>
      <nuxt-link to="/search" class="text-indigo-700 hover:text-green-600">
        Search again
      </nuxt-link>
    </template>

    <template v-else>
      <div class="mb-8">
        <nuxt-link
          to="/search"
          class="text-sm text-indigo-700 md:text-base hover:text-green-600"
        >
          Search again
        </nuxt-link>
      </div>

      <!-- <p>Total results: {{ totalResults }}</p>
    <p>Total pages: {{ totalPages }}</p> -->
      <section
        class="flex flex-row items-center max-w-screen-lg pb-8 mx-auto text-left md:text-lg"
      >
        <p>Sort by:</p>
        <button
          :class="{
            'bg-indigo-100 text-indigo-700': sortBy === 'publishedAt',
            'text-gray-500 hover:text-indigo-600 focus:text-indigo-600':
              sortBy !== 'publishedAt',
          }"
          class="px-3 py-2 ml-2 font-medium leading-none rounded-lg focus:outline-none hover:text-indigo-600 focus:text-indigo-600"
          @click="sortBy = 'publishedAt'"
        >
          latest
        </button>
        <button
          :class="{
            'bg-indigo-100 text-indigo-700': sortBy === 'popularity',
            'text-gray-500 hover:text-indigo-600 focus:text-indigo-600':
              sortBy !== 'popularity',
            '-mr-2': sortBy !== 'popularity' && sortBy === 'publishedAt',
            '-ml-2': sortBy !== 'popularity' && sortBy === 'relevancy',
          }"
          class="px-3 py-2 font-medium leading-none rounded-lg focus:outline-none hover:text-indigo-600 focus:text-indigo-600"
          @click="sortBy = 'popularity'"
        >
          popularity
        </button>
        <button
          :class="{
            'bg-indigo-100 text-indigo-700': sortBy === 'relevancy',
            'text-gray-500 hover:text-indigo-600 focus:text-indigo-600':
              sortBy !== 'relevancy',
          }"
          class="px-3 py-2 font-medium leading-none rounded-lg focus:outline-none hover:text-indigo-600 focus:text-indigo-600"
          @click="sortBy = 'relevancy'"
        >
          relevancy
        </button>
      </section>

      <!-- <Pagination
        v-if="totalResults > 80"
        :page-count="5"
        :value="currentPage"
        :click-handler="handlePaginateClick"
        class="pb-4"
      />
      <Pagination
        v-else
        :page-count="totalPages"
        :value="currentPage"
        :click-handler="handlePaginateClick"
        class="pb-4"
      /> -->

      <section
        v-for="article in articles"
        :key="article.url"
        class="w-full max-w-screen-lg p-3 mx-auto mb-4 border-b border-indigo-200 hover:bg-gray-100"
      >
        <a
          class="flex justify-start space-x-4 font-semibold text-gray-800"
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            v-lazy:background-image="article.urlToImage"
            class="bg-center bg-no-repeat bg-cover image"
          />
          <div>
            <p class="text-xs text-left text-indigo-600">
              {{ publishTime(article.publishedAt) }} / {{ article.source.name }}
            </p>
            <v-clamp
              autoresize
              :max-lines="3"
              class="leading-5 text-left hover:underline hover:text-indigo-700"
            >
              {{ article.title }}
            </v-clamp>
            <v-clamp
              autoresize
              :max-lines="2"
              class="text-sm leading-snug text-left text-gray-600 break-words"
            >
              {{ article.description }}
            </v-clamp>
          </div>
        </a>
      </section>
      <!-- <section
        v-for="article in articles"
        :key="article.url"
        class="w-full max-w-screen-lg p-3 mx-auto mb-4 bg-gray-100 border border-indigo-100 rounded-md shadow-lg hover:bg-gray-200"
      >
        <div class="flex justify-start space-x-3">
          <div
            v-lazy:background-image="article.urlToImage"
            class="bg-center bg-no-repeat bg-cover image"
          />

          <div class="flex-grow space-y-2">
            <h1 class="leading-5 text-left">
              <a
                class="font-semibold text-gray-900 hover:underline hover:text-indigo-700"
                :href="article.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ article.title }}
              </a>
            </h1>
            <v-clamp
              autoresize
              :max-lines="2"
              class="text-sm leading-snug text-left text-gray-600 break-words"
            >
              {{ article.description }}
            </v-clamp>
            <p class="text-xs text-right text-indigo-500">
              {{ publishTime(article.publishedAt) }}
            </p>
          </div>
        </div>
      </section> -->

      <Pagination
        v-if="totalResults > 80"
        :page-count="5"
        :value="currentPage"
        :click-handler="handlePaginateClick"
      />
      <Pagination
        v-else
        :page-count="totalPages"
        :value="currentPage"
        :click-handler="handlePaginateClick"
      />
    </template>
  </main>
</template>

<script>
import VClamp from 'vue-clamp'
// import Vue from 'vue'
// import { Context } from '@nuxt/types'
// import { axios } from '@nuxtjs/axios'

export default {
  components: {
    VClamp,
  },
  async asyncData({ params, $axios, $config: { newsAPIKey } }) {
    const url =
      'https://newsapi.org/v2/everything?apiKey='+ newsAPIKey +' +
      '&page=1&' +
      'q=(islam OR muslim) AND ' +
      params.id +
      '&sortBy=publishedAt'

    const { status, totalResults, articles } = await $axios.$get(url)
    return { status, totalResults, articles }
  },
  data() {
    return {
      sortBy: 'publishedAt',
      currentPage: 1,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalResults / 20)
    },
  },
  watch: {
    // whenever question changes, this function will run
    sortBy() {
      this.handlePaginateClick(1)
      this.currentPage = 1
    },
  },
  methods: {
    publishTime(time) {
      return this.$dayjs().from(this.$dayjs(time))
    },
    async handlePaginateClick(pageNum) {
      const url =
        'https://newsapi.org/v2/everything?apiKey=3213fec8c1894a8db251b15ae592f23d' +
        '&page=' +
        pageNum +
        '&q=(islam OR muslim) AND ' +
        this.$route.params.id +
        '&sortBy=' +
        this.sortBy

      this.currentPage = pageNum
      const { status, totalResults, articles } = await this.$axios.$get(url)
      this.status = status
      this.totalResults = totalResults
      this.articles = articles
    },
  },
}
</script>

<style scoped>
.image {
  width: 6rem;
  height: 5rem;
  /* @apply w-24 h-20 rounded-md; */
  flex: 0 0 6rem;
  border-radius: 0.375rem;
}
/* @screen lg {
  .image {
    width: 96px;
    height: 96px;
    flex: 0 0 96px;
  }
} */
/* img::before {
  display: block;
  content: '';
  padding-top: calc(100% * 2 / 3);
  You could reduce this expression with a preprocessor or by doing the math. I've kept the longer form in `calc()` to make the math more readable for this demo.
} */
</style>
