<template>
  <div class="artist-container">
    <h2>Автор картин</h2>
    <div class="picture-info">
      <img :src="Artist" alt="Художник">
      <div class="artist-text">
        <h3>Козлов М.А.</h3>
        <p>Разнообразный и богатый опыт рамки и место обучения кадров требуют определения и уточнения форм
          развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей
          активности в значительной степени обуславливает создание систем массового участия.
          Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности влечет
          за собой процесс внедрения и модернизации направлений прогрессивного развития. Не следует, однако
          забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный
          эксперимент проверки существенных финансовых и административных условий. С другой стороны реализация
          намеченных плановых заданий позволяет оценить значение новых предложений.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutArtist"
}
</script>

<script setup>
import Artist from '@/assets/artist-frame.png'

</script>

<style scoped lang="sass">
.artist-container
  width: 100%
  padding: 50px 30px 0
  margin: 0 auto 50px
  box-sizing: border-box

  .picture-info
    display: flex
    align-items: center
    flex-direction: column

    img
      max-width: 45%

    .artist-text
      width: 80%

      p
        margin: 20px 0

    @media screen and (max-width: 767px)
      img
        max-width: 60%
      .artist-text
        width: 100%
</style>