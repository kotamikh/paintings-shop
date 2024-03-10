<template>
  <head>
    <title>Архив | Картины маслом Киров</title>
    <meta name="description"
          content="Картины Киров. Каталог картин на холсте."/>
  </head>
  <div class="paint-container">
    <h1> Архив </h1>
    <a class="back-link" @click="goBack">Назад</a>
    <div class="all-paintings">
      <div v-for="(painting, index) in archived"
           :key="index"
           class="painting-holder"
      >
        <div class="enlarge-icon" @click="doEnlarge(painting.source)">
          <img src="@/assets/icons/enlarge.svg" alt="увеличить"/>
        </div>
        <img class="paint-img" :src="painting.source" :alt="painting.title"/>
      </div>
      <enlarged-image v-model:show="enlarged"
                      :source="currentSource"
                      @close="enlarged = false"
      />
    </div>
    <ScrollUpButton :class="{ show : isShown }" />
  </div>
</template>

<script setup>
import { archievedPaintings } from "@/mocks/archieved.js";
import { onUnmounted, ref } from "vue";
import router from "@/router/router.js";
import EnlargedImage from "../components/painting/EnlargedImage.vue";
import ScrollUpButton from "../components/common/ScrollUpButton.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Архив | Картины маслом Киров",
  meta: [
    {
      name: "description",
      content: "Картины Киров. Каталог картин на холсте."
    }
  ]
})

const archived = ref(archievedPaintings)
const emit = defineEmits(['back'])
const goBack = () => {
  emit('back')
  router.back()
}

const enlarged = ref(false)
const currentSource = ref([])
const doEnlarge = (source) => {
  currentSource.value = source
  enlarged.value = true
}

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

onUnmounted(() => {
  window.removeEventListener('scroll', showScroll)
})
</script>

<style scoped lang="sass">
.paint-container
  width: 100%
  margin: 0 auto 100px
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

  .back-link
    margin: 0 10vw
    cursor: pointer
    position: relative

    &:hover
      text-decoration: underline
      text-underline-position: under
      text-decoration-color: var(--seagreen)

    &::before
      top: -5%
      left: -40%
      width: 0.9em
      position: absolute
      content: url("@/assets/icons/arrow.svg")

    @media screen and (max-width: 799px)
      margin-bottom: 10px

  .show
    opacity: 70%
    visibility: visible

.all-paintings
  width: 90vw
  display: grid
  margin: 0 auto
  grid-template-columns: repeat(3, 1fr)

  @media screen and (max-width: 799px)
    width: 100vw
    grid-template-columns: repeat(2, 1fr)

  @media screen and (max-width: 424px)
    grid-template-columns: 1fr

  .painting-holder
    margin: auto
    display: flex
    max-width: 90%
    max-height: 90%
    overflow: hidden
    position: relative
    align-items: center
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.3)

    @media screen and (max-width: 800px)
      width: 85%
    @media screen and (max-width: 600px)
      max-width: 70%

    &:hover
      .enlarge-icon
        opacity: 100%

    .enlarge-icon
      opacity: 0
      width: 100%
      height: 100%
      display: flex
      cursor: pointer
      position: absolute
      align-items: center
      justify-content: center
      transition: opacity 0.2s ease
      background-color: rgba(128, 128, 128, 0.5)

      img
        width: 18%
</style>
