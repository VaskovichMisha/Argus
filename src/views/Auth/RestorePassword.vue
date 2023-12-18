<template>
  <div class="res_pass">
    <div class="res_pass__title">
      <div class="res_pass__title-block">
        <span>Восстановление пароля</span>
        <div class="gradient__line"></div>
      </div>
      <span>На почту Вам придет ссылка для сброса пароля</span>
    </div>
    <div class="input res_pass__input">
      <input type="email" placeholder="Введите Email">
    </div>
    <GradientButton class="res_pass__btn">
      Восстановить
    </GradientButton>
  </div>
</template>

<script>
import GradientButton from "@/components/buttons/GradientButton.vue";
export default {
  components: {
    GradientButton
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/Auth/restore_password";
</style>