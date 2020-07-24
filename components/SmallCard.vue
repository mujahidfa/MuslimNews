<template>
  <main class="w-full lg:max-w-full">
    <div class="relative">
      <div
        class="px-2 overflow-hidden text-left border-2 border-gray-100 rounded-lg shadow-lg"
      >
        <div class="flex flex-row">
          <div class="inline-block m-0 mx-2">
            <h1
              class="text-4xl font-semibold text-left text-gray-400 md:text-5xl"
            >
              {{ number }}
            </h1>
          </div>

          <div class="w-1/4">
            <div class="w-20 pt-4 md:w-32">
              <img
                class="object-cover"
                :src="trending.urlToImage"
                :alt="trending.description"
              />
            </div>
          </div>
          <div class="w-3/4 px-5 pt-2 md:pl-2 lg:pl-16">
            <a
              class="text-base font-semibold md:text-2xl lg:text-base hover:underline"
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
            class="inline-block pl-8 text-sm text-left text-indigo-600 md:pl-10 md:text-base"
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

<script>
import VClamp from 'vue-clamp'

export default {
  components: {
    VClamp,
  },
  props: {
    trending: {
      type: Object,
      required: true,
    },
    number: {
      type: Number,
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
