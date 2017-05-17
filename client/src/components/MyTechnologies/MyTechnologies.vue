<script src="./MyTechnologies.js"></script>

<template lang="pug">
  .my-technologies
    .row
      kr-image-text.col-md-3(
      v-for="(technology, i) in technologies",
      :key="technology.title",
      :image="technology.image",
      :title="technology.title",
      :color="calcColor(i+1)"
      ) {{technology.text}}
</template>

<style scoped lang="scss">
  .my-technologies {

  }
</style>


