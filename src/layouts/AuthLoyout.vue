<template>
  <div class="_wrapper">
    <div class="_container">
      <div class="wrapper__auth">
        <MainTitles />
        <RouterView />
        <img class="auth__img" src="../assets/image/main_image.png" alt="">
      </div>
      <UpperBtn />
    </div>
  </div>
</template>

<script>
import MainTitles from "@/components/MainTitles.vue";
import UpperBtn from "@/components/UpperBtn.vue";

export default {
  data() {
    return {

    }
  },
  components: {
    UpperBtn,
    MainTitles
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/Auth/login";
</style>