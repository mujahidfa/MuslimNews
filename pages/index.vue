<template>
  <main class="min-h-screen max-w-screen-xl justify-center text-center p-12">
    <!-- First section -->
    <h1 class="lg:text-left font-semibold text-2xl text-gray-800">
      Trending categories
    </h1>
    <section
      class="lg:text-left flex flex-row border-box overflow-x-auto text-gray-800"
    >
      <!-- Categories for sm-->
      <a
        v-for="category in category.slice(0, 8)"
        :key="category"
        :href="category.link"
        class="inline-block md:hidden lg:hidden mx-2 mt-2 p-2 rounded-lg shadow-xl border-2 border-indigo-600 font-semibold text-xl"
      >
        {{ category.name }}
      </a>
      <!-- Categories for md-->
      <a
        v-for="category in category.slice(0, 8)"
        :key="category"
        :href="category.link"
        class="hidden md:inline-block mx-2 mt-2 p-2 rounded-lg border-2 border-indigo-600 font-medium lg:font-semibold lg:text-2xl"
      >
        {{ category.name }}
      </a>
    </section>
    <div class="lg:flex lg:flex-row">
      <div class="lg:w-8/12">
        <!-- Featured news -->
        <h1
          class="font-semibold text-2xl md:text-4xl lg:text-left mt-4 text-gray-800"
        >
          FEATURED NEWS
        </h1>
        <div class="pt-4" v-for="article in article" :key="article.title">
          <BigCard :article="article" />
        </div>
        <!-- Categories for sm-->
      </div>
      <!-- Trending news -->
      <div class="lg:w-4/12 lg:ml-12">
        <h1 class="mt-4 font-semibold text-2xl md:text-4xl">TRENDING TOPIC</h1>
        <div v-for="trending in trending" :key="trending.title">
          <div v-for="number in trending.number" :key="trending.number">
            <SmallCard class="pt-4" :trending="trending" :number="number" />
          </div>
        </div>
      </div>
    </div>
    <div class="inline-block text-center mt-12 max-w-full">
      <h1 class="text-2xl md:text-4xl font-semibold">LATEST NEWS</h1>
      <div class="flex flex-row overflow-x-auto">
        <div
          class="mt-4 mx-2 md:mx-4 lg:mx-8"
          v-for="trending in trending.slice(0, 8)"
          :key="trending.title"
        >
          <LatestNews :trending="trending" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import BigCard from '~/components/BigCard.vue'
import SmallCard from '~/components/SmallCard.vue'
import LatestNews from '~/components/LatestNews.vue'

export default Vue.extend({
  components: { BigCard, SmallCard, LatestNews },
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
          number: 4,
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

<style scoped>
::-webkit-scrollbar {
  width: 12px;
  height: 6px;
}
::-webkit-scrollbar-track {
  border: 1px solid white;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgb(235, 235, 235);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #bbbbbb;
}
</style>
