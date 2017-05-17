<script src="./ImageText.js"></script>

<template lang="pug">
  .image-text(:class="{'bg-color': color}")
    .image-container.row.justify-content-center
      img(
      :src="image",
      )

    h4 {{title}}

    .text-container
      slot
</template>

<style scoped lang="scss">
  h4 {
    text-align: center;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-size: 19px;
    font-weight: normal;
    color: #333;
  }

  .image-text {
    padding: 15px;
  }

  .bg-color {
    background: #f8f8f8;
  }

  .image-container {
    margin-bottom: 20px;

    img {
      height: 40px;
    }
  }

  .text-container {
    text-align: center;
    line-height: 30px;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #777;
  }
</style>


