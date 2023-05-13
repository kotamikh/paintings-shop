<template>
  <h2>Контакты</h2>

  <div class="form">
    <div class="row">
      <div class="col">
        <div class="input-container">
          <label>Как к вам обращаться</label>
          <input type="text"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="input-container">
          <label>Телефон</label>
          <input type="text"/>
        </div>
      </div>
      <div class="col">
        <div class="input-container">
          <label>Email</label>
          <input type="text"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="input-container">
          <label>Сообщение</label>
          <textarea/>
        </div>
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

<style scoped lang="sass">
h2
  border-top: 4px solid var(--seagreen)

.form
  width: 600px
  margin: auto

  .row
    margin: 10px 0
    display: flex
    gap: 10px

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
  background-color: #6c8c79

  cursor: pointer
</style>