<template>
  <button class="play__button" type="button">
    <span>Играть</span>
    <img src="../../assets/image/play_button.png" alt="">
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.play__button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.play__button span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: 700;
}

.play__button img {
  width: 100%;
}
</style>