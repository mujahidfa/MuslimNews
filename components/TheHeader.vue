<template>
  <header
    class="font-serif border-b-2 border-purple-200 sm:grid sm:grid-rows-2-custom"
  >
    <div
      class="sm:flex sm:flex-row sm:justify-center sm:space-x-48 md:space-x-64"
    >
      <div class="flex items-center justify-between px-4 py-1 sm:p-0">
        <div class="sm:hidden">
          <button
            type="button"
            class="block text-purple-500 hover:text-purple-800 focus:text-purple-800 focus:outline-none"
            @click="isOpen = !isOpen"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <nuxt-link
          to="/"
          class="pl-4 font-serif text-3xl font-semibold text-indigo-600"
          @click.native="isOpen = false"
        >
          MuslimNews
        </nuxt-link>
        <nuxt-link
          to="/search"
          class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md sm:hidden"
          @click.native="isOpen = false"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            class="flex-shrink-0 w-6 h-6 text-indigo-500 hover:text-indigo-800"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </nuxt-link>
      </div>

      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="px-2 pt-2 pb-4 space-y-1 text-center border-t-2 border-purple-100 sm:border-transparent sm:flex sm:p-0"
      >
        <nuxt-link
          to="/search"
          class="block p-2 mt-1 font-semibold text-purple-800 rounded hover:bg-indigo-600 hover:text-white"
          @click.native="isOpen = !isOpen"
        >
          Search
        </nuxt-link>
        <nuxt-link
          to="/about"
          class="block p-2 font-semibold text-purple-800 rounded hover:bg-indigo-600 hover:text-white sm:mt-0 sm:ml-2"
          @click.native="isOpen = !isOpen"
        >
          About
        </nuxt-link>
        <nuxt-link
          to="/team"
          class="block p-2 font-semibold text-purple-800 rounded hover:bg-indigo-600 hover:text-white sm:mt-0 sm:ml-2"
          @click.native="isOpen = !isOpen"
        >
          Team
        </nuxt-link>
        <section
          class="justify-center px-4 pt-3 text-center border-t border-purple-200 sm:hidden"
        >
          <nuxt-link
            v-for="(keyword, index) in category"
            :key="index"
            :to="link(keyword.name)"
            class="px-4 mx-2 text-sm font-semibold text-gray-800 border border-purple-200 rounded-lg md:mx-4 md:text-base hover:bg-purple-800 hover:text-gray-100"
            @click.native="isOpen = !isOpen"
          >
            {{ keyword.name }}
          </nuxt-link>
        </section>
      </nav>
    </div>

    <div class="hidden w-full bg-indigo-800 sm:inline-block">
      <section class="justify-center text-center">
        <nuxt-link
          v-for="(keyword, index) in category"
          :key="index"
          :to="link(keyword.name)"
          class="h-full mx-2 text-sm font-semibold text-white md:mx-4 md:text-base hover:bg-white hover:text-indigo-600"
        >
          {{ keyword.name }}
        </nuxt-link>
      </section>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isOpen: false,
      category: [
        { name: 'Palestine' },
        { name: 'Syria' },
        { name: 'Uighur' },
        { name: 'Yemen' },
        { name: 'Rohingya' },
        { name: 'Islamophobia' },
        { name: 'Muslim ban' },
      ],
    }
  },
  methods: {
    link(keyword: String): String {
      return `/news/${keyword}`
    },
  },
})
</script>

<style scoped>
.grid-rows-2-custom {
  grid-template-rows: auto auto;
}
</style>
