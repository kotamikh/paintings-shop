<template>
  <div class="footer">
    <div class="telephone">
      <p>Телефон: +7(922)-951-92-44</p>
    </div>
    <div class="messengers">
      <p>Написать:</p>
      <a class="link" href="https://m.vk.com/m.kozlov73">
        <img src="../src/assets/icons/vk.svg" style="width: 25px" alt="vk"/>
        <p>Вконтакте</p>
      </a>
      <a class="link" href="https://wa.me/79229519244">
        <img src="../src/assets/icons/whatsapp.svg" style="width: 23px" alt="whatsapp"/>
        <p>WhatsApp</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="sass">
.footer
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
    padding: 0 10px 20px

  .messengers
    gap: 10px
    display: flex
    align-items: center
    @media screen and (max-width: 767px)
      gap: 5px

    .link
      gap: 8px
      color: black
      display: flex
      margin-right: 10px
      align-items: center
      text-decoration: none
      font-size: calc(12px + 6 * (100vw / 1280))

      &:hover
        &:first-of-type
          color: rgb(30, 136, 229)
        &:last-of-type
          color: rgb(57, 174, 65)

      @media screen and (max-width: 767px)
        p
          display: none
        img
          width: 20px

  p
    font-size: calc(12px + 6 * (100vw / 1280))
</style>