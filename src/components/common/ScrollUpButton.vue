<template>
  <button @click="toUp">
    <img :src="Arrow" alt="up-button"/>
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
  window.scroll(0, 0)
}
</script>

<style scoped lang="sass">
button
  right: 4%
  width: 10%
  bottom: 60px
  border: none
  position: fixed
  background-color: transparent

  opacity: 0

  transition: opacity 0.1s ease-in-out
  &:hover
    cursor: pointer
    animation: button-up 2s ease-in-out infinite
  @keyframes button-up
    25%
      transform: translateY(-15px)
    50%
      transform: translateY(0)
    75%
      transform: translateY(-15px)
    100%
      transform: translateY(0)


  @media screen and (max-width: 550px)
    right: 2%
    width: 15vw

  @media screen and (min-width: 840px)
    right: 5%
    width: 6%

</style>