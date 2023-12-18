<template>
  <div class="select">
    <div
        class="selected"
        @click="openSelect = !openSelect"
    >
      <div>
        <div class="select__title">
          <div class="select__dots"></div>
          <span>{{ selectedServers }}</span>
        </div>
        <img class="select__arrow-img" src="../../assets/svg/arrow_white.svg" alt="">
      </div>
    </div>
    <div v-if="openSelect" class="select__dropdown">
      <div class="select__list">
        <div
            class="select__item"
            v-for="server in servers"
            @click="selectServer(server)"
        >
          <div class="select__dots"></div>
          {{ server.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    servers: Array,
    selectedServers: String,
  },
  emits: ['selectServer'],
  data() {
    return {
      openSelect: false,
    }
  },
  methods: {
    selectServer(server) {
      this.$emit('selectServer', server)
      this.openSelect = false
    },
  },
}
</script>

<style lang="scss">
@import "src/assets/scss/selects/select_change_server";
</style>