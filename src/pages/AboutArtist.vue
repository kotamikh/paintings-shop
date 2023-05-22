<template>
  <div class="artist-container">
    <h2>Автор картин</h2>
    <div class="picture-info">
      <figure>
         <img :src="Artist" alt="Художник">
        <figcaption>
          <strong>Козлов М.А.</strong>
        </figcaption>
      </figure>
      <div class="artist-text">
        <p>Повседневная практика показывает, что реализация намеченных плановых заданий
      обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.
      Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании
      систем массового участия.</p>
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
  padding: 0 30px
  margin: 0 auto  100px

  display: flex
  flex-direction: column
  box-sizing: border-box

  figure
    width: 25%

  .picture-info
    @media screen and (max-width: 767px)
      display: flex
      align-items: center
      flex-direction: column

    figure
      width: 30%
      float: left
      padding: 0 20px 20px 0

      @media screen and (max-width: 767px)
        width: 80%
        padding: 0
        max-width: 350px

      figcaption
        font-size: calc(16px + 6 * (100vw / 1280))

      img
        max-width: 100%
        height: auto
        //max-width: 600px

  .artist-text
    p
      margin: 20px 0

</style>