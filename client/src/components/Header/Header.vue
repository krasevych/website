<script src="./Header.js"></script>

<template lang="pug">
  header.header(:class="{'is-scrolling': isScrolling}")
    .container
      kr-scroll-listener(@change="isScrolling = !!$event")
      b-navbar.navbar-container(
      toggleable,
      type="inverse"
      )
        kr-logo
        b-nav-toggle(target="nav_collapse")
        b-collapse#nav_collapse.nav-collapse(is-nav)
          kr-navigation(:items="navItems")
</template>

<style scoped lang="scss">
  .header {
    position: fixed;
    width: 100%;
    z-index: 2;
    transition: background-color .5s;
  }

  .navbar-container {
    padding: 0;
  }

  .is-scrolling {
    background: rgba(0,0,0, .8);
    transition: background-color .5s;
  }

  .nav-collapse {
    justify-content: flex-end;
  }
</style>