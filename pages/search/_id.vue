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

    <template v-if="areThereNoResults === true">
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

      <section
        class="flex flex-row items-center max-w-screen-lg pb-8 mx-auto text-left md:text-lg"
      >
        <p>Sort by:</p>
        <button
          :class="{
            'bg-indigo-100 text-indigo-700': sortBy === 'relevancy',
            'text-gray-500 hover:text-indigo-600 focus:text-indigo-600':
              sortBy !== 'relevancy',
          }"
          class="px-3 py-2 ml-2 font-medium leading-none rounded-lg focus:outline-none hover:text-indigo-600 focus:text-indigo-600"
          @click="sortBy = 'relevancy'"
        >
          relevancy
        </button>
        <button
          :class="{
            'bg-indigo-100 text-indigo-700': sortBy === 'publishedAt',
            'text-gray-500 hover:text-indigo-600 focus:text-indigo-600':
              sortBy !== 'publishedAt',
          }"
          class="px-3 py-2 font-medium leading-none rounded-lg focus:outline-none hover:text-indigo-600 focus:text-indigo-600"
          @click="sortBy = 'publishedAt'"
        >
          latest
        </button>
        <!-- <button
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
        </button> -->
      </section>

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
            v-lazy:background-image="imageUrl(article)"
            class="bg-center bg-no-repeat bg-cover image"
          />
          <div>
            <p class="text-xs text-left text-indigo-600">
              {{ publishTime(article.datePublished) }} /
              {{ article.provider[0].name }}
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
              {{ article.name }}
            </v-clamp>
          </div>
        </a>
      </section>

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
import { url } from '../../api/apiurl.js'

export default {
  components: {
    VClamp,
  },
  async asyncData({ params, $axios, $config: { bingApiKey } }) {
    const relevantArticles = await $axios.$get(
      url + '&count=20&sortBy=relevance&q=' + params.id,
      {
        headers: {
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
          'x-rapidapi-key': bingApiKey,
          'x-bingapis-sdk': 'true',
        },
      }
    )

    return {
      articles: relevantArticles.value,
      totalEstimatedMatches: relevantArticles.totalEstimatedMatches,
    }
  },
  data() {
    return {
      sortBy: 'relevancy',
      currentPage: 1,
    }
  },
  computed: {
    totalPages() {
      if (this.areThereNoResults) {
        return 0
      } else {
        return Math.ceil(this.totalResults / 20)
      }
    },
    totalResults() {
      if (this.areThereNoResults) {
        return 0
      } else {
        return this.totalEstimatedMatches
      }
    },
    areThereNoResults() {
      return typeof this.totalEstimatedMatches === 'undefined'
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
    imageUrl(article) {
      if (typeof article.image === 'undefined') {
        return 'https://image.flaticon.com/icons/svg/2965/2965879.svg'
      } else if (typeof article.image.contentUrl === 'undefined') {
        if (typeof article.image.thumbnail.contentUrl === 'undefined') {
          return 'https://image.flaticon.com/icons/svg/2965/2965879.svg'
        } else {
          return article.image.thumbnail.contentUrl
        }
      } else {
        return article.image.contentUrl
      }
    },
    async handlePaginateClick(pageNum) {
      const offset = pageNum * 20 - 20
      const url =
        'https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&originalImg=true&safeSearch=Off' +
        '&count=20' +
        '&offset=' +
        offset +
        '&q=(islam OR muslim) AND ' +
        this.$route.params.id +
        '&sortBy=' +
        this.sortBy

      this.currentPage = pageNum
      const { totalEstimatedMatches, value } = await this.$axios.$get(url, {
        headers: {
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
          'x-rapidapi-key': this.$config.bingApiKey,
          'x-bingapis-sdk': 'true',
        },
      })
      this.totalEstimatedMatches = totalEstimatedMatches
      this.articles = value
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
</style>
