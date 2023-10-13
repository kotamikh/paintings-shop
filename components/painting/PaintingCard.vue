<template>
  <div class="painting-card">
    <div class="painting-info">
      <div class="painting-title">
        <h3>{{ painting.title }}</h3>
        <span :class="`${painting.stock === 1 ? 'in-stock' : 'on-order'}`">{{ painting.stock === 1 ? 'В наличии' : 'Под заказ' }}</span>
      </div>
      <div class="paint-description">
        <p>{{ painting.materials}}</p>
          <p>Размер картины: {{ painting.width }} / {{ painting.height }} см.</p>
      </div>
      <div class="price-and-year">
        <div class="price-year-text">
          <p class="painting-price">{{ 'Цена: ' + painting.price + ' руб.' }}</p>
          <p class="painting-year">{{ painting.year + ' год' }}</p>
        </div>
      </div>
    </div>
    <div :class="[painting.width < painting.height ? 'vertical' : '']"
         class="painting-holder"
         @mouseover="isHidden = false"
         @mouseleave="isHidden = true"
    >
      <div class="enlarge-icon" @click="enlarged = true">
        <img src="../../src/assets/icons/enlarge.svg" alt="увеличить"/>
      </div>
      <img  class="paint-img" :src="painting.source" :alt="painting.title"/>
    </div>
    <enlarged-image v-model:show="enlarged"
                    :source="painting.source"
                    :title="painting.title"
                    @close="enlarged = false"
    />
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import EnlargedImage from "./EnlargedImage.vue";

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
    stock: {
      type: Number
    },
    source: {
      type: Object
    },
    materials: {
      type: String
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  }
})

const isHidden = ref(true)
const enlarged = ref(false)
</script>

<style scoped lang="sass">
.painting-card
  display: flex
  align-items: center
  justify-content: space-evenly

  width: 100%
  padding: 12px 0
  position: relative
  aspect-ratio: 4 / 1.5

  @media screen and (max-width: 800px)
    padding: 20px 0

  @media screen and (max-width: 600px)
    padding: 15px 0
    flex-direction: column

    &:first-of-type
      padding-top: 0

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

    @media screen and (max-width: 600px)
      height: 8%
      width: 100%

  &:last-of-type
    margin-bottom: 2%
    &::after
      content: ''
      width: 30%
      height: 15%
      bottom: -12%
      opacity: 0.5
      position: absolute
      background-size: contain
      background-position: center
      background-repeat: no-repeat
      background-image: url("@/assets/end-line.png")

      @media screen and (max-width: 767px)
        width: 70%
        height: 15%

  &:nth-child(odd)
    flex-direction: row-reverse

    @media screen and (max-width: 600px)
      flex-direction: column

    .painting-holder
      transform: rotate(-4deg)
      box-shadow: -4px -4px 10px 0 rgba(0, 0, 0, 0.3)

      @media screen and (max-width: 800px)
        transform: rotate(0)

.painting-info
  display: flex
  width: fit-content
  flex-direction: column

  @media screen and (max-width: 600px)
    max-width: fit-content

  .painting-title
    gap: 10px
    display: flex
    align-items: center

    span
      color: white
      padding: 0 8px
      border-radius: 5px
      font-size: calc(12px + 2 * (100vw / 1280))
      &.in-stock
        background-color: rgba(108, 140, 121, 0.9)
      &.on-order
        background-color: rgba(119, 119, 119, 0.9)

  .price-and-year
    display: flex
    position: relative
    max-width: fit-content
    justify-content: center

    margin: 30px
    padding: 20px 30px
    background: #ffffff
    box-sizing: border-box
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
  display: flex
  max-width: 40%
  max-height: 85%
  overflow: hidden
  align-items: center
  transform: rotate(4deg)
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.3)

  @media screen and (max-width: 800px)
    width: 70%
    transform: rotate(0)
  @media screen and (max-width: 600px)
    max-width: 100%
    margin-bottom: 3%
    .paint-img
      max-width: 100%

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