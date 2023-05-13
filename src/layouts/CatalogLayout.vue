<template>
  <div class="catalog-layout">
    <the-navbar class="catalog-nav"/>

    <div class="catalog-content">
      <router-view></router-view>
    </div>

    <the-footer/>
  </div>
</template>

<script>
export default {
  name: "CatalogLayout"
}
</script>

<script setup>
import TheNavbar  from "@/components/TheNavbar.vue";
import TheFooter  from "@/components/TheFooter.vue";
</script>

<style scoped>
.catalog-layout {
  width: 80%;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.catalog-nav {
  border-bottom: 4px solid var(--seagreen);
}
</style>