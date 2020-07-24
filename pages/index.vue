<template>
  <main
    class="flex flex-col max-w-screen-xl min-h-screen p-4 mx-auto text-center sm:px-12 md:px-10"
  >
    <div class="pb-4 space-y-10 lg:flex lg:flex-row lg:space-x-8">
      <!-- 4 main relevant news -->
      <div class="">
        <div class="flex justify-center pb-4 lg:block lg:justify-start lg:pb-3">
          <div class="py-1">
            <h1
              class="font-mono text-2xl font-semibold tracking-wide text-left text-indigo-700 uppercase lg:text-3xl"
            >
              FEATURED NEWS
            </h1>
            <div class="self-center w-full border border-gray-400" />
          </div>
        </div>
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
                class="pb-2 font-bold leading-5 text-left text-gray-800 md:text-2xl hover:underline hover:text-indigo-700"
              >
                {{ article.title }}
              </v-clamp>
              <v-clamp
                autoresize
                :max-lines="3"
                class="text-sm leading-snug text-left text-gray-600 break-words"
              >
                {{ article.description }}
              </v-clamp>
            </div>
          </a>
        </section>
      </div>

      <div class="">
        <!-- Start trending news -->
        <div class="pb-1">
          <h1
            class="font-mono font-semibold tracking-wider text-left text-indigo-700 uppercase sm:text-xl md:text-2xl"
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

    <!-- Start latest news -->
    <div class="pb-1 lg:hidden">
      <h1
        class="font-mono font-semibold tracking-wider text-left text-indigo-700 uppercase sm:text-xl md:text-2xl"
      >
        LATEST NEWS
      </h1>
      <div class="self-center w-full border border-gray-400" />
    </div>
    <div class="justify-center hidden pb-4 lg:flex">
      <div class="self-center w-full border border-gray-400" />
      <h1
        class="px-10 py-1 font-mono text-lg font-semibold tracking-widest text-gray-100 uppercase bg-indigo-700"
      >
        LATEST NEWS
      </h1>
      <div class="self-center w-full border border-gray-400" />
    </div>

    <!-- latest news -->
    <div
      class="flex flex-wrap lg:flex-no-wrap lg:overflow-auto lg:whitespace-no-wrap"
    >
      <section
        v-for="article in latestArticles"
        :key="article.url"
        class="p-3 mb-4 mr-2 text-center latestNewsSection hover:bg-gray-100"
      >
        <a
          class="w-full h-auto"
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            v-lazy:background-image="article.urlToImage"
            class="bg-center bg-no-repeat bg-cover imageLatest"
          />
          <div class="">
            <p class="text-xs text-left text-indigo-600">
              {{ publishTime(article.publishedAt) }} / {{ article.source.name }}
            </p>
            <v-clamp
              autoresize
              :max-lines="2"
              class="font-semibold leading-5 text-left text-gray-800 hover:underline hover:text-indigo-700"
            >
              {{ article.title }}
            </v-clamp>
          </div>
        </a>
      </section>
    </div>
  </main>
</template>

<script>
import VClamp from 'vue-clamp'

export default {
  components: { VClamp },
  async asyncData({ $axios }) {
    const latestArticleUrl =
      'https://newsapi.org/v2/everything?apiKey=3213fec8c1894a8db251b15ae592f23d' +
      '&page=1' +
      '&q=(islam OR muslim)' +
      '&sortBy=publishedAt'

    const trendingArticleUrl =
      'https://newsapi.org/v2/everything?apiKey=3213fec8c1894a8db251b15ae592f23d' +
      '&page=1' +
      '&q=(islam OR muslim)' +
      '&sortBy=popularity'

    const relevantArticleUrl =
      'https://newsapi.org/v2/everything?apiKey=3213fec8c1894a8db251b15ae592f23d' +
      '&page=1' +
      '&q=(islam OR muslim)' +
      '&sortBy=relevancy'

    const latestArticles = await $axios.$get(latestArticleUrl)
    const trendingArticles = await $axios.$get(trendingArticleUrl)
    const relevantArticles = await $axios.$get(relevantArticleUrl)

    const sortedRelevantArticles = relevantArticles.articles

    sortedRelevantArticles.sort((a, b) =>
      b.publishedAt.localeCompare(a.publishedAt)
    )

    return {
      latestArticles: latestArticles.articles,
      trendingArticles: trendingArticles.articles,
      relevantArticles: sortedRelevantArticles,
    }
  },
  data() {
    return {
      category: [
        { name: 'Canada', link: 'https://www.google.com' },
        { name: 'Finance', link: 'https://www.google.com' },
        { name: 'COVID', link: 'https://www.google.com' },
        { name: 'Android', link: 'https://www.google.com' },
      ],
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalResults / 20)
    },
    mainArticles() {
      return this.relevantArticles.slice(0, 1)
    },
    top10TrendingArticles() {
      return this.trendingArticles.slice(0, 5)
    },
  },
  methods: {
    publishTime(time) {
      return this.$dayjs().from(this.$dayjs(time))
    },
  },
}
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
  @apply w-full h-64;
}
@screen md {
  .imageMain {
    @apply w-full;
    height: 400px;
  }
}
@screen lg {
  .imageMain {
    @apply w-full;
    height: 400px;
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

.imageLatest {
  width: 15rem;
  height: 17rem;
  @apply rounded-md;
}
.latestNewsSection {
  width: 17rem;
}
@screen lg {
  .imageLatest {
    width: 20rem;
    height: 20rem;
  }
}
@screen lg {
  .latestNewsSection {
    width: 22rem;
    height: 25rem;
  }
}

/* To enable smooth scrolling on ios devices */
.latestNewsWrapper {
  -webkit-overflow-scrolling: touch;
}
</style>
