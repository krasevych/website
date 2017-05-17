<script src="./SocialLinks.js"></script>

<template lang="pug">
  .social-links
    kr-bg-transparent
      .container
        ul.row.justify-content-center
          li.md-col-3(
          v-for="network in networks"
          )
            kr-social-link(
            :provider="network.provider",
            :title="network.title"
            )
</template>

<style scoped lang="scss">
  ul {
    padding: 0;
    margin-bottom: 80px;
  }

  li {
    width: 250px;
    display: block;
  }
</style>


