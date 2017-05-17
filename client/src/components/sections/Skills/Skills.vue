<script src="./Skills.js"></script>

<template lang="pug">
  section.about
    .container
      kr-section-header(
      :title="title",
      :description="description"
      )

      .row.justify-content-between.progress-container
        .col-md-6
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corrupti, quibusdam assumenda harum, error atque labore minus.
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corrupti, quibusdam assumenda harum, error atque labore minus.

        .col-md-5
          kr-item-progress.skill-progress(
          v-for="skill in skills",
          :key="skill.title",
          :title="skill.title",
          :progress="skill.progress",
          )

      .row.justify-content-center
        span.my-technologies-title Technologies that I use

      .my-technologies-content
        kr-my-technologies
</template>

<style scoped lang="scss">
  .about {
    background: #fff;
  }

  .progress-container {
    margin-bottom: 50px;
  }

  .skill-progress {
    margin-bottom: 25px;
  }

  .my-technologies-title {
    position: relative;
    margin-bottom: 50px;
    padding: 5px 1px;

    font-size: 20px;
    color: #333;
    text-transform: uppercase;

    &:after, &:before {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 50%;
      height: 1px;
      background-color: #ccc;
      transform: rotate(4deg);
    }

    &:before {
      left: 50%;
      transform: rotate(-4deg);
    }
  }
</style>


