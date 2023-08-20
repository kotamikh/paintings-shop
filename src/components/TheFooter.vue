<template>
  <div class="footer">
    <div class="telephone">
      <p>Телефон: +7(922)-951-92-44</p>
    </div>
    <div class="messengers">
      <p>Написать:</p>
      <div class="links">
        <a class="link" href="https://m.vk.com/m.kozlov73">
          <img src="@/assets/icons/icon-vk.png" alt="vk"/>
          <p>Вконтакте</p>
        </a>
        <a class="link" href="https://wa.me/79229519244">
          <img src="@/assets/icons/icon-whatsapp.png" alt="whatsapp"/>
          <p>WhatsApp</p>
        </a>
      </div>
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
  justify-content: center

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
    .link
      gap: 10px
      color: black
      display: flex
      margin-right: 10px
      text-decoration: none
      font-size: calc(10px + 6 * (100vw / 1280))
      &:hover
        &:first-child
          color: rgb(30, 136, 229)
        &:nth-child(2)
          color: rgb(57, 174, 65)

  p
    font-size: calc(10px + 6 * (100vw / 1280))
</style>