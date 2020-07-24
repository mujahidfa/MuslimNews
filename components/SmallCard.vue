<template>
  <main class="w-full lg:max-w-full">
    <div class="relative">
      <div
        class="text-left px-2 rounded-lg overflow-hidden border-2 border-gray-100 shadow-lg"
      >
        <div class="flex flex-row">
          <div class="inline-block mx-2 m-0">
            <h1
              class="text-left font-semibold text-4xl md:text-5xl text-gray-400"
            >
              {{ number }}
            </h1>
          </div>

          <div class="w-1/4">
            <div class="w-20 md:w-32 pt-4">
              <img
                class="object-cover"
                :src="trending.urlToImage"
                :alt="trending.description"
              />
            </div>
          </div>
          <div class="w-3/4 px-5 md:pl-2 pt-2 lg:pl-16">
            <a
              class="font-semibold text-base md:text-2xl lg:text-base hover:underline"
              :href="trending.url"
            >
              <v-clamp class="text-gray-700" autoresize :max-lines="4">{{
                trending.title
              }}</v-clamp></a
            >
          </div>
        </div>

        <!-- TOPIC -->

        <div class="flex justify-between py-2">
          <h2
            class="pl-8 md:pl-10 inline-block text-sm text-indigo-600 md:text-base text-left"
          >
            {{ publishTime(trending.publishedAt) }}
          </h2>

          <!-- <v-clamp class="pt-2" autoresize :max-lines="2">{{
        article.description
      }}</v-clamp> -->
          <!-- <h2 class="pt-2">
        Probe is expected to reach Mars in February, when it will attempt to
        deploy a rover to explore the planet for 90 days.
      </h2> -->
          <h3 class="inline-block text-sm text-right">
            Source: {{ trending.source.name }}
          </h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import VClamp from 'vue-clamp'

export default Vue.extend({
  components: {
    VClamp,
  },
  props: {
    trending: {
      type: Object,
      required: true,
    },
    number: Number,
  },
  methods: {
    publishTime(time: string) {
      return this.$dayjs().from(this.$dayjs(time))
    },
  },
})
</script>
