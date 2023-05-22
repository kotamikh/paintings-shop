<template>
  <div class="painting-card">
    <div class="painting-info">
      <div class="painting-title">
        <h3>{{ painting.title }}</h3>
        <button class="fav-button">
          <span class="hint-text">В избранное</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 18 18">
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
          </svg>
        </button>
      </div>
      <div class="paint-description">
        <p>Холст, масло. Размер картины: __/__</p>
      </div>
      <div class="price-and-year">
        <div class="price-year-text">
          <p class="painting-price">{{ 'Цена: ' + painting.price + ' руб.'}}</p>
          <p class="painting-year">{{ painting.year + ' год'}}</p>
        </div>
      </div>
    </div>
    <div class="painting-holder">
      <img :src="painting.source" :alt="painting.title"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaintingCard"
}
</script>

<script setup>
import { defineProps } from 'vue'

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

</script>
<style scoped lang="sass">

.painting-card
  display: flex
  align-items: center
  justify-content: space-evenly

  width: 100%
  padding: 10px 0
  aspect-ratio: 4 / 1.5
  background-color: var(--background-grey)
  border-bottom: 1px dotted rgba(108, 140, 121, 0.5)

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
    background-color: white
    background-repeat: no-repeat
    box-shadow: 0 20px 10px -20px rgba(0, 0, 0, 0.5)

    &::before
      content: ''
      width: 80px
      height: 20px

      top: -10px
      left: -42px
      position: absolute
      transform: rotate(-45deg)
      background-color: var(--background-grey)
      box-shadow: 0 8px 10px -8px rgba(0, 0, 0, 0.5)

    .price-year-text
      &::after
        content: ''
        width: 80px
        height: 20px

        right: -42px
        bottom: -10px
        position: absolute
        transform: rotate(135deg)
        background-color: var(--background-grey)
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

button
  width: 40px
  height: inherit
  display: flex
  align-items: center
  justify-content: center

  border: none
  cursor: pointer
  position: relative
  background-color: transparent


  .hint-text
    width: 120px
    padding: 5px 0
    text-align: center
    border-radius: 6px

    bottom: 0
    left: 100%
    z-index: 1
    position: absolute

    opacity: 0
    color: white
    visibility: hidden
    background-color: #555
    transition: opacity 0.3s

    &::after
      content: ""

      top: 50%
      left: 0
      position: absolute

      margin-left: -5px
      border-width: 5px
      border-style: solid
      border-color: #555 transparent transparent transparent

  &:hover
    .hint-text
      opacity: 1
      visibility: visible

.fav-button
  svg
    fill: white
    stroke: black

  &:hover
    svg
      fill: mistyrose
      stroke: #f58b82
</style>