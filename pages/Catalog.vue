<template>
  <head>
    <title>Все картины | Киров картины маслом</title>
    <meta name="description" content="Картины Киров. Купить картину маслом в Кирове. Каталог картин в наличии. Картины на холсте."/>
  </head>
  <div class="paint-container">
    <h1> Все картины </h1>
    <painting-card
        v-for="(painting, index) in paintings"
        :key="index"
        :painting="painting"
    >
    </painting-card>
    <ScrollUpButton :class="{ show : isShown }" />
  </div>
</template>

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

  h1
    padding-top: 20px

    @media screen and (max-width: 840px)
      margin-bottom: 20px

    @media screen and (max-width: 400px)
      &::before,
      &::after
        display: none

  @media screen and (max-width: 374px)
    padding-top: 50px

  .show
    opacity: 70%
    visibility: visible
</style>