import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    icon: String,
    title: String,
    text: String,
  },
})
class IconText extends Vue {}

export default IconText;
