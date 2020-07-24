<template>
  <main class="w-full lg:max-w-full">
    <div
      class="text-left px-4 rounded-lg overflow-hidden border-2 border-gray-100 shadow-lg"
    >
      <!-- TOPIC -->
      <a
        class="pt-2 font-semibold text-gray-800 text-2xl md:text-4xl hover:underline"
        :href="article.url"
        >{{ article.title }}</a
      >
      <h2 class="pb-4 text-sm md:text-base text-left">
        {{ article.author }}, {{ publishTime(article.publishedAt) }}
      </h2>
      <div class="relative bg-red-500" style="padding-bottom: 50%;">
        <img
          class="rounded-lg absolute h-full w-full object-cover"
          :src="article.urlToImage"
          :alt="article.description"
        />
      </div>
      <v-clamp class="text-gray-700 pt-2" autoresize :max-lines="2">{{
        article.description
      }}</v-clamp>
      <!-- <h2 class="pt-2">
        Probe is expected to reach Mars in February, when it will attempt to
        deploy a rover to explore the planet for 90 days.
      </h2> -->
      <h3 class="pt-2 text-sm text-right">Source: {{ article.source.name }}</h3>
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
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    publishTime(time: string) {
      return this.$dayjs().from(this.$dayjs(time))
    },
  },
})
</script>
