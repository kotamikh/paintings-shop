<template>
  <h2>Автор картин</h2>
  <div class="artist-info">
    <figure>
      <img :src="Artist" alt="Художник">
      <figcaption>
        <strong>Баранов А.А.</strong>
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
      за собой процесс внедрения и модернизации направлений прогрессивного развития.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutArtist"
}
</script>

<script setup>
import Artist from '@/assets/artist.jpeg'

</script>

<style scoped lang="sass">

h2
  //border-top: 4px solid var(--seagreen)
  width: 75%
  position: absolute

  @media screen and (max-width: 1200px)
    padding: 10px 20px
    background-color: white


.artist-info
  display: flex
  height: inherit
  align-items: center
  justify-content: center

  @media screen and (max-width: 550px)
    padding-top: 70px
    flex-direction: column

  img
    max-height: 300px

    @media screen and (max-width: 550px)
      height: 200px
      width: auto


.artist-text
  p
    margin-bottom: 20px

</style>