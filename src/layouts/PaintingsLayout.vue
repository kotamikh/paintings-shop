<template>
  <div class="pages-layout">
  <the-navbar class="pages-nav"/>

  <the-wrapper>
    <router-view></router-view>
  </the-wrapper>

  <the-footer/>
  </div>
</template>

<script>
export default {
  name: "PagesLayout"
}
</script>

<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheWrapper from "@/components/TheWrapper.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<style scoped>
.pages-layout {
  width: 80%;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pages-nav {
  border-bottom: 4px solid var(--seagreen);
}
</style>