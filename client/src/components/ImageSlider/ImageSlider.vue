<script src="./ImageSlider.js"></script>

<template lang="pug">
  .image-slider
    transition(name="slide-fade")
      img.full-size(
      :key="currentNumber",
      :src="images[currentNumber]"
      )
</template>

<style scoped lang="scss">
  .full-size {
    min-width: 100vw;
    min-height: 100vh;
  }
</style>
