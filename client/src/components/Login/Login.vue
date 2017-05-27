<script src="./Login.js"></script>

<template lang="pug">
  .auth
    .container
      .row.justify-content-center.align-items-center
        kr-bg-white.col-md-5.col-xs-12(opacity=".95")
          .content
            h1.text-center Sign In

            vue-form(
            :state="formstate",
            @submit.prevent="onSubmit",
            role="form",
            )
              .form-group.control-group
                .controls
                  validate
                    input.form-control.form-control-lg(
                    required,
                    autocomplete="off",
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
                      kr-input-error-message(slot="required") Email is required
                      kr-input-error-message(slot="email") Email is invalid

              .form-group.control-group
                .controls
                  validate
                    input.form-control.form-control-lg(
                    required,
                    autocomplete="off",
                    v-model="model.password",
                    name="password",
                    type="password",
                    placeholder="Password",
                    data-validation-required-message="Please enter your password.",
                    aria-invalid="false",
                    )

                    field-messages(
                    name="email",
                    show="$touched || $submitted",
                    )
                      kr-input-error-message(slot="required") Password is required

                p.text-right
                  router-link.text-info(to="change") Change password?

              button.btn.btn-lg.btn-primary.pull-xs-right(type="submit") Sign in
</template>

<style scoped lang="scss">
  h1 {
    margin-bottom: 35px;
    font-size: 25px;
    text-transform: uppercase;
  }

  p {
    margin-top: -15px;
  }

  button {
    width: 100%;
    margin-top: 10px;
  }

  .auth, .container, .row {
    height: 100vh;
    min-height: 700px;
  }

  .auth {
    position: relative;
    background: rgba(0, 0, 0, 0.5);
  }

  .controls {
    position: relative;
    margin-bottom: 28px;
  }

  .content {
    padding: 30px 20px;
  }
</style>
