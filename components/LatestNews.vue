<template>
  <main class="w-32 text-left md:w-48">
    <div class="">
      <a :href="trending.url">
        <img
          class="object-cover w-32 h-32 md:w-48 md:h-48"
          :src="trending.urlToImage"
          :alt="trending.description"
        />
      </a>
    </div>
    <h3 class="text-sm text-left text-indigo-600">
      {{ publishTime(trending.publishedAt) }}
    </h3>
    <a
      class="pt-2 text-xs font-semibold md:text-base hover:underline"
      :href="trending.url"
      ><v-clamp class="pt-2" autoresize :max-lines="2">{{
        trending.title
      }}</v-clamp></a
    >
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
  },
  methods: {
    publishTime(time) {
      return this.$dayjs().from(this.$dayjs(time))
    },
  },
}
</script>
