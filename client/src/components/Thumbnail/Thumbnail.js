import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    image: String,
    rotate: String,
  },
})
class Thumbnail extends Vue {}

export default Thumbnail;
