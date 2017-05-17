import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    provider: String,
    title: String,
  },
})
class SocialLink extends Vue {}

export default SocialLink;
