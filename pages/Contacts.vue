<template>
  <head>
    <title>Связаться | Киров картины маслом</title>
    <meta name="description" content="Картины на заказ Киров. Картины Киров недорого. Купить картину в Кирове"/>
  </head>
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
      <div class="input-item">
        <p>Ваше имя:</p>
        <form-input
            :validate="nameValidation"
            type="text"
            placeholder="Имя"
            v-model="applicationData.nameValue"
        />
      </div>
      <div class="input-item">
        <p>Мобильный номер:</p>
        <form-input
            :validate="telValidation"
            type="tel"
            placeholder="+71234567890"
            v-model="applicationData.telValue"/>
      </div>
      <button @click="formValidation">Написать сообщение</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FormInput from "../components/common/FormInput.vue";

const applicationData = ref({
  nameValue: '',
  telValue: null
})

const regularName = /^\p{L}+$/u
const regularTel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

const nameValidation = (val) => {
  return regularName.test(val)
}

const telValidation = (val) => {
  return regularTel.test(val)
}

const formValidation = () => {
  if (applicationData.value.nameValue && applicationData.value.telValue) {
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

  @media screen and (max-width: 770px)
    justify-content: space-between

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
            a
              color: var(--seagreen)

      a
        gap: 5px
        color: black
        display: flex
        align-items: center
        text-decoration: none

        img
          margin: auto

  .application
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