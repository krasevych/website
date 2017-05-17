<script src="./Home.js"></script>

<template lang="pug">
  section.home
    .container
      .header-content-inner
        h1 Create awesome landing page for your Businesses
        hr.bg-primary
        p Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!
        kr-button-white let's start
</template>

<style scoped lang="scss">
  .home {
    height: 100vh;
    min-height: 700px;
    position: relative;

    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
  }

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .header-content-inner {
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      color: #fff;
      font-size: 50px;
      font-weight: 700;
      text-transform: uppercase;
    }

    hr {
      width: 50px;
      margin: 25px 0;
    }

    p {
      margin-bottom: 50px;
      font-size: 18px;
      max-width: 80%;
      color: rgba(255,255,255, .8);
    }
  }
</style>


