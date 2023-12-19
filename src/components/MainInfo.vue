<template>
  <div class="main-info">
    <img class="main-info__img" src="../assets/image/main_image.png" alt="">
    <div class="main-info__container">
      <div class="player__info">
        <div class="player__title">
          <img class="player__skin" src="../assets/image/skin.png" alt="">
          <span class="player__name">Alter Ego</span>
        </div>
        <div class="player__state">
          <span>Баланс: 2000 USDT</span>
          <span>Привилегия: Администратор</span>
        </div>
      </div>


      <div v-if="!openLoad" class="server-change">
        <SelectChangeServer
          :servers="servers"
          :selectedServers="selectedServers"
          @selectServer="selectServer"
        />
        <div class="player__buttons">
          <div @click="openLoad = true">
            <PlayButton class="player__play-btn" />
          </div>
          <div class="additional__btns">
            <GradientButton class="additional__btn">
              СМИ
            </GradientButton>
            <GradientButton class="additional__btn">
              Наш сайт
            </GradientButton>
          </div>
        </div>
      </div>

      <div v-if="openLoad" class="load-game">
        <circle-progress
            :size="160"
            :empty-color="'#1A1F34'"
            :border-width="6"
            :border-bg-width="6"
            :percent="85"
            :viewport="true"
            :show-percent="true"
            :is-gradient="true"
            :gradient="{
              angle: 137,
              startColor: '#00457E',
              stopColor: '#806491'
            }"
        />
        <div class="load-game__info">
          <span>Загрузка...</span>
          <div>Minecraft launcher.exe</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SelectChangeServer from "@/components/selects/SelectChangeServer.vue";
import PlayButton from "@/components/buttons/PlayButton.vue";
import GradientButton from "@/components/buttons/GradientButton.vue";

import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
export default {
  data() {
    return {
      openLoad: false,
      selectedServers: 'Server 1',
      servers: [
        { name: 'Server 1', id: 0 },
        { name: 'Server 2', id: 1 },
        { name: 'Server 3', id: 2 },
        { name: 'Server 4', id: 3 },
        { name: 'Server 5', id: 4 },
      ]
    }
  },
  methods: {
    selectServer(server) {
      this.selectedServers = server.name
    }
  },
  components: {
    GradientButton,
    SelectChangeServer,
    PlayButton,
    CircleProgress,
  }
}
</script>

<style lang="scss">

.vue3-circular-progressbar .current-counter {
  font-size: 32px;
  font-weight: 700;
}
@import "src/assets/scss/main_info";
</style>