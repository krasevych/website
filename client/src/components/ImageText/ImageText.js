import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    image: String,
    title: String,
    color: Boolean,
  },
})
class ImageText extends Vue {}

export default ImageText;
