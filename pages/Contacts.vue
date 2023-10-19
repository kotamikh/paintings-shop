<template>
  <div class="contacts-container">
    <div class="contacts">
      <h2>Контакты</h2>
      <div class="tel">
        <p>Телефон:</p>
        <a href='tel:+79229519244'> +7(922)-951-92-44</a>
      </div>
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
    <form class="application" action="#" method="get" enctype="text/plain">
      <h2>Получить обратную связь</h2>
      <div class="input-item">
        <p>Ваше имя:</p>
        <form-input
            type="text"
            maxlength="20"
            placeholder="Имя"
            :validate="nameValidation"
            v-model="applicationData.nameValue"
            onkeyup="this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/gi, '')"
        />
      </div>
      <div class="input-item">
        <p>Мобильный номер:</p>
        <form-input
            type="tel"
            maxlength="12"
            :validate="telValidation"
            placeholder="+71234567890"
            v-model="applicationData.telValue"
            onkeyup="this.value = this.value.replace(/[A-Za-zА-Яа-яЁё]/,'');"/>
      </div>
      <button type="submit" @click="formValidation">Написать сообщение</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import FormInput from "../components/common/FormInput.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Обратная связь | Картины маслом Киров",
  meta: [
    {
      name: "description",
      content: "Картины на заказ Киров. Картины Киров недорого. Купить картину в Кирове."
    },
    {
      name: "robots",
      content: "noindex, nofollow"
    }
  ]
})

const applicationData = reactive({
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
  console.log(applicationData.nameValue, applicationData.telValue)
  if (applicationData.nameValue && applicationData.telValue) {
    console.log(true)
    sendApplication(applicationData.nameValue, applicationData.telValue)
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

    .social-networks,
    .tel
      gap: 10px
      display: flex

      a
        &:hover
          color: var(--seagreen)

      button
        border: none
        border-radius: 5px
        height: fit-content
        background-color: transparent

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