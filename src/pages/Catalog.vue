<template>
  <div class="paint-container">
    <h2>Все работы</h2>
    <painting-card
        v-for="(painting, index) in paintings"
        :key="index"
        :painting="painting"
    ></painting-card>
    <ScrollUpButton :class="{ show : isShown }"/>
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
import ScrollUpButton from "@/components/common/ScrollUpButton.vue";

const paintings = ref(paintingsMocks);
const isShown = ref(false);

window.addEventListener('scroll', function() {
  if (window.scrollY > 300 ) {
    showButton()
  }
  if (window.scrollY < 300) {
    isShown.value = false
  }
})

const showButton = () => {
  isShown.value = true
}
</script>

<style scoped lang="sass">
.paint-container
  width: 100%
  display: flex
  position: relative
  margin: 0 auto 100px
  flex-direction: column

  .show
    opacity: 100%
</style>