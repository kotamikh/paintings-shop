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

.main-content
  height: 60vh

  @media screen and (max-width: 800px)
    height: 80vh
    overflow-y: auto


.main-layout
  width: 80%
  margin: auto
  height: 100vh

  display: flex
  flex-direction: column
  justify-content: center


</style>