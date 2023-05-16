<template>
  <div class="paint-container">
    <h2>Все работы</h2>
    <painting-card
        v-for="(painting, index) in paintings"
        :key="index"
        :painting="painting"
    ></painting-card>
  </div>
</template>

<script>
export default {
  name: "Catalog"
}
</script>

<script setup>
import PaintingCard from "@/components/painting/PaintingCard.vue";
import { paintingsMocks } from "@/mocks/paintings.js";
import { ref } from "vue";

const paintings = ref(paintingsMocks);
</script>

<style lang="sass">

.paint-container
  width: 80%
  display: flex
  margin: 0 auto 100px
  flex-direction: column

  @media screen and (max-width: 425px)
    width: 100%

  h2
    font-size: calc(18px + 12 * (100vw / 1280))

    painting-card
      &:nth-child(even)
        flex-direction: row-reverse

      .paint-image-part
        .paint-image
          transform: rotate(-3deg)

    .paint-info-part
      width: 50%

      padding: 0 10%
      box-sizing: border-box

      gap: 20px
      display: flex
      text-align: center
      align-items: center
      flex-direction: column
      justify-content: center

      .paint-name
        color: #461D1D
        font-size: 48px
        font-weight: bold

      .paint-description
        color: #686868
        font-size: 14px
        font-weight: bold

      .paint-price
        color: #373737
        font-size: 16px
        font-weight: bold

    .paint-image-part
      width: 50%

      display: flex
      align-items: center
      justify-content: center

      .paint-image
        height: 400px
        width: auto
        transform: rotate(3deg)
        box-shadow: -10px 10px 0px 0px rgba(34, 60, 80, 0.2)

</style>