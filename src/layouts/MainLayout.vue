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

.main-layout {
  width: 100%;

  display: flex;
  flex-direction: column;
}

.main-content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  height: fit-content;
}
</style>