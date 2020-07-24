<template>
  <main
    class="flex flex-col max-w-screen-xl min-h-screen p-4 mx-auto text-center sm:px-12 md:px-10"
  >
    <div class="flex justify-center pb-4">
      <div class="self-center w-full border border-gray-400" />
      <h1
        class="px-6 py-1 font-mono text-lg font-semibold tracking-widest text-gray-100 uppercase bg-indigo-700"
      >
        {{ this.$route.params.id }}
      </h1>
      <div class="self-center w-full border border-gray-400" />
    </div>

    <div class="lg:flex lg:flex-row lg:space-x-3">
      <!-- 3 main latest news -->
      <div class="lg:w-5/12">
        <section
          v-for="article in mainArticles"
          :key="article.url"
          class="max-w-screen-lg mx-auto mb-3 border border-indigo-200 rounded-md mainSection"
        >
          <a :href="article.url" target="_blank" rel="noopener noreferrer">
            <div
              id="articleImage"
              v-lazy:background-image="article.urlToImage"
              class="bg-center bg-no-repeat bg-cover imageMain rounded-t-md"
            />
            <div
              class="p-2 bg-gray-100 hover:bg-gray-300 rounded-b-md md:p-4 md:space-y-1"
            >
              <p class="text-xs text-left text-indigo-600 sm:text-sm">
                {{ publishTime(article.publishedAt) }} /
                {{ article.source.name }}
              </p>

              <v-clamp
                autoresize
                :max-lines="3"
                class="font-bold leading-5 text-left text-gray-800 md:text-2xl hover:underline hover:text-indigo-700"
              >
                {{ article.title }}
              </v-clamp>
            </div>
          </a>
        </section>
      </div>

      <div class="md:flex md:flex-row md:space-x-4 lg:w-7/12 lg:space-x-3">
        <!-- latest news -->
        <div class="md:w-7/12 lg:w-5/12">
          <section
            v-for="article in next7LatestArticles"
            :key="article.url"
            class="w-full max-w-screen-lg p-3 mx-auto mb-4 border-b border-indigo-200 hover:bg-gray-100"
          >
            <a
              class="flex justify-between space-x-2 font-semibold text-gray-800 lg:space-x-1"
              :href="article.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="">
                <p class="text-xs text-left text-indigo-600">
                  {{ publishTime(article.publishedAt) }} /
                  {{ article.source.name }}
                </p>
                <v-clamp
                  autoresize
                  :max-lines="3"
                  class="leading-5 text-left hover:underline hover:text-indigo-700"
                >
                  {{ article.title }}
                </v-clamp>
              </div>
              <div
                v-lazy:background-image="article.urlToImage"
                class="bg-center bg-no-repeat bg-cover image"
              />
            </a>
          </section>
        </div>

        <div class="md:w-5/12 lg:w-7/12">
          <!-- Start trending news -->
          <div class="pb-1">
            <h1
              class="font-mono font-semibold tracking-wider text-left text-indigo-700 uppercase"
            >
              TRENDING NEWS
            </h1>
            <div class="self-center w-full border border-gray-400" />
          </div>
          <!-- trending news -->
          <section
            v-for="(article, index) in top10TrendingArticles"
            :key="article.url"
            class="w-full max-w-screen-lg p-3 mx-auto mb-4 border-b border-indigo-200 hover:bg-gray-100"
          >
            <a
              class="flex justify-between space-x-2 font-semibold text-gray-800"
              :href="article.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="flex flex-row space-x-4">
                <p class="self-center text-4xl text-gray-500">
                  {{ index + 1 }}
                </p>
                <div class="">
                  <p class="text-xs text-left text-indigo-600">
                    {{ publishTime(article.publishedAt) }} /
                    {{ article.source.name }}
                  </p>
                  <v-clamp
                    autoresize
                    :max-lines="3"
                    class="leading-5 text-left hover:underline hover:text-indigo-700"
                  >
                    {{ article.title }}
                  </v-clamp>
                </div>
              </div>

              <div
                v-lazy:background-image="article.urlToImage"
                class="bg-center bg-no-repeat bg-cover image"
              />
            </a>
          </section>
        </div>
      </div>
    </div>

    <!-- Start more news // "relevant" news-->
    <div class="pb-1 lg:hidden">
      <h1
        class="font-mono font-semibold tracking-wider text-left text-indigo-700 uppercase"
      >
        MORE NEWS
      </h1>
      <div class="self-center w-full border border-gray-400" />
    </div>
    <div class="justify-center hidden pb-4 lg:flex">
      <div class="self-center w-full border border-gray-400" />
      <h1
        class="px-10 py-1 font-mono text-base font-semibold tracking-widest text-gray-100 uppercase bg-indigo-700"
      >
        MORE NEWS
      </h1>
      <div class="self-center w-full border border-gray-400" />
    </div>
    <!-- more news -->
    <section
      v-for="article in relevantArticles"
      :key="article.url"
      class="w-full max-w-screen-lg p-3 mx-auto mb-4 border-b border-indigo-200 hover:bg-gray-100"
    >
      <a
        class="flex justify-between space-x-2 font-semibold text-gray-800"
        :href="article.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="">
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
        <div
          v-lazy:background-image="article.urlToImage"
          class="bg-center bg-no-repeat bg-cover image"
        />
      </a>
    </section>
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
  async asyncData({ params, $axios }) {
    const latestArticleUrl =
      'https://newsapi.org/v2/everything?apiKey=3213fec8c1894a8db251b15ae592f23d' +
      '&page=1&' +
      'q=' +
      params.id +
      '&sortBy=publishedAt'

    const trendingArticleUrl =
      'https://newsapi.org/v2/everything?apiKey=3213fec8c1894a8db251b15ae592f23d' +
      '&page=1&' +
      'q=' +
      params.id +
      '&sortBy=popularity'

    const relevantArticleUrl =
      'https://newsapi.org/v2/everything?apiKey=3213fec8c1894a8db251b15ae592f23d' +
      '&page=1&' +
      'q=' +
      params.id +
      '&sortBy=relevancy'

    const latestArticles = await $axios.$get(latestArticleUrl)
    const trendingArticles = await $axios.$get(trendingArticleUrl)
    const relevantArticles = await $axios.$get(relevantArticleUrl)

    return {
      latestArticles: latestArticles.articles,
      trendingArticles: trendingArticles.articles,
      relevantArticles: relevantArticles.articles,
    }
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
    mainArticles() {
      return this.latestArticles.slice(0, 3)
    },
    next7LatestArticles() {
      return this.latestArticles.slice(3, 11)
    },
    top10TrendingArticles() {
      return this.trendingArticles.slice(0, 10)
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
.mainSection {
  @apply w-full h-auto;
}
@screen md {
  .mainSection {
    width: 700px;
    height: auto;
  }
}
@screen lg {
  .mainSection {
    @apply w-full h-auto;
  }
}

.imageMain {
  @apply w-full h-48;
}
@screen md {
  .imageMain {
    @apply w-full;
    height: 400px;
  }
}
@screen lg {
  .imageMain {
    @apply w-full h-48;
  }
}

.image {
  width: 5rem;
  height: 4rem;
  /* @apply w-24 h-20 rounded-md; */
  flex: 0 0 5rem;
  border-radius: 0.375rem;
}
@screen lg {
  .image {
    width: 4rem;
    height: 4rem;
    /* @apply w-24 h-20 rounded-md; */
    flex: 0 0 4rem;
    border-radius: 0.375rem;
  }
}
</style>
