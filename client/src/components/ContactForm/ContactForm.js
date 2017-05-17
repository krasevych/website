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
    console.log(111, this.model, this.formstate);
    this.$forceUpdate();
  }
}

export default ContactForm;
