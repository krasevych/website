<script src="./Navigation.js"></script>

<template lang="pug">
  b-nav(is-nav-bar)
    b-nav-item(
    v-for="item in items",
    @click="currentTab = item.url",
    :active-class="$style.active",
    :active="currentTab === item.url",
    :class="$style.navItem",
    :key="item.name",
    :href="'#'+item.url",
    )
      span {{item.name}}
</template>

<style module lang="scss">
  @import '~src/css/_variables.scss';

  $delay: .5s;

  .navItem {
    a {
      position: relative;
      padding: 20px 15px !important;
      color: #fff !important;
      transition: padding $delay;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        background: $brand-primary;
        transition: height $delay;
      }

      &:hover, &.active {
        overflow: hidden;
        color: $brand-primary !important;
        transition: color $delay;

        &:before {
          height: 3px;
          transition: height $delay;
        }
      }
    }
  }
</style>
