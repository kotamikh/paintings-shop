<template>
  <head>
    <title>Связаться | Киров картины маслом</title>
    <meta name="description" content="Картины на заказ Киров. Картины Киров недорого. Купить картину в Кирове"/>
    <meta name="robots" content="noindex, nofollow"/>
  </head>
  <div class="contacts-container">
    <div class="contacts">
      <h2>Контакты</h2>
      <a href='tel:+79229519244'>Телефон: +7(922)-951-92-44</a>
      <div class="social-networks">
        <p>Написать:</p>
          <button>
            <a href="https://wa.me/79229519244" target="_blank" rel="noopener">
              <img src="../src/assets/icons/whatsapp.svg" style="width: 24px" alt="whatsapp"/>
              WhatsApp
            </a>
          </button>
      </div>
    </div>
    <div class="application">
      <h2>Получить обратную связь</h2>
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

  @media screen and (max-width: 620px)
    gap: 30px
    width: 80%
    padding-top: 30px
    flex-direction: column

  @media screen and (max-width: 374px)
    padding-top: 60px

  .contacts,
  .application
    gap: 20px
    display: flex
    flex-direction: column

    @media screen and (max-width: 620px)
      align-items: center

    h2
      align-self: flex-start
      color: var(--header-grey)

  .social-networks
    gap: 10px
    display: flex

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
        display: flex
        align-items: center

        img
          margin: auto

  .application
    button
      color: white
      cursor: pointer
      text-wrap: none
      transition: all 0.1s ease-in-out
      background-color: rgba(119, 119, 119, 0.8)

      border: 0
      margin-top: 10px
      padding: 5px 10px
      border-radius: 5px

      height: auto
      max-width: 350px
      width: fit-content

      @media screen and (max-width: 374px)
        margin-top: 0

      &:hover
        background-color: rgba(108, 140, 121, 0.8)

      &:active
        transform: translateY(3px)

    .input-item
      @media screen and (max-width: 620px)
        min-width: 220px
</style>