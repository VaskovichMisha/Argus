<template>
  <div class="loading">
    <div class="loading__title">
      <div class="loading__title-block">
        <span>Загрузка</span>
        <div class="gradient__line"></div>
      </div>
      <span>Проверяем Ваше соединение с интернетом. Пожалуйста подождите</span>
    </div>
  </div>
</template>

<script>
import GradientButton from "@/components/buttons/GradientButton.vue";

export default {
  components: {GradientButton}

}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/Auth/loading";
</style>