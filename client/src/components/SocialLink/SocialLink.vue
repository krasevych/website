<script src="./SocialLink.js"></script>

<template lang="pug">
  .social-link
    .icon.fa(:class="`icon-${provider}`")
    h4 {{title}}
</template>

<style scoped lang="scss">
  h4 {
    text-align: center;
    font-size: 17px;
    color: #fff;
  }

  .icon {
    position: relative;
    display: block;
    text-align: center;
    width: 80px;
    height: 80px;
    line-height: 72px;
    margin: 0 auto 30px;

    border-radius: 50%;
    font-size: 32px;
    color: #fff;
    transition: all 0.5s ease-out;
    border: 4px solid #fff;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 7px rgba(255,255,255,.7), 0 0 0 14px rgba(255,255,255,.4), 0 0 0 21px rgba(255,255,255,.3);
      border-color: transparent;
      background: rgba(255,255,255,.7);
      font-size: 42px;

      &.icon-facebook {
        color: #355089;
      }

      &.icon-linkedin {
        color: #0077B5;
      }

      &.icon-github {
        color: #555;
      }
    }
  }
</style>


