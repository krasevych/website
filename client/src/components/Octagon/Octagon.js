import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    image: String,
    title: String,
    content: String,
    position: Number,
  },
})
class Octagon extends Vue {}

export default Octagon;
