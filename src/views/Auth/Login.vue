<template>
  <div class="login">
    <div class="login__title">
      <span>Авторизация</span>
      <div class="gradient__line"></div>
    </div>
    <div class="login__form">
      <div class="input">
        <input type="text" placeholder="Логин">
      </div>
      <div class="input">
        <input type="password" placeholder="Пароль">
      </div>
      <PlayButton class="login__play-btn" />
      <a href="restore-password" class="restore_password__link">Восстановить пароль</a>
    </div>
  </div>
</template>

<script>
import PlayButton from "@/components/buttons/PlayButton.vue";
export default {
  components: {
    PlayButton
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/Auth/login";
</style>