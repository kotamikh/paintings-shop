<template>
  <div class="contacts-container">
    <div class="contacts">
      <h3>Контакты</h3>
      <p class="telephone">Телефон: +7(922)-951-92-44</p>
      <div class="social-networks">
        <p>Соцсети:</p>
        <div class="buttons">
          <button>
            <a href="https://m.vk.com/m.kozlov73">
              <img src="../src/assets/icons/icon-vk.png" alt="vk"/>
              Вконтакте
            </a>
          </button>
          <button>
            <a href="https://wa.me/79229519244">
              <img src="../src/assets/icons/icon-whatsapp.png" alt="whatsapp"/>
              WhatsApp
            </a>
          </button>
        </div>
      </div>
    </div>
    <div class="application">
      <h3>Получить обратную связь</h3>
      <div class="form-item">
        <p>Ваше имя:</p>
        <input type="text">
      </div>
      <div class="form-item">
        <p>Номер телефона:</p>
        <input type="tel">
      </div>
      <button>Написать сообщение</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts"
}
</script>

<style scoped lang="sass">
.contacts-container
  width: 80%
  margin: auto
  display: flex
  padding-top: 60px
  justify-content: space-evenly

  .contacts,
  .application
    gap: 20px
    display: flex
    flex-direction: column

    @media screen and (max-width: 620px)
      align-items: center

    h3
      align-self: flex-start
      color: var(--header-grey)

  .social-networks
    gap: 10px
    display: flex

    .buttons
      gap: 10px
      display: flex
      flex-direction: column

      button
        border: none
        border-radius: 5px
        height: fit-content
        background-color: transparent

        &:hover
          &:first-child
            background-color: rgba(30, 136, 199, 0.4)

          &:nth-child(2)
            background-color: rgba(57, 174, 35, 0.4)

      a
        gap: 10px
        color: black
        display: flex
        text-decoration: none

        img
          margin: auto

  .application
    input
      border: 0
      width: 100%
      padding: 10px
      border-radius: 10px
      background-color: rgba(108, 140, 121, 0.5)

      @media screen and (max-width: 620px)
        width: 100%

    button
      padding: 0 10px
      cursor: pointer
      width: fit-content
      border-radius: 5px
      border: 1px solid var(--seagreen)
      font-size: calc(14px + 4 * (100vw / 1280))
      &:hover
        box-shadow: 0 0 25px 5px rgba(34, 60, 80, 0.2)

  @media screen and (max-width: 850px)
    width: 100%

  @media screen and (max-width: 620px)
    gap: 30px
    width: 80%
    flex-direction: column
</style>