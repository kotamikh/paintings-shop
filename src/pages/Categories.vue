<template>
  <div class="categories">
    <div class="on-sale"
         @click="router.push({ name: 'Catalog' })"
    >
        <h3>В наличии</h3>
    </div>
    <div class="on-order">
      <h3>Под заказ</h3>
    </div>
    <div class="sold">
      <h3>Распроданы</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaintingsCategories"
}
</script>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="sass">
.categories
  gap: 30px
  display: flex
  align-items: center
  justify-content: center

  width: 100%
  height: 100%
  flex-wrap: wrap
  padding: 60px 0
  margin-bottom: 30px
  box-sizing: border-box

  div
    width: 20%
    overflow: hidden
    min-width: 270px
    min-height: 270px
    aspect-ratio: 1 / 1
    border-radius: 10px

    cursor: pointer
    position: relative

    display: flex
    align-items: center
    justify-content: center

    &::before
      content: ''
      display: block
      top: 0
      left: 0
      width: 100%
      height: 100%
      position: absolute
      background: rgba(128, 128, 128, 0.5)
      opacity: 100%
      transition: opacity 0.2s ease-in-out

    &:hover::before
      opacity: 0

  .on-sale, .on-order, .sold
    background-size: cover

  .on-sale
    background-image: url("@/assets/meadow.jpg")

  .on-order
    background-image: url("@/assets/seedlings.jpg")

  .sold
    background-image: url("@/assets/mountains.jpg")

  h3
    z-index: 2
    color: white
    font-weight: 300
    text-shadow: 0 0 2px #000000
</style>