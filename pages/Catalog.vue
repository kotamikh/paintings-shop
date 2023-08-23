<template>
  <div class="paint-container">
    <h2> Картины в наличии </h2>
    <painting-card
        v-for="(painting, index) in paintings"
        :key="index"
        :painting="painting"
    >
    </painting-card>
    <ScrollUpButton :class="{ show : isShown }"/>
  </div>
</template>

<script>
export default {
  name: "Catalog"
}
</script>

<script setup>
import PaintingCard from "../components/painting/PaintingCard.vue";
import { paintingsMocks } from "@/mocks/paintings.js";
import { ref } from "vue";
import ScrollUpButton from "../components/common/ScrollUpButton.vue";

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
  margin: 0 auto 100px
  flex-direction: column
  scroll-behavior: smooth

  @media screen and (max-width: 400px)
    padding-top: 20px

    h2
      margin-bottom: 20px
      &::before,
      &::after
        display: none

  @media screen and (max-width: 374px)
    padding-top: 50px

  .show
    opacity: 70%
</style>