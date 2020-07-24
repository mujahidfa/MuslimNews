<template>
  <ul
    class="flex flex-row justify-center space-x-1 text-xs select-none sm:text-base sm:space-x-3"
  >
    <!-- First button -->
    <li
      class="hidden p-3"
      :class="{
        'bg-gray-200 text-gray-500 rounded-lg': firstPageSelected() === true,
        'text-indigo-500 bg-indigo-100 hover:bg-indigo-200 hover:text-indigo-700 rounded-lg':
          firstPageSelected() === false,
      }"
    >
      <a
        :tabindex="firstPageSelected() ? -1 : 0"
        @click="selectFirstPage()"
        @keyup.enter="selectFirstPage()"
      >
        First
      </a>
    </li>
    <!-- <li class="" :class="[pageClass, firstPageSelected() ? disabledClass : '']">
      <a
        class="pageLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click="selectFirstPage()"
        @keyup.enter="selectFirstPage()"
      >
        First
      </a>
    </li> -->

    <!-- Prev button -->
    <li
      class="p-3"
      :class="{
        'bg-gray-200 rounded-lg text-gray-500': firstPageSelected() === true,
        'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 rounded-lg':
          firstPageSelected() === false,
      }"
    >
      <a
        class="prevLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click="prevPage()"
        @keyup.enter="prevPage()"
      >
        Prev
      </a>
    </li>
    <!-- <li
      v-if="!firstPageSelected()"
      :class="[prevClass, firstPageSelected() ? disabledClass : '']"
    >
      <a
        class="prevLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click="prevPage()"
        @keyup.enter="prevPage()"
      >
        Prev
      </a>
    </li> -->

    <!-- :class="{
        activeClass: page.selected,
        disabledClass: page.disabled,
        breakViewClass: page.breakView,
      }" -->
    <!-- Page numbers -->
    <li
      v-for="page in pages"
      :key="page.index"
      :class="{
        'text-gray-500 py-3 px-0': page.disabled === true,
        'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 rounded-lg p-3':
          page.selected === true,
        'text-indigo-700 hover:bg-indigo-200 rounded-lg p-3':
          page.selected === false,
        'text-gray-500 text-center py-3 px-0': page.breakView === true,
      }"
    >
      <a v-if="page.breakView" class="p-0" tabindex="0">
        ...
      </a>
      <a v-else-if="page.disabled" class="pageLinkClass" tabindex="0">
        {{ page.content }}
      </a>
      <a
        v-else
        tabindex="0"
        @click="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
        >{{ page.content }}</a
      >
    </li>
    <!-- <li
      v-for="page in pages"
      :key="page"
      :class="[
        pageClass,
        page.selected ? activeClass : '',
        page.disabled ? disabledClass : '',
        page.breakView ? breakViewClass : '',
      ]"
    >
      <a
        v-if="page.breakView"
        class="pageLinkClass, breakViewLinkClass"
        tabindex="0"
        ><slot name="breakViewContent">{{ breakViewText }}</slot></a
      >
      <a v-else-if="page.disabled" class="pageLinkClass" tabindex="0">
        {{ page.content }}
      </a>
      <a
        v-else
        class="pageLinkClass"
        :class="[page.selected ? activeClass : '']"
        tabindex="0"
        @click="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
        >{{ page.content }}</a
      >
    </li> -->

    <!-- Next button -->
    <li
      class="p-3"
      :class="{
        'bg-gray-200 rounded-lg text-gray-500': lastPageSelected() === true,
        'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 rounded-lg':
          lastPageSelected() === false,
      }"
    >
      <a
        :tabindex="lastPageSelected() ? -1 : 0"
        @click="nextPage()"
        @keyup.enter="nextPage()"
      >
        Next
      </a>
    </li>
    <!-- <li :class="[nextClass, lastPageSelected() ? disabledClass : '']">
      <a
        class="nextLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        @click="nextPage()"
        @keyup.enter="nextPage()"
      >
        Next
      </a>
    </li> -->

    <!-- Last button -->
    <li
      class="hidden p-3"
      :class="{
        'bg-gray-200 rounded-lg text-gray-500': lastPageSelected() === true,
        'text-indigo-500 bg-indigo-100 hover:bg-indigo-200 hover:text-indigo-700 rounded-lg':
          lastPageSelected() === false,
      }"
    >
      <a
        :tabindex="lastPageSelected() ? -1 : 0"
        @click="selectLastPage()"
        @keyup.enter="selectLastPage()"
      >
        Last
      </a>
    </li>
    <!-- <li :class="[pageClass, lastPageSelected() ? disabledClass : '']">
      <a
        class="pageLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        @click="selectLastPage()"
        @keyup.enter="selectLastPage()"
      >
        Last
      </a>
    </li> -->
  </ul>

  <!-- <div v-else class="containerClass">
    <a
      :class="[pageLinkClass, firstPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="selectFirstPage()"
      @keyup.enter="selectFirstPage()"
    >
      First
    </a>
    <a
      v-if="!(firstPageSelected() && hidePrevNext)"
      :class="[prevLinkClass, firstPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="prevPage()"
      @keyup.enter="prevPage()"
    >
      Prev
    </a>
    <template v-for="page in pages">
      <a
        v-if="page.breakView"
        :class="[
          pageLinkClass,
          breakViewLinkClass,
          page.disabled ? disabledClass : '',
        ]"
        tabindex="0"
        ><slot name="breakViewContent">{{ breakViewText }}</slot></a
      >
      <a
        v-else-if="page.disabled"
        :class="[
          pageLinkClass,
          page.selected ? activeClass : '',
          disabledClass,
        ]"
        tabindex="0"
        >{{ page.content }}</a
      >
      <a
        v-else
        :class="[pageLinkClass, page.selected ? activeClass : '']"
        tabindex="0"
        @click="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
        >{{ page.content }}</a
      >
    </template>
    <a
      v-if="!(lastPageSelected() && hidePrevNext)"
      :class="[nextLinkClass, lastPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="nextPage()"
      @keyup.enter="nextPage()"
    >
      Next
    </a>
    <a
      :class="[pageLinkClass, lastPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="selectLastPage()"
      @keyup.enter="selectLastPage()"
    >
      Last
    </a>
  </div> -->
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    forcePage: {
      type: Number,
    },
    clickHandler: {
      type: Function,
      default: () => {},
    },
    pageRange: {
      type: Number,
      default: 3,
    },
    marginPages: {
      type: Number,
      default: 1,
    },
    // containerClass: {
    //   type: String,
    // },
    // pageClass: {
    //   type: String,
    // },
    // pageLinkClass: {
    //   type: String,
    // },
    // prevClass: {
    //   type: String,
    // },
    // prevLinkClass: {
    //   type: String,
    // },
    // nextClass: {
    //   type: String,
    // },
    // nextLinkClass: {
    //   type: String,
    // },
    // breakViewClass: {
    //   type: String,
    // },
    // breakViewLinkClass: {
    //   type: String,
    // },
    // activeClass: {
    //   type: String,
    //   default: 'active',
    // },
    // disabledClass: {
    //   type: String,
    //   default: 'disabled',
    // },
    noLiSurround: {
      type: Boolean,
      default: false,
    },
    firstLastButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      innerValue: 1,
      // activeClass: 'text-green-700',
      // disabledClass: 'text-gray-400',
    }
  },
  computed: {
    selected: {
      get() {
        return this.value || this.innerValue
      },
      set(newValue) {
        this.innerValue = newValue
      },
    },
    pages() {
      const items = {}
      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          const page = {
            index,
            content: index + 1,
            selected: index === this.selected - 1,
          }
          items[index] = page
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2)

        const setPageItem = (index) => {
          const page = {
            index,
            content: index + 1,
            selected: index === this.selected - 1,
          }

          items[index] = page
        }

        const setBreakView = (index) => {
          const breakView = {
            disabled: true,
            breakView: true,
          }

          items[index] = breakView
        }

        // 1st - loop thru low end of margin pages
        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i)
        }

        // 2nd - loop thru selected range
        let selectedRangeLow = 0
        if (this.selected - halfPageRange > 0) {
          selectedRangeLow = this.selected - 1 - halfPageRange
        }

        let selectedRangeHigh = selectedRangeLow + this.pageRange - 1
        if (selectedRangeHigh >= this.pageCount) {
          selectedRangeHigh = this.pageCount - 1
          selectedRangeLow = selectedRangeHigh - this.pageRange + 1
        }

        for (
          let i = selectedRangeLow;
          i <= selectedRangeHigh && i <= this.pageCount - 1;
          i++
        ) {
          setPageItem(i)
        }

        // Check if there is breakView in the left of selected range
        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1)
        }

        // Check if there is breakView in the right of selected range
        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1)
        }

        // 3rd - loop thru high end of margin pages
        for (
          let i = this.pageCount - 1;
          i >= this.pageCount - this.marginPages;
          i--
        ) {
          setPageItem(i)
        }
      }
      return items
    },
  },
  beforeUpdate() {
    if (this.forcePage === undefined) return
    if (this.forcePage !== this.selected) {
      this.selected = this.forcePage
    }
  },
  methods: {
    handlePageSelected(selected) {
      if (this.selected === selected) return

      this.innerValue = selected
      this.$emit('input', selected)
      this.clickHandler(selected)
    },
    prevPage() {
      if (this.selected <= 1) return

      this.handlePageSelected(this.selected - 1)
    },
    nextPage() {
      if (this.selected >= this.pageCount) return

      this.handlePageSelected(this.selected + 1)
    },
    firstPageSelected() {
      return this.selected === 1
    },
    lastPageSelected() {
      return this.selected === this.pageCount || this.pageCount === 0
    },
    selectFirstPage() {
      if (this.selected <= 1) return

      this.handlePageSelected(1)
    },
    selectLastPage() {
      if (this.selected >= this.pageCount) return

      this.handlePageSelected(this.pageCount)
    },
  },
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
