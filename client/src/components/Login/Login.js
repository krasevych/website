import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import BgWhite from 'src/components/backgrounds/BgWhite/BgWhite.vue';
import InputErrorMessage
  from 'src/components/InputErrorMessage/InputErrorMessage.vue';

@Component({
  components: {
    'kr-bg-white': BgWhite,
    'kr-input-error-message': InputErrorMessage,
  },
})
class Login extends Vue {
  formstate = {};

  model = {
    email: '',
    password: '',
  };

  onSubmit() {}
}

export default Login;
