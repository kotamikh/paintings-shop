<template>
  <div class="main-layout">
    <the-navbar @nav-menu-opened="isOverflowHidden = true"/>

    <main>
      <router-view></router-view>
    </main>

    <the-footer/>
  </div>
</template>

<script setup>
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
import { ref } from "vue";

const isOverflowHidden = ref(false)
</script>

<style scoped lang="sass">
.main-layout
  width: 100%
  display: flex
  overflow-y: hidden
  flex-direction: column

  main
    display: flex
    min-height: 75vh
    flex-direction: column
</style>