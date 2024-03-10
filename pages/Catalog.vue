<template>
  <head>
    <title>Все картины | Киров картины маслом</title>
    <meta name="description"
          content="Картины Киров. Купить картину маслом в Кирове. Каталог картин в наличии. Картины на холсте."/>
  </head>
  <archive v-if="showArchive"
           @back="showArchive = false"
  ></archive>
  <div class="paint-container" v-if="showArchive === false">
    <h1> Все картины </h1>
    <a class="archive-link"
       @click="openArchive"
    >Смотреть архив</a>
    <painting-card
        v-for="(painting, index) in paintings"
        :key="index"
        :painting="painting"
    >
    </painting-card>
    <ScrollUpButton :class="{ show : isShown }"/>
  </div>
</template>

<script setup>
import PaintingCard from "../components/painting/PaintingCard.vue";
import { paintingsMocks } from "@/mocks/paintings.js";
import { onUnmounted, ref } from "vue";
import ScrollUpButton from "../components/common/ScrollUpButton.vue";
import { useHead } from "@vueuse/head";
import router from "@/router/router.js";
import Archive from "./Archive.vue";

useHead({
  title: "Все картины | Картины маслом Киров",
  meta: [
    {
      name: "description",
      content: "Картины Киров. Купить картину маслом в Кирове. Каталог картин в наличии. Картины маслом на холсте."
    }
  ]
})
const paintings = ref(paintingsMocks)
const isShown = ref(false);
function showScroll() {
  if (window.scrollY > 300) {
    isShown.value = true
  }
  if (window.scrollY < 300) {
    isShown.value = false
  }
}
window.addEventListener('scroll', showScroll)

const showArchive = ref(false)
const openArchive = () => {
  showArchive.value = true
  router.push('paintings/archive')
}

onUnmounted(() => {
  window.removeEventListener('scroll', showScroll)
})
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
      margin-bottom: 10px

    @media screen and (max-width: 549px)
      padding-top: 0

    @media screen and (max-width: 400px)
      &::before,
      &::after
        display: none

  @media screen and (max-width: 374px)
    padding-top: 50px

  .show
    opacity: 70%
    visibility: visible

  .archive-link
    margin: 0 12vw
    text-align: end
    cursor: pointer

    &:hover
      text-decoration: underline
      text-underline-position: under
      text-decoration-color: var(--seagreen)

    @media screen and (max-width: 799px)
      margin-bottom: 10px
</style>
