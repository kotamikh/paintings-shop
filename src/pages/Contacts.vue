<template>
  <div class="contacts-container">
    <h2>Контакты для обратной связи</h2>
    <div class="inputs">
      <p>Ваше имя:</p>
      <input type="text">
      <p>Номер телефона:</p>
      <input type="number">
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
  width: 100%

  .inputs
    display: flex
    align-items: center
    flex-direction: column
</style>