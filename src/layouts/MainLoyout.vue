<template>
  <div class="_wrapper">
    <div class="_container">
      <div class="wrapper__main">
        <div class="main">
          <div>
            <MainTitles />
            <News></News>
          </div>
          <MainInfo />
        </div>
      </div>
      <UpperBtn />
    </div>
  </div>
</template>

<script>
import MainTitles from "@/components/MainTitles.vue";
import News from "@/components/News.vue";
import MainInfo from "@/components/MainInfo.vue";
import UpperBtn from "@/components/UpperBtn.vue";

export default {
  data() {
    return {

    }
  },
  components: {
    MainTitles,
    News,
    MainInfo,
    UpperBtn
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 130px;
}
</style>