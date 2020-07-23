<template>
  <main class="w-full lg:max-w-full">
    <div
      class="text-left px-4 rounded-lg overflow-hidden border-2 border-gray-100 shadow-xl"
    >
      <div class="flex flex-row">
        <div class="w-1/4">
          <div class="w-20 md:w-32">
            <img
              class="pt-2 object-cover"
              :src="trending.urlToImage"
              :alt="trending.description"
            />
          </div>
        </div>
        <div class="w-3/4 pl-2 pt-2 lg:pl-16">
          <a
            class="pt-2 font-semibold text-base md:text-2xl lg:text-base hover:underline"
            :href="trending.url"
            >{{ trending.title }}</a
          >
        </div>
      </div>

      <!-- TOPIC -->

      <div class="flex justify-between py-2">
        <h2 class="inline-block text-sm md:text-base text-left">
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
  },
  methods: {
    publishTime(time: string) {
      return this.$dayjs().from(this.$dayjs(time))
    },
  },
})
</script>
