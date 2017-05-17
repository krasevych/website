import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    title: String,
    description: String
  }
})
class SectionHeader extends Vue {
}

export default SectionHeader;
