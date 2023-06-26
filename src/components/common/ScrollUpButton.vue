<template>
  <button class="up-btn" @click="toUp">
    <img :src="Arrow" alt="up-button"/>
    <span class="up-text">Наверх</span>
  </button>
</template>

<script>
export default {
  name: "ScrollUpButton"
}
</script>
<script setup>
import Arrow from "@/assets/arrow-up.png"

const toUp = function () {
  window.scrollTo(0, 0)
}
</script>

<style scoped lang="sass">
button.up-btn
  width: 8%
  right: 24px
  bottom: 60px

  border: none
  position: fixed
  background-color: transparent

  display: flex
  align-items: center
  flex-direction: column

  opacity: 0
  transition: opacity 0.1s ease-in-out

  &:hover
    cursor: pointer

  @media screen and (max-width: 650px)
    width: 10%
    right: 16px

  @media screen and (min-width: 840px)
    width: 5%
    right: 36px
</style>