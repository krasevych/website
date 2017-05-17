import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    title: String,
    progress: Number,
  },
})
class ItemProgress extends Vue {
}

export default ItemProgress;
