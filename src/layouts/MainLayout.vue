<template>
  <div class="main-layout">
  <the-navbar/>

  <the-wrapper>
    <router-view></router-view>
  </the-wrapper>

  <the-footer/>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheWrapper from "@/components/TheWrapper.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<style scoped>

.main-layout {
  width: 80%;
  margin: auto;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>