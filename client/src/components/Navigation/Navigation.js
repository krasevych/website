import Vue from 'vue';
import smoothScroll from 'smoothscroll';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    items: Array,
  },
  watch: {
    currentTab(value) {
      this.scrollTo(value);
    },
  },
  created() {
    const { hash } = this.$router.history.current;
    this.currentTab = hash.replace('#', '') || 'home';
  },
  mounted() {
    this.scrollTo(this.currentTab);
  },
})
class Navigation extends Vue {
  isScrolling = false;
  currentTab = '';

  scrollTo(sectionName) {
    const scrollToElement = document.querySelector(`#${sectionName || 'home'}`);
    smoothScroll(scrollToElement);
  }
}

export default Navigation;
