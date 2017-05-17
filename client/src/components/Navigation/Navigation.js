import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import ScrollListener from 'src/components/ScrollListener/ScrollListener.vue';

@Component({
  props: {
    items: Array,
  },
  components: {
    'kr-scroll-listener': ScrollListener,
  },
})
class Navigation extends Vue {
  isScrolling = false;
  currentTab = this.$router.history.current.hash.replace('#', '');
}

export default Navigation;
