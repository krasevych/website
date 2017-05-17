<script src="./ContactForm.js"></script>

<template lang="pug">
  .contact-form
    h3 Leave a message

    vue-form(
    :state="formstate",
    @submit.prevent="onSubmit",
    role="form",
    )
      .form-group.control-group
        .controls
          validate
            input.form-control(
            v-model="model.name",
            maxlength="15",
            name="name",
            type="text",
            placeholder="Name",
            data-validation-required-message="Please enter your name.",
            aria-invalid="false",
            )

            field-messages(
            name="name",
            show="$touched || $submitted",
            )
              .error-message(slot="maxlength") maxlength

      .form-group.control-group
        .controls
          validate
            input.form-control(
            required,
            v-model="model.email",
            name="email",
            type="email",
            placeholder="Email",
            data-validation-required-message="Please enter your email address.",
            aria-invalid="false",
            )

            field-messages(
            name="email",
            show="$touched || $submitted",
            )
              .error-message(slot="required") Email is required
              .error-message(slot="email") Email is invalid

      .form-group.control-group
        .controls
          validate
            textarea.form-control(
            v-model="model.message",
            name="message",
            maxlength="300",
            placeholder="Message",
            data-validation-required-message="Please enter some message.",
            aria-invalid="false",
            )

            field-messages(
            name="message",
            show="$touched || $submitted",
            )
              .error-message(slot="maxlength") Message must be less than 50 characters

      .form-group.row.justify-content-center.button-container
        button.btn.btn-primary(type="submit") Send message

</template>

<style scoped lang="scss">
  h3 {
    text-align: left;
    margin: 0 0 30px;

    color: #333333;
    font: {
      size: 26px;
      weight: bold;
    }
  }

  textarea.form-control {
    height: 150px;
    resize: none;
  }

  .error-message {
    position: absolute;
    right: 0;
    top: -22px;
    margin: 0;

    color: #DB4F58;
    font-size: 14px;
  }

  .controls {
    position: relative;
  }

  .form-control {
    margin-bottom: 28px;
    height: 38px;

    box-shadow: none;
    border-radius: 5px;
    background-color: #fff;
    border: 0;

    &:focus {
      background-color: #dedede;
    }
  }

  .button-container {
    margin-top: 35px;
  }
</style>
