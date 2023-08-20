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

<style scoped lang="sass">
.main-layout
  width: 100%
  display: flex
  flex-direction: column

  .main-content
    display: flex
    min-height: 75vh
    flex-direction: column
    //justify-content: center
</style>