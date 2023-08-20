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
              <img src="@/assets/icons/icon-vk.png" alt="vk"/>
              Вконтакте
            </a>
          </button>
          <button>
            <a href="https://wa.me/79229519244">
              <img src="@/assets/icons/icon-whatsapp.png" alt="whatsapp"/>
              WhatsApp
            </a>
          </button>
        </div>
      </div>
    </div>
    <div class="application">
      <h3>Обратная связь</h3>
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
  display: flex
  margin: auto
  justify-content: space-evenly

  .contacts,
  .application
    gap: 20px
    display: flex
    flex-direction: column

  .social-networks
    gap: 20px
    display: flex

    .buttons
      gap: 10px
      display: flex
      flex-direction: column

      button
        height: max-content
        border: none
        border-radius: 5px
        background-color: transparent

        &:hover
          &:first-child
            background-color: rgba(30, 136, 199, 0.4)

          &:nth-child(2)
            background-color: rgba(57, 174, 35, 0.4)

      a
        gap: 10px
        display: flex
        color: black
        text-decoration: none

        img
          margin: auto
</style>