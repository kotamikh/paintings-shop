<template>
  <div class="contacts-container">
    <div class="contacts-delivery">
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
      <h2>Доставка в другой город</h2>
      <p>Почта России, СДЭК, БайкалСервис</p>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Обратная связь | Картины маслом Киров",
  meta: [
    {
      name: "description",
      content: "Картины на заказ Киров. Авторские картины Киров. Купить картину в Кирове."
    },
    {
      name: "robots",
      content: "noindex, nofollow"
    }
  ]
})
</script>

<style scoped lang="sass">
.contacts-container
  width: 80%
  margin: auto
  display: flex
  justify-content: space-evenly

  .contacts-delivery
    gap: 20px
    display: flex
    flex-direction: column

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
</style>