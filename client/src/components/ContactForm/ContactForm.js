import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import InputErrorMessage
  from 'src/components/InputErrorMessage/InputErrorMessage.vue';

@Component({
  components: {
    'kr-input-error-message': InputErrorMessage,
  },
})
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
