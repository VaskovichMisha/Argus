<template>
  <div class="news">
    <div class="news__container">
      <NewsBlock />
    </div>
  </div>
</template>

<script>
import GradientButton from "@/components/buttons/GradientButton.vue";
import NewsBlock from "@/components/NewsBlock.vue";
export default {
  components: {
    GradientButton,
    NewsBlock,
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/news";
</style>