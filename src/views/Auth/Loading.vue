<template>
  <div class="loading">
    <div class="loading__title">
      <div class="loading__title-block">
        <span>Внимание</span>
        <div class="gradient__line"></div>
      </div>
      <span>Отсутствует соединение с интернетом</span>
    </div>

    <GradientButton class="loading__btn">
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
@import "src/assets/scss/Auth/loading";
</style>