<template>
  <div class="title__block">
    <img class="main__title" src="../assets/image/title.svg" alt="">
    <div class="title__under">
      <span>GAMES</span>
      <div
          @click="changeLanguage = !changeLanguage"
      >
        <img src="../assets/svg/rectangle_gradient.svg" alt="">
        <span
            class="title__lang"
            v-if="!changeLanguage"
        >
          Ru
        </span>
        <span
            class="title__lang"
            v-if="changeLanguage"
        >
          En
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeLanguage: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/titles.scss";
</style>