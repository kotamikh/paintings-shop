<template>
  <div class="painting-card">
    <div class="painting-info">
      <div class="painting-title">
        <h3>{{ painting.title }}</h3>
      </div>
      <div class="paint-description">
        <p>Холст, масло. Размер картины: __/__</p>
      </div>
      <div class="price-and-year">
        <div class="price-year-text">
          <p class="painting-price">{{ 'Цена: ' + painting.price + ' руб.' }}</p>
          <p class="painting-year">{{ painting.year + ' год' }}</p>
        </div>
      </div>
    </div>
    <div class="painting-holder"
         @mouseover="isHidden = false"
         @mouseleave="isHidden = true"
    >
      <div v-if="!isHidden" class="favourite">
        <img v-if="!isHovered && !isFavourite" class="fav-icon" src="@/assets/heart-icon.svg"
             @mouseover="isHovered = true"
             alt="в избранное"
        >
        <img v-if="isHovered || isFavourite" class="fav-icon" src="@/assets/red-heart-icon.svg"
             @mouseover="isFavourite ? isHovered = false : isHovered"
             @mouseleave="isHovered = false"
             @click="isFavourite = !isFavourite"
             alt="из избранного"
        >
      </div>
      <img :src="painting.source" :alt="painting.title" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PaintingCard"
}
</script>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  painting: {
    id: {
      type: Number
    },
    title: {
      type: String
    },
    price: {
      type: Number
    },
    year: {
      type: Number
    },
    source: {
      type: Object
    }
  }
})

const isHidden = ref(true)
const isHovered = ref(false)
const isFavourite = ref(false)
</script>
<style scoped lang="sass">
.painting-card
  display: flex
  align-items: center
  justify-content: space-evenly

  width: 100%
  position: relative
  padding-bottom: 12px
  aspect-ratio: 4 / 1.5

  &::after
    content: ''
    width: 70%
    height: 10%
    bottom: -12px
    position: absolute
    background-size: contain
    background-position: center
    background-repeat: no-repeat
    background-image: url("@/assets/painting-bottom.png")

    @media screen and (max-width: 840px)
      height: 8%
      width: 100%

  &:last-of-type
    margin-bottom: 2%
    &::after
      content: ''
      width: 30%
      height: 15%
      bottom: -12%
      position: absolute
      background-size: contain
      background-position: center
      background-repeat: no-repeat
      background-image: url("@/assets/end-line.png")

      @media screen and (max-width: 767px)
        width: 50%
        height: 10%

  &:nth-child(odd)
    flex-direction: row-reverse

    @media screen and (max-width: 840px)
      flex-direction: column

    .painting-holder
      transform: rotate(-4deg)
      box-shadow: -4px -4px 10px 0 rgba(0, 0, 0, 0.3)

      @media screen and (max-width: 840px)
        transform: rotate(0)

  @media screen and (max-width: 840px)
    flex-direction: column

.painting-info
  display: flex
  max-width: 50%
  flex-direction: column

  @media screen and (max-width: 840px)
    max-width: 80%

  .painting-title
    display: flex
    align-items: center

  .price-and-year
    height: auto
    max-width: 90%
    position: relative

    display: flex
    justify-content: center

    margin: 30px
    padding: 20px 0
    background: #ff3333
    background: linear-gradient(135deg, transparent 15px, white 0), linear-gradient(-45deg, transparent 15px, white 0) bottom right
    background-size: 50% 100%
    background-repeat: no-repeat

    box-shadow: 0 30px 10px -30px rgba(0, 0, 0, 0.5)

    &::before
      content: ''
      width: 80px
      height: 20px

      top: -3px
      left: -40px
      position: absolute
      transform: rotate(-45deg)
      background-color: transparent
      box-shadow: 0 8px 10px -8px rgba(0, 0, 0, 0.5)

    .price-year-text
      &::after
        content: ''
        width: 80px
        height: 20px

        right: -38px
        bottom: -5px
        position: absolute
        transform: rotate(135deg)
        background-color: transparent
        box-shadow: 0 8px 10px -8px rgba(0, 0, 0, 0.5)

.painting-holder
  width: 40%

  overflow: hidden
  aspect-ratio: 3 / 2
  transform: rotate(4deg)
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.3)

  img
    object-fit: contain

  @media screen and (max-width: 840px)
    width: 70%
    margin: 10px 0
    transform: rotate(0)

.favourite
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  position: absolute
  background-color: rgba(128, 128, 128, 0.5)

  .fav-icon
    width: 25%
</style>