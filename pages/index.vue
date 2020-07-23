<template>
  <main class="min-h-screen max-w-screen-xl justify-center text-center p-12">
    <!-- First section -->
    <section class="flex-row border-box overflow-y-hidden overflow-x-hidden">
      <!-- Categories for sm-->
      <a
        v-for="category in category.slice(0, 3)"
        :key="category"
        :href="category.link"
        class="inline-block md:hidden lg:hidden mx-2 mt-2 p-2 rounded-lg shadow-xl border-2 border-black font-semibold text-xl"
      >
        {{ category.name }}
      </a>
      <!-- Categories for md-->
      <a
        v-for="category in category.slice(0, 8)"
        :key="category"
        :href="category.link"
        class="hidden md:inline-block mx-2 mt-2 p-2 rounded-lg border-2 border-black font-medium lg:font-semibold lg:text-2xl"
      >
        {{ category.name }}
      </a>
    </section>
    <div class="lg:flex lg:flex-row">
      <div class="lg:w-8/12">
        <!-- Featured news -->
        <h1 class="font-semibold text-2xl md:text-4xl lg:text-left mt-4">
          FEATURED NEWS
        </h1>
        <div class="pt-4" v-for="article in article" :key="article.title">
          <BigCard :article="article" />
        </div>
        <!-- Categories for sm-->
      </div>
      <!-- Trending news -->
      <div class="lg:w-4/12 pl-12">
        <h1 class="mt-4 font-semibold text-2xl md:text-4xl">TRENDING TOPIC</h1>
        <div class="pt-4" v-for="trending in trending" :key="trending.title">
          <SmallCard :trending="trending" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import BigCard from '~/components/BigCard.vue'
import SmallCard from '~/components/SmallCard.vue'

export default Vue.extend({
  components: { BigCard },
  data: function () {
    return {
      article: [
        {
          source: {
            id: 'reuters',
            name: 'Reuters',
          },
          author: 'Rozanna Latiff',
          title:
            "Malaysia can't take any more Rohingya refugees, PM says - Reuters",
          description:
            'Malaysia can no longer take in Rohingya adadsa asdsa dasd adsadasd dasdas dasda das  Muslim refugees from Myanmar, Prime Minister Muhyiddin Yassin said on Friday, citing a struggling economy and dwindling resources as a result of the novel coronavirus pandemic.',
          url:
            'https://www.reuters.com/article/us-myanmar-rohingya-malaysia-idUSKBN23X19Y',
          urlToImage:
            'https://s2.reutersmedia.net/resources/r/?m=02&d=20200626&t=2&i=1523719120&w=1200&r=LYNXMPEG5P0R3',
          publishedAt: '2020-06-26T09:41:00Z',
          content:
            'KUALA LUMPUR (Reuters) - Malaysia can no longer take in Rohingya Muslim refugees from Myanmar, Prime Minister Muhyiddin Yassin said on Friday, citing a struggling economy and dwindling resources as a… [+2243 chars]',
        },
      ],
      trending: [
        {
          source: {
            id: 'reuters',
            name: 'Reuters',
          },
          author: 'Rozanna Latiff',
          title:
            "Malaysia can't take any more Rohingya refugees, PM says - Reuters",
          description:
            'Malaysia can no longer take in Rohingya adadsa asdsa dasd adsadasd dasdas dasda das  Muslim refugees from Myanmar, Prime Minister Muhyiddin Yassin said on Friday, citing a struggling economy and dwindling resources as a result of the novel coronavirus pandemic.',
          url:
            'https://www.reuters.com/article/us-myanmar-rohingya-malaysia-idUSKBN23X19Y',
          urlToImage:
            'https://s2.reutersmedia.net/resources/r/?m=02&d=20200626&t=2&i=1523719120&w=1200&r=LYNXMPEG5P0R3',
          publishedAt: '2020-06-26T09:41:00Z',
          content:
            'KUALA LUMPUR (Reuters) - Malaysia can no longer take in Rohingya Muslim refugees from Myanmar, Prime Minister Muhyiddin Yassin said on Friday, citing a struggling economy and dwindling resources as a… [+2243 chars]',
        },
        {
          source: {
            id: 'reuters',
            name: 'Reuters',
          },
          author: 'Rozanna Latiff',
          title:
            "Malaysia can't take any more Rohingya refugees, PM says - Reuters",
          description:
            'Malaysia can no longer take in Rohingya adadsa asdsa dasd adsadasd dasdas dasda das  Muslim refugees from Myanmar, Prime Minister Muhyiddin Yassin said on Friday, citing a struggling economy and dwindling resources as a result of the novel coronavirus pandemic.',
          url:
            'https://www.reuters.com/article/us-myanmar-rohingya-malaysia-idUSKBN23X19Y',
          urlToImage:
            'https://s2.reutersmedia.net/resources/r/?m=02&d=20200626&t=2&i=1523719120&w=1200&r=LYNXMPEG5P0R3',
          publishedAt: '2020-06-26T09:41:00Z',
          content:
            'KUALA LUMPUR (Reuters) - Malaysia can no longer take in Rohingya Muslim refugees from Myanmar, Prime Minister Muhyiddin Yassin said on Friday, citing a struggling economy and dwindling resources as a… [+2243 chars]',
        },
        {
          source: {
            id: 'reuters',
            name: 'Reuters',
          },
          author: 'Rozanna Latiff',
          title:
            "Malaysia can't take any more Rohingya refugees, PM says - Reuters",
          description:
            'Malaysia can no longer take in Rohingya adadsa asdsa dasd adsadasd dasdas dasda das  Muslim refugees from Myanmar, Prime Minister Muhyiddin Yassin said on Friday, citing a struggling economy and dwindling resources as a result of the novel coronavirus pandemic.',
          url:
            'https://www.reuters.com/article/us-myanmar-rohingya-malaysia-idUSKBN23X19Y',
          urlToImage:
            'https://s2.reutersmedia.net/resources/r/?m=02&d=20200626&t=2&i=1523719120&w=1200&r=LYNXMPEG5P0R3',
          publishedAt: '2020-06-26T09:41:00Z',
          content:
            'KUALA LUMPUR (Reuters) - Malaysia can no longer take in Rohingya Muslim refugees from Myanmar, Prime Minister Muhyiddin Yassin said on Friday, citing a struggling economy and dwindling resources as a… [+2243 chars]',
        },
      ],
      category: [
        { name: 'Canada', link: 'https://www.google.com' },
        { name: 'Finance', link: 'https://www.google.com' },
        { name: 'COVID', link: 'https://www.google.com' },
        { name: 'Android', link: 'https://www.google.com' },
      ],
    }
  },
})
</script>

<style scoped></style>
