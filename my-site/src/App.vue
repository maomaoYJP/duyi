<template>
  <div>
    <h1>App组件</h1>
    <Pager :current="current" @pageChange="handlePageChange"></Pager>
  </div>
</template>
<script>
import Avatar from "./components/Avatar.vue";
import Pager from "./components/Pager.vue";
export default {
  components: { Avatar, Pager },
  name: "App",
  data() {
    return {
      current: 2,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>
<style scoped></style>
