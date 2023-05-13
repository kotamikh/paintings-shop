<template>
  <div class="main-layout">
    <the-navbar/>

    <div class="main-content">
      <router-view></router-view>
    </div>

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
import TheFooter from "@/components/TheFooter.vue";
</script>

<style scoped>

.main-content {
  height: 60vh;
}

.main-layout {
  width: 80%;
  margin: auto;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>