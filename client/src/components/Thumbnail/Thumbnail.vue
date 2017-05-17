<script src="./Thumbnail.js"></script>

<template lang="pug">
  img.thumbnail.rounded(
  :src="image",
  :style="{transform: `rotate(${rotate}deg)`}"
  )
</template>

<style scoped lang="scss">
  .thumbnail {
    max-width: 85%;
    box-shadow: 3px 5px 8px rgba(0, 0, 0, .5);
    border: 12px solid #fff;
  }
</style>


