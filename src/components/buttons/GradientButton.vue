<template>
  <div class="gradient__btn">
    <button>
      <slot />
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.gradient__btn {
  width: fit-content;
  background: linear-gradient(to right, #00457E 0%, #806491 68.75%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradient__btn button {
  width: calc(100% - 4px);
  background: linear-gradient(111.45deg, #17181C 0%, #1A1F34 82.7%);
  padding: 4px 40px;
  font-family: 'Gilroy', sans-serif;
  line-height: 100%;
  color: white;
  text-align: center;
}
</style>