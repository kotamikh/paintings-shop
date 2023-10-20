<template>
  <div class="wrapper">
    <div class="paint-in-frame">
      <img :src="Frame" alt="Картина маслом"/>
    </div>
    <div class="main-text">
      <h1 class="homepage-header">Картины маслом | Киров</h1>
      <p>Сайт художника М. А. Козлова</p>
      <button @click="router.push({name: 'Catalog'})">Перейти к каталогу</button>
    </div>
  </div>
</template>

<script setup>
import Frame from "@/assets/frame.png"
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";

const router = useRouter();

useHead({
  title: "Картины маслом в Кирове",
  meta: [
    {
      name: "description",
      content: "Купить картину в Кирове. Картины маслом под заказ. Художник М.А.Козлов Киров."
    }
  ]
})
</script>

<style scoped lang="sass">
.wrapper
  margin: auto
  display: flex
  min-width: 90%
  height: 75vh
  user-select: none
  align-items: center
  justify-content: center

  @media screen and (max-width: 550px)
    flex-direction: column-reverse

  @media screen and (max-width: 374px)
    height: 90vh

  .paint-in-frame
    display: flex
    justify-content: center

    img
      width: 70%
      height: auto
      max-width: 100%
      transform: rotate(0deg)
      transform-origin: 48% 6%

      animation-delay: 4s
      animation-duration: 4s
      animation-name: paint-swing
      animation-iteration-count: infinite
      animation-timing-function: ease-in-out

  @keyframes paint-swing
    10%
      transform: rotate(5deg)
    25%
      transform: rotate(-4deg)
    40%
      transform: rotate(3deg)
    60%
      transform: rotate(-2deg)
    80%
      transform: rotate(0deg)

  .main-text
    display: flex
    margin: 0 20px
    min-width: 40%
    align-self: center
    align-items: start
    flex-direction: column

    @media screen and (max-width: 550px)
      margin-bottom: 20px

    button
      color: white
      cursor: pointer
      transition: all 0.1s ease-in-out
      background-color: var(--seagreen)

      border: 0
      margin: 20px 0
      align-self: center
      padding: 10px 20px
      border-radius: 7px

      height: auto
      max-width: 350px
      width: fit-content
      &:hover
        background-color: rgb(103, 121, 108)
      &:active
        transform: translateY(3px)
</style>