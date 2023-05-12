<template>
  <div class="content-box">
    <main-poster/>
  </div>
</template>

<script>
import MainPoster from "../components/MainPoster.vue";

export default {
  name: "HomePage",
  components: { MainPoster }
}
</script>

<style scoped>

.content-box {
  width: 100%;
  margin: auto;
}
</style>