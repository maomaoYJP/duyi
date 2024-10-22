<template>
  <div>
    <h1>App组件</h1>
    <Avatar :url="'https://picsum.photos/200/300'" :size="200"></Avatar>
    <Icon :type="'arrowDown'"></Icon>
  </div>
</template>
<script>
import Avatar from "./components/Avatar.vue";
import Icon from "./components/icon.vue";
export default {
  components: { Avatar, Icon },
  name: "App",
};
</script>
<style scoped>
.iconfont {
  color: red;
  font-size: 30px;
}
</style>
