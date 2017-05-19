import Vue from 'vue';
import smoothScroll from 'smoothscroll';
import Component from 'src/plugins/classComponent';
import ScrollListener from 'src/components/ScrollListener/ScrollListener.vue';

@Component({
  props: {
    items: Array,
  },
  components: {
    'kr-scroll-listener': ScrollListener,
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
