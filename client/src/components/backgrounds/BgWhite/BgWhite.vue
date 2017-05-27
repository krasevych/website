<template lang="pug">
  .bg-white.rounded(:style="{background: `rgba(255,255,255, ${opacity})`}")
    slot
</template>

<script>
  export default {
    props: {
      opacity: {
        type: String,
        default: '.8'
      }
    }
  }
</script>

<style scoped lang="scss">
  .bg-white {
    padding: 10px 20px;
    color: #333;
    box-shadow: 0 0 20px #aaa;
  }
</style>


