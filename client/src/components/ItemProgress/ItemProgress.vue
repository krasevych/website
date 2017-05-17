<script src="./ItemProgress.js"></script>

<template lang="pug">
  .item-progress
    h3.row.justify-content-between
      span.col-6 {{title}}
      small.col-6 {{progress}}%

    b-progress(
    v-model="progress",
    variant="primary",
    )
</template>

<style scoped lang="scss">
  h3 {
    span {
      font-weight: normal;
      font-size: 17px;
    }
    small {
      font-size: 12px;
      text-align: right;
    }
  }
  .progress {
    height: 2px;
    background-color: #eee;
    box-shadow: none;
  }
</style>


