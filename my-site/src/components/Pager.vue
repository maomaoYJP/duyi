<template>
  <div class="pager-container" v-if="totalPageNumber >= 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      v-for="(n, i) in visibleNumers"
      @click="handleClick(n)"
      :key="i"
      :class="{ active: current === n }"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === totalPageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(totalPageNumber)"
      :class="{ disabled: current === totalPageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 110,
    },
    current: {
      type: Number,
      default: 8,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    totalPageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleNumers() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) min = 1;
      let max = min + this.visibleNumber - 1;
      if (max > this.totalPageNumber) max = this.totalPageNumber;
      let nums = [];
      for (let i = min; i <= max; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) newPage = 1;
      if (newPage > this.totalPageNumber) newPage = this.totalPageNumber;
      if (newPage === this.current) return;
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/styles/var.less";

.pager-container {
  text-align: center;
  a {
    color: @primary;
    margin: 0 12px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
    }
  }
}
</style>
