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
      padding: 10px 0
      background-color: transparent
      border-bottom: 2px solid rgba(128, 128, 128, 0.5)

      &:focus,
      &:hover
        outline: none
        border-bottom: 2px solid var(--nav-hover)

      @media screen and (max-width: 620px)
        width: 100%

    button
      color: white
      cursor: pointer
      text-wrap: none
      background-color: grey
      transition: all 0.1s ease-in-out
      box-shadow: 0 0 10px 5px rgba(119, 119, 119, 0.5)

      border: 0
      padding: 5px 10px
      border-radius: 5px

      height: auto
      max-width: 350px
      width: fit-content

      @media screen and (max-width: 620px)
        align-self: center

      &:hover
        background-color: var(--seagreen)
      &:active
        transform: translateY(3px)
        box-shadow: 0 0 10px 1px rgba(119, 119, 119, 0.5)

  @media screen and (max-width: 850px)
    width: 100%

  @media screen and (max-width: 620px)
    gap: 30px
    width: 80%
    flex-direction: column
</style>