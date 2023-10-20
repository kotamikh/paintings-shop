<template>
  <footer>
    <div class="telephone">
      <p>Телефон:</p>
      <a href='tel:+79229519244'>+7(922)-951-92-44</a>
    </div>
    <div class="messengers">
      <p>Написать:</p>
      <a class="link" href="https://wa.me/79229519244" target="_blank" rel="noopener, nofollow">
        <img src="../src/assets/icons/whatsapp.svg" style="width: 23px" alt="whatsapp"/>
        <p>WhatsApp</p>
      </a>
    </div>
  </footer>
</template>

<style scoped lang="sass">
footer
  gap: 3vw
  display: flex
  align-items: center
  justify-content: space-evenly

  bottom: 0
  z-index: 3
  position: absolute

  width: 100%
  padding: 20px

  @media screen and (max-width: 767px)
    padding: 20px 0
  @media screen and (max-width: 295px)
    flex-direction: column
    align-items: start
    margin: 40px 0 10px 20px
    padding: 0
  .messengers,
  .telephone
    gap: 15px
    display: flex
    align-items: center
    @media screen and (max-width: 767px)
      gap: 10px
    a
      &:hover
        color: var(--seagreen)

    .link
      gap: 8px
      display: flex
      align-items: center

      @media screen and (max-width: 550px)
        p
          display: none
        img
          width: 20px
</style>