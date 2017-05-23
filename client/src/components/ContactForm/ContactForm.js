import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component()
class ContactForm extends Vue {
  formstate = {};

  model = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    this.$forceUpdate();
  }
}

export default ContactForm;
