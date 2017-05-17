<script src="./ButtonWhite.js"></script>

<template lang="pug">
  .button-white
    slot
</template>

<style scoped lang="scss">
  @import '~bootstrap/scss/_variables.scss';

  .button-white {
    padding: 15px 30px;
    display: inline-block;

    color: #fff;
    border-radius: 3px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    background: rgba(244, 244, 244, 0.3);
    border: 1px solid #fafafa;
    transition: all 0.5s;

    &:hover {
      color: $gray-light;
      background: rgba(244, 244, 244, 0.8);
      font-weight: 700;
    }
  }
</style>
