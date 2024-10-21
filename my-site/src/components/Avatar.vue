<template>
  <img
    class="img"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "50",
    },
  },
};
</script>

<style scoped>
.img {
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
</style>
