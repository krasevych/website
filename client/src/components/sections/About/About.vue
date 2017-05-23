<script src="./About.js"></script>

<template lang="pug">
  kr-bg-transparent
    .about
      .container
        .row.justify-content-around
          .col-md-5.photo-container
            kt-thumbnail(
            :image="photo",
            rotate="-5"
            )
          kr-bg-white.col-md-5
            h2 I am Roman Krasevych
            p I am a JavaScript Developer AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript
</template>

<style scoped lang="scss">
  h2 {
    text-transform: uppercase;
  }
</style>


