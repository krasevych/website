<script src="./Octagon.js"></script>

<template lang="pug">
  .octagon(:class="'position-' + position")
    .image-container
      img(:src="image" )
      .line-l
      .line-tl
      .line-t
      .line-tr
      .line-r
      .line-br
      .line-b
      .line-bl

    h3.title
      span {{title}}

    .content
      p {{content}}
</template>

<style scoped lang="scss">
  @import '~src/css/_variables.scss';
  @import '~bootstrap/scss/_variables.scss';

  @mixin position($i, $color) {
    .position-#{$i} {

      &:hover {
        [class*='line'] {
          background: $color;
          box-shadow: 0 0 1px $color;
        }
      }

      .title span {
        &:before, &:after {
          background: $color;
        }
      }
    }

  }

  $list: $red, $green, $blue, $orange;
  @for $i from 1 through length($list) {
    @include position($i, nth($list, $i))
  }

  .octagon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  [class*='line'] {
    width: 65px;
    height: 7px;
    position: absolute;

    border-radius: 2px;
    background: #ececec;
    transition: all 0.5s;
    box-shadow: 0 0 1px #888;
  }

  .line-t {
    top: 0;
    left: 45px;
  }

  .line-b {
    bottom: 0;
    left: 45px;
  }

  .line-tr {
    top: 22px;
    right: -7px;
    transform: rotate(45deg)
  }

  .line-tl {
    top: 22px;
    left: -7px;
    transform: rotate(-45deg)
  }

  .line-r {
    top: 74px;
    right: -29px;
    transform: rotate(90deg)
  }

  .line-l {
    top: 74px;
    left: -29px;
    transform: rotate(90deg)
  }

  .line-br {
    bottom: 22px;
    right: -8px;
    transform: rotate(-45deg)
  }

  .line-bl {
    bottom: 22px;
    left: -8px;
    transform: rotate(45deg)
  }

  .image-container {
    width: 156px;
    height: 156px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      width: 75%;
    }
  }

  .title {
    margin: 20px 0 10px;
    text-align: center;

    color: #555;
    font: 18px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: capitalize;

    span {
      position: relative;
      display: inline-block;

      &:before, &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: 2px;
        margin-top: 1px;
      }

      &:after {
        left: 20%;
        width: 60%;
        margin-top: 6px;
      }
    }
  }

  .content {
    margin: 15px 0 0;
    text-align: justify;
    color: #888;
    font: 14px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
