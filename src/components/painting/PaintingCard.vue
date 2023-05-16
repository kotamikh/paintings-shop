<template>
  <div class="painting-card">
    <div class="painting-info">
      <div class="painting-title">
        <h3>{{ painting.title }}</h3>
        <button class="fav-button">
          <span class="hint-text">В избранное</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
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
  width: 45%
  overflow: hidden
  aspect-ratio: 3 / 2
  transform: rotate(4deg)
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.3)

  img
    object-fit: cover

  @media screen and (max-width: 840px)
    width: 70%
    margin: 10px 0
    transform: rotate(0)

button
  display: flex
  align-items: center
  flex-direction: row
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
      fill: red
      stroke: red
</style>