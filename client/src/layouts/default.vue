<template lang='pug'>
  .theme-red
    kr-header
    kr-bg-image
    nuxt
</template>

<script>
  import Header from 'src/components/Header/Header.vue';
  import BgImage from 'src/components/backgrounds/BgImage/BgImage.vue';

  export default {
    components: {
      'kr-header': Header,
      'kr-bg-image': BgImage,
    },
  };
</script>

<style>
  html {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  hr {
    width: 50px;
    height: 2px;
  }

  section {
    padding-top: 100px;
    padding-bottom: 120px;
  }
</style>
