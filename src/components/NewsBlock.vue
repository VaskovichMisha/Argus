<template>
  <div
    class="news__block"
    v-for="item in 6"
  >
    <h3 class="news__title">Новый животные</h3>
    <p class="news__paragraph">Древнеиндийский трактат, посвящённый теме камы — сферы чувственной, эмоциональной жизни, вожделения и любви к маме Никиты оболонкова и неонацизму.</p>
    <div class="news__inner">
      <GradientButton class="news_btn">
        Подробнее
      </GradientButton>
      <span>Дата побликации: 31 февраля, 25:00</span>
    </div>
  </div>
</template>

<script>
import GradientButton from "@/components/buttons/GradientButton.vue";

export default {
  components: {GradientButton}

}
</script>

<style lang="scss">

</style>