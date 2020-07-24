<template>
  <header
    class="border-b-2 border-purple-100 sm:flex sm:justify-around sm:items-center sm:px-4 sm:py-3"
    :class="{
      'shadow-xl': isOpen === true,
    }"
  >
    <!-- <div class="max-w-screen-lg"> -->
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
    </nav>
    <!-- </div> -->
  </header>
  <!-- <header class="relative p-4 bg-purple-200 border-b border-purple-600">
    <nav class="sm:hidden">
      <nuxt-link class="link-default" to="/chat">
        Chat
      </nuxt-link>
      <nuxt-link class="link-default" to="/about">
        About
      </nuxt-link>
      <nuxt-link class="link-default" to="/donate">
        Donate
      </nuxt-link>
      <nuxt-link class="link-default" to="/joinus">
        Join us!
      </nuxt-link>
      <nuxt-link
        to="/"
        class="font-serif text-3xl font-semibold text-indigo-600"
      >
        MuslimNews
      </nuxt-link>
    </nav> -->
  <!-- <div class="max-w-screen-lg px-4 mx-auto sm:px-6">
      <div
        class="flex items-center justify-between py-6 md:justify-start md:space-x-10 lg:px-20"
      >
        <div class="md:w-0 md:flex-1">
          <span
            class="items-center text-xl font-semibold tracking-tight text-white"
          >
            <nuxt-link to="/" class="flex">
              <svg
                class="w-8 h-8 mr-2 fill-current"
                enable-background="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="m420.35 133.783c-2.023-3.543-4.511-6.009-8.34-7.37l-111.02-40.41c.42-12.06-3.95-24.25-13.14-33.43-18.905-18.916-50.485-17.402-67.35 4.13l-110.85-40.34c-.01-.01-.02-.01-.02-.01-7.765-2.774-15.589 1.337-18.51 7.35l-70.25 139.5h33.59l50.13-99.56 50.74 99.56h33.67l-53.83-105.63 75.8 27.59c.311 19.272 12.623 35.58 30.03 41.74v291.34c0 8.28 6.72 15 15 15s15-6.72 15-15v-291.34c7.307-2.574 13.876-7.006 19.02-12.97l95.94 34.92-63.15 125.45h33.59l50.55-100.42 50.59 100.42h33.59zm-153.71-38.72c-5.87 5.87-15.41 5.87-21.28 0s-5.87-15.41 0-21.28 15.41-5.87 21.28 0c5.879 5.879 5.889 15.391 0 21.28z"
                  />
                  <path
                    d="m273.662 404.243h-35.323c-42.617 0-77.289 34.671-77.289 77.288 0 8.284 6.716 15 15 15h159.9c8.284 0 15-6.716 15-15 0-42.617-34.671-77.288-77.288-77.288z"
                  />
                  <path
                    d="m497 304.299h-180.05c-8.284 0-15 6.716-15 15 0 57.911 47.114 105.025 105.025 105.025s105.025-47.114 105.025-105.025c0-8.284-6.716-15-15-15z"
                  />
                  <path
                    d="m195.1 193.205h-180.1c-8.284 0-15 6.716-15 15 0 57.925 47.125 105.05 105.05 105.05s105.05-47.125 105.05-105.05c0-8.284-6.716-15-15-15z"
                  />
                </g>
              </svg>
              MuslimNews
            </nuxt-link>
          </span>
        </div>
        <div class="-my-2 -mr-2 sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-white transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            @click="isOpen = !isOpen"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden space-x-2 sm:flex">
          <nuxt-link
            to="/search"
            class="px-4 py-1 text-base font-medium leading-6 text-white transition duration-150 ease-in-out rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
          >
            Search
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="px-4 py-1 text-base font-medium leading-6 text-white transition duration-150 ease-in-out rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
          >
            About
          </nuxt-link>
          <nuxt-link
            to="/team"
            class="px-4 py-1 text-base font-medium leading-6 text-white transition duration-150 ease-in-out rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
          >
            Team
          </nuxt-link>
        </nav>
      </div>
    </div> -->

  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <!-- <div
      :class="isOpen ? 'block' : 'hidden'"
      class="absolute top-0 right-0 p-2 transition origin-top-right transform sm:hidden"
    >
      <div class="rounded-lg shadow-lg">
        <div class="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
          <div class="px-5 pt-5 pb-6 space-y-6">
            <div class="flex">
              <div>
                <nav class="grid row-gap-8 mr-8">
                  <nuxt-link
                    to="/search"
                    class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-200"
                    @click.native="isOpen = !isOpen"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      class="flex-shrink-0 w-6 h-6 text-indigo-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="text-base font-medium leading-6 text-gray-800">
                      Search
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="/about"
                    class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-200"
                    @click.native="isOpen = !isOpen"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      class="flex-shrink-0 w-6 h-6 text-indigo-400"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      ></path>
                    </svg>
                    <div class="text-base font-medium leading-6 text-gray-800">
                      About
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="/team"
                    class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-200"
                    @click.native="isOpen = !isOpen"
                  >
                    <svg
                      fill="currentColor"
                      class="flex-shrink-0 w-6 h-6 text-indigo-400"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                      ></path>
                    </svg>
                    <div class="text-base font-medium leading-6 text-gray-800">
                      Team
                    </div>
                  </nuxt-link>
                </nav>
              </div>
              <div class="-mt-2 -mr-2">
                <button
                  type="button"
                  class="p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  @click="isOpen = !isOpen"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  <!-- </header> -->
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isOpen: false,
    }
  },
})
</script>

<style scoped></style>
