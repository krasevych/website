<template lang="pug">
  .error-message
    slot
</template>

<style scoped lang="scss">
  .error-message {
    position: absolute;
    left: 0;
    bottom: -20px;
    margin: 0;

    color: #DB4F58;
    font-size: 12px;
  }
</style>
