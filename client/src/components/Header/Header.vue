<script src="./Header.js"></script>

<template lang="pug">
  header.header(:class="{'is-scrolling': isScrolling}")
    .container
      kr-scroll-listener(@change="isScrolling = !!$event")
      b-navbar(
      toggleable,
      :type="isScrolling ? 'inverse' :''",
      )
        kr-logo
        b-nav-toggle(target="nav_collapse")
        b-collapse#nav_collapse.nav-collapse(
        is-nav,
        v-if="isNavigation",
        )
          kr-navigation(:items="navItems")
</template>

<style scoped lang="scss">
  $delay: .5s;

  .header {
    position: fixed;
    width: 100%;
    z-index: 2;
    transition: background-color $delay;
  }

  .is-scrolling {
    background: rgba(0, 0, 0, .8);
    transition: background-color $delay;
  }

  .navbar {
    padding: {
      top: 20px;
      bottom: 20px;
    }
    transition: all $delay;
  }

  .navbar-inverse {
    padding: {
      top: 0;
      bottom: 0;
    }

    color: #fff;
    transition: all $delay;
  }

  .navbar-brand {
    color: #fff;
  }

  .nav-collapse {
    justify-content: flex-end;
  }
</style>
