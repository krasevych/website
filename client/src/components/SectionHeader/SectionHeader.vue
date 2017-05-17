<script src="./SectionHeader.js"></script>

<template lang="pug">
  .header
    h2.title {{title}}
    .description {{description}}
</template>

<style scoped lang="scss">
  .header {
    margin-bottom: 70px;
    text-align: center;

    .title {
      margin-bottom: 10px;
      color: #565656;
      font-size: 32px;
      font-weight: normal;
      text-transform: uppercase;
    }

    .description {
      color: #aaa;
      font-size: 16px;

      &:first-letter {
        text-transform: capitalize;
      }
    }
  }
</style>


