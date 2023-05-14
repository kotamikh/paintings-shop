<template>
  <h2>Контакты</h2>

  <div class="form">
    <div class="row">
      <div class="col">
        <the-input v-model="data.name" label="Как к вам обращаться"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <the-input v-model="data.tel" label="Телефон"/>
      </div>
      <div class="col">
        <the-input v-model="data.email" label="Email"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <the-text-area v-model="data.message" label="Сообщение"/>
      </div>
    </div>
    <div class="row">
      <button class="send">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts"
}
</script>

<script setup>
import { reactive } from "vue";

import TheInput     from "@/components/common/TheInput.vue";
import TheTextArea  from "@/components/common/TheTextArea.vue";

const data = reactive({
  name: '',
  tel: '',
  email: '',
  message: ''
})
</script>

<style scoped lang="sass">
//h2
//  border-top: 4px solid var(--seagreen)

.form
  width: 600px
  margin: auto

  @media screen and (max-width: 550px)
    width: 250px
  @media screen and (max-width: 800px)
    width: 300px

  .row
    margin: 10px 0
    display: flex
    gap: 10px

    &:nth-child(2)
      @media screen and (max-width: 550px)
        flex-direction: column

      @media screen and (max-width: 800px)
        flex-direction: column

    .col
      flex: 1

  .input-container
    display: flex
    flex-direction: column

    label
      color: gray
      padding: 0 0 5px 5px

    input, textarea
      font-size: 15px
      color: #383838
      padding: 10px

      outline: none
      border-radius: 10px
      border: 1px solid rgba(128, 128, 128, 0.54)
      box-shadow: 0 0 2px 1px rgba(34, 60, 80, 0.2) inset

    textarea
      resize: none

.send
  margin-top: 5px

  width: 100%
  height: 30px

  color: white
  border: none
  border-radius: 10px
  background-color: var(--seagreen)

  cursor: pointer
</style>