<script src="./Contact.js"></script>

<template lang="pug">
  .contact
    .container
      .row.justify-content-center
        .bg-ipad-container
          kr-bg-ipad
            .form-container
              kr-contact-form

</template>

<style scoped lang="scss">
  .contact {
    padding-bottom: 100px;
    background: #fff;
  }

  .bg-ipad-container {
    margin-top: -150px;
    box-shadow: 0 10px 100px 0 rgba(0, 0, 0, 0.05);
  }

  .form-container {
    padding: 30px 35px;
    width: 100%;
    height: 100%;
    background: #ebebeb;
  }
</style>


