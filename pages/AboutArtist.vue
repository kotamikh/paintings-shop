<template>
  <head>
    <title>Автор картин | Киров картины маслом</title>
    <meta name="description" content="Кировский художник Козлов М. А. Картины на заказ Киров."/>
  </head>
  <section>
    <img :src="Artist" alt="Художник Козлов М. А."/>
    <div class="artist-text">
      <h1 class="header">Автор картин - Козлов М.А.</h1>
      <p>Разнообразный и богатый опыт рамки и место обучения кадров требуют определения и уточнения форм
        развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей
        активности в значительной степени обуславливает создание систем массового участия.
        Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности влечет
        за собой процесс внедрения и модернизации направлений прогрессивного развития.
      </p>
    </div>
  </section>
</template>

<script setup>
import Artist from '@/assets/artist-frame.png'
</script>

<style scoped lang="sass">
section
  gap: 30px
  width: 80%
  margin: auto
  display: flex
  align-items: center
  box-sizing: border-box

  @media screen and (max-width: 1050px)
    width: 90%

  @media screen and (max-width: 650px)
    gap: 10px
    width: 85%
    flex-direction: column-reverse

  @media screen and (max-width: 374px)
    width: 100%
    padding: 50px 20px 0

  img
    width: 28%
    object-fit: contain

    @media screen and (max-width: 920px)
      width: 35%
    @media screen and (max-width: 700px)
      width: 40%
    @media screen and (max-width: 650px)
      width: 55%
      margin-bottom: 60px

  .artist-text
    margin: 20px 0

    .header
      text-wrap: none
      text-align: center
      color: var(--header-grey)

      @media screen and (max-width: 900px)
        &::before,
        &::after
          width: 5rem
          height: 8vh

      @media screen and (max-width: 830px)
        &::before,
        &::after
          display: none

    p
      margin-top: 20px
</style>