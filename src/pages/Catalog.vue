<template>
  <div class="paint-container">
    <h2>Все работы</h2>
    <painting-card
        v-for="(painting, index) in paintings"
        :key="index"
        :painting="painting"
    ></painting-card>
  </div>
</template>

<script>
export default {
  name: "Catalog"
}
</script>

<script setup>
import PaintingCard from "@/components/painting/PaintingCard.vue";
import { paintingsMocks } from "@/mocks/paintings.js";
import { ref } from "vue";

const paintings = ref(paintingsMocks);
</script>

<style scoped lang="sass">
.paint-container
  width: 100%
  display: flex
  margin: 0 auto 100px
  flex-direction: column
</style>