<script src="./BgImage.js"></script>

<template lang="pug">
  div.bg-image
    kr-image-slider(:images="images")
</template>

<style scoped lang="scss">
  .bg-image {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>


