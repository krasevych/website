<script src="./BgTransparent.js"></script>

<template lang="pug">
  .bg-transparent
    slot
</template>

<style scoped lang="scss">
  .bg-transparent {
    padding: 70px 0;
    border-top: 55px solid rgba(255,255,255,0.3);
    background: rgba(33,33,33,0.5);
    border-bottom: 55px solid rgba(255,255,255,0.3);
  }
</style>


