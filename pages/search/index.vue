<template>
  <main
    class="flex flex-col max-w-lg min-h-screen p-8 pt-20 mx-auto text-center lg:p-4 lg:pt-20"
  >
    <h1 class="pb-8 text-4xl font-bold lg:text-5xl">Search for a keyword:</h1>
    <input
      id="search"
      v-model="searchKeyword"
      type="text"
      name="search"
      class="p-2 mb-8 border border-indigo-700 rounded-md"
      placeholder="Enter a keyword"
      @keyup.enter="onSearchButtonClick"
    />

    <div
      v-if="isLoading"
      class="py-1 mb-8 text-center bg-indigo-800 rounded-lg"
    >
      <div class="inline-block w-2 h-2 loader"></div>
    </div>
    <button
      v-else
      class="flex items-center justify-center py-1 mb-8 text-2xl text-center text-indigo-700 bg-indigo-200 rounded-lg hover:bg-indigo-800 hover:text-indigo-100"
      @click="onSearchButtonClick"
    >
      <svg fill="currentColor" viewBox="0 0 24 24" class="w-8 h-8 pt-1">
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        ></path>
      </svg>
      Search
    </button>

    <section class="">
      <h2 class="font-semibold text-gray-900">Popular keywords:</h2>
      <div class="flex flex-wrap justify-center">
        <nuxt-link
          v-for="(keyword, index) in popularKeywords"
          :key="index"
          :to="link(keyword)"
          class="px-10 py-1 m-4 font-mono text-gray-800 bg-indigo-100 border border-indigo-500 rounded-full hover:bg-indigo-600 hover:text-gray-100"
        >
          {{ keyword }}
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      isLoading: false,
      searchKeyword: '',
      popularKeywords: [
        'Palestine',
        'Syria',
        'Islamophobia',
        'muslim ban',
        'Uighur',
        'Rohingya',
        'Coronavirus',
        'COVID-19',
      ],
    }
  },
  methods: {
    link(keyword: String): String {
      return `/search/${keyword}`
    },
    onSearchButtonClick() {
      if (this.searchKeyword) {
        this.isLoading = true
        this.$router.push(`/search/${this.searchKeyword}`)
      } else {
        alert('Enter a keyword/search term!')
      }
    },
  },
})
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
