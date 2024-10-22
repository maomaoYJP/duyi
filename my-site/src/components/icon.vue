<template>
  <i class="iconfont" :class="iconType"></i>
</template>

<script>
const iconMap = {
  arrowUp: "icon-jiantou-copy",
  arrowDown: "icon-jiantou",
};

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconType() {
      return iconMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/c/font_4720046_ehayhfeqmw9.css";
</style>
