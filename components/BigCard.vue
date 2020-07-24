<template>
  <main class="w-full lg:max-w-full">
    <div
      class="px-4 overflow-hidden text-left border-2 border-gray-100 rounded-lg shadow-lg"
    >
      <!-- TOPIC -->
      <a
        class="pt-2 text-2xl font-semibold text-gray-800 md:text-4xl hover:underline"
        :href="article.url"
        >{{ article.title }}</a
      >
      <h2 class="pb-4 text-sm text-left md:text-base">
        {{ article.author }}, {{ publishTime(article.publishedAt) }}
      </h2>
      <div class="relative bg-red-500" style="padding-bottom: 50%;">
        <img
          class="absolute object-cover w-full h-full rounded-lg"
          :src="article.urlToImage"
          :alt="article.description"
        />
      </div>
      <v-clamp class="pt-2 text-gray-700" autoresize :max-lines="2">{{
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

<script>
import VClamp from 'vue-clamp'

export default {
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
    publishTime(time) {
      return this.$dayjs().from(this.$dayjs(time))
    },
  },
}
</script>
