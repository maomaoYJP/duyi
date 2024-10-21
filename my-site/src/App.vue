<template>
  <div>
    <h1>App组件</h1>
    <Avatar :url="'https://picsum.photos/200/300'" :size="200"></Avatar>
  </div>
</template>
<script>
import Avatar from "./components/Avatar.vue";
export default {
  components: { Avatar },
  name: "App",
};
</script>
