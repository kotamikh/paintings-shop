<template>
  <div class="content-box">
    <the-navbar/>
    <main-poster/>
    <the-footer/>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
import MainPoster from "../components/MainPoster.vue";

export default {
  name: "HomePage",
  components: { MainPoster, TheFooter, TheNavbar }
}
</script>

<style scoped>
home-page {
  overflow: hidden;
}

.content-box {
  width: 80%;
  margin: auto;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>