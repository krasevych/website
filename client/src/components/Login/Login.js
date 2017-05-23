import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import BgWhite from 'src/components/backgrounds/BgWhite/BgWhite.vue';

@Component({
  components: {
    'kr-bg-white': BgWhite,
  },
})
class Login extends Vue {
  formstate = {};

  model = {
    email: '',
    password: '',
  };

  onSubmit() {
  }
}

export default Login;
