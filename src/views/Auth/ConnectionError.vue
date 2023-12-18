<template>
  <div class="connect-error">
    <div class="connect-error__title">
      <div class="connect-error__title-block">
        <span>Внимание</span>
        <div class="gradient__line"></div>
      </div>
      <span>Отсутствует соединение с интернетом</span>
    </div>
    <GradientButton class="connect-error__btn">
      Проверить
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
@import "src/assets/scss/Auth/connection_error";
</style>