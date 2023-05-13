<template>
  <h2>Все работы</h2>
  <div class="paint-container">
    <div v-for="_ in 10" class="paint-block">
      <div class="paint-info-part">
        <div class="paint-name">
          Кин дза дза
        </div>
        <div class="paint-description">
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
          несколько абзацев более менее осмысленного текста рыбы на русском языке,
          а начинающему оратору отточить навык публичных выступлений в домашних условиях.
        </div>
        <div class="paint-price">
          12 000 руб
        </div>
      </div>
      <div class="paint-image-part">
        <img class="paint-image" src="@/assets/test.jpeg" alt="kin-dza-dza"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog"
}
</script>

<script setup>
</script>

<style scoped lang="sass">
.paint-container
  gap: 40px
  display: flex
  flex-direction: column
  background-color: #F6F6F6

  .paint-block
    padding: 50px 0
    display: flex

    &:nth-child(even)
      flex-direction: row-reverse

      .paint-image-part
        .paint-image
          transform: rotate(-3deg)

    .paint-info-part
      width: 50%

      padding: 0 10%
      box-sizing: border-box

      text-align: center

      gap: 20px
      display: flex
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
        box-shadow: -10px 10px 0px 0px rgba(34, 60, 80, 0.2)

        transform: rotate(3deg)
</style>