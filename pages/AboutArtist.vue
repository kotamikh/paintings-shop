<template>
  <section>
    <img :src="Artist" alt="Художник Козлов М. А."/>
    <div class="artist-text">
      <h1 class="header">Автор картин - Козлов М.А.</h1>
      <p>Художник родом из города Кирова (1973 г.р.). С детства увлекался рисованием, в юношестве вёл свой альбом карандашных рисунков.<br>
        Позднее художник стал интересоваться масляной живописью, и по сей день главным инструментом его творчества является масло. Основное внимание в своих работах автор уделяет красоте природы и считает, что ценность картины определяется её уникальностью.
      </p>
    </div>
  </section>
</template>

<script setup>
import Artist from '@/assets/artist-frame.png'
import { useHead } from "@vueuse/head";

useHead({
  title: "Автор картин | Картины маслом Киров",
  meta: [
    {
      name: "description",
      content: "Кировский художник Козлов М. А. Картины на заказ Киров."
    }
  ]
})
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

    @media screen and (max-width: 1099px)
      width: 35%
    @media screen and (max-width: 830px)
      width: 45%
    @media screen and (max-width: 650px)
      width: 55%
      margin-bottom: 60px
    @media screen and (max-width: 539px)
      width: 68%

  .artist-text
    margin: 20px 0

    .header
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