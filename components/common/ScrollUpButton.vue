<template>
  <button class="up-btn" @click="toUp">
    <img :src="Arrow" alt="up-button"/>
    <span class="up-text">Наверх</span>
  </button>
</template>

<script setup>
import Arrow from "@/assets/arrow-up.png"

const toUp = function () {
  window.scrollTo(0, 0)
}
</script>

<style scoped lang="sass">
button.up-btn
  width: 12%
  right: 5px
  bottom: 60px

  border: none
  position: fixed
  background-color: transparent

  display: flex
  user-select: none
  align-items: center
  flex-direction: column

  opacity: 0
  visibility: hidden
  transition: all 0.1s ease-in-out

  &:hover
    cursor: pointer

  @media screen and (min-width: 480px)
    width: 10%
    right: 10px

  @media screen and (min-width: 700px)
    width: 8%
    right: 12px

  @media screen and (min-width: 840px)
    width: 6%
    right: 14px

  @media screen and (min-width: 1050px)
    width: 5%
    right: 30px
</style>