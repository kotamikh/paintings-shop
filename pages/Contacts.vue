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

              <img src="../src/assets/icons/vk.svg" style="width: 25px" alt="vk"/>
              Вконтакте
            </a>
          </button>
          <button>
            <a href="https://wa.me/79229519244">
              <img src="../src/assets/icons/whatsapp.svg" style="width: 24px" alt="whatsapp"/>
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
        <input type="text" placeholder="Имя" v-model="applicationData.nameValue">
      </div>
      <div class="form-item">
        <p>Номер телефона:</p>
        <input type="tel" placeholder="+7(000)-000-00-00" v-model="applicationData.telValue">
      </div>
      <button @click="formValidation">Написать сообщение</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const applicationData = ref({
  nameValue: '',
  telValue: null
})

const regularName = /^\p{L}+$/gu
const regularTel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

const formValidation = () => {
  if (!regularName.test(applicationData.value.nameValue)) {
    alert('Введите имя состоящее из букв')
  } else if (!regularTel.test(applicationData.value.telValue)) {
    alert('Введите номер телефона в формате примера')
  } else if (applicationData.value.nameValue && applicationData.value.telValue) {
    sendApplication(applicationData.value.nameValue, applicationData.value.telValue)
  }
}

const sendApplication = (name, tel) => {
  console.log('Application send! ', 'Имя: ' + name + ', ' + 'Телефон:' + tel)
}

</script>

<style scoped lang="sass">
.contacts-container
  width: 80%
  margin: auto
  display: flex
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
            a
              color: rgb(30, 136, 299)

          &:nth-child(2)
            a
              color: rgb(57, 174, 65)

      a
        gap: 5px
        color: black
        display: flex
        align-items: center
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
        min-width: 200px

    button
      color: white
      cursor: pointer
      text-wrap: none
      background-color: grey
      transition: all 0.1s ease-in-out

      border: 0
      margin-top: 10px
      padding: 5px 10px
      border-radius: 5px

      height: auto
      max-width: 350px
      width: fit-content

      @media screen and (max-width: 620px)
        align-self: center

      @media screen and (max-width: 374px)
        margin-top: 0

      &:hover
        background-color: var(--seagreen)
      &:active
        transform: translateY(3px)

  @media screen and (max-width: 620px)
    gap: 30px
    width: 80%
    padding-top: 30px
    flex-direction: column

  @media screen and (max-width: 374px)
    padding-top: 60px
</style>