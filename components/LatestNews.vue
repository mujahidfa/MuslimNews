<template>
  <main class="w-32 md:w-48 text-left">
    <div class="">
      <a :href="trending.url">
        <img
          class="w-32 h-32 md:w-48 md:h-48 object-cover"
          :src="trending.urlToImage"
          :alt="trending.description"
        />
      </a>
    </div>
    <h3 class="text-left text-sm text-indigo-600">
      {{ publishTime(trending.publishedAt) }}
    </h3>
    <a
      class="pt-2 font-semibold text-xs md:text-base hover:underline"
      :href="trending.url"
      ><v-clamp class="pt-2" autoresize :max-lines="2">{{
        trending.title
      }}</v-clamp></a
    >
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
