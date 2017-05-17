import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component()
class ScrollListener extends Vue {
  handlerScroll() {
    this.$emit('change', document.body.scrollTop);
  }

  mounted() {
    window.addEventListener('scroll', this.handlerScroll);
  }

  destroyed() {
    window.removeEventListener('scroll', this.handlerScroll);
  }
}

export default ScrollListener;
