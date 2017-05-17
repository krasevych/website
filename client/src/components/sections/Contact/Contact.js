import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import BgIPad from 'src/components/backgrounds/BgIPad/BgIPad.vue';
import ContactForm from 'src/components/ContactForm/ContactForm.vue';

@Component({
  components: {
    'kr-bg-ipad': BgIPad,
    'kr-contact-form': ContactForm,
  },
})
class Contact extends Vue {}

export default Contact;
