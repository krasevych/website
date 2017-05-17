<script src="./Services.js"></script>

<template lang="pug">
  section.services
    .container
      kr-section-header(
      :title="title",
      :description="description"
      )

      .row
        kr-octagon.col-md-3.col-sm-6(
        v-for="(octagon, i) in octagons",
        :key="octagon.title",
        :image="octagon.image",
        :title="octagon.title",
        :content="octagon.content",
        :position="i+1"
        )
</template>

<style scoped lang="scss">
  .services {
    background: #fff;
  }
</style>


