import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import Logo from 'src/components/Logo/Logo.vue';
import Navigation from 'src/components/Navigation/Navigation.vue';
import ScrollListener from 'src/components/ScrollListener/ScrollListener.vue';

@Component({
  props: {
    isNavigation: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    'kr-logo': Logo,
    'kr-navigation': Navigation,
    'kr-scroll-listener': ScrollListener,
  },
})
class Header extends Vue {
  isScrolling = false;
  navItems = [
    {
      name: 'Home',
      url: 'home',
    },
    {
      name: 'Services',
      url: 'services',
    },
    {
      name: 'About Me',
      url: 'about',
    },
    {
      name: 'My Skills',
      url: 'skills',
    },
    {
      name: 'Contact',
      url: 'contact',
    },
  ];
}

export default Header;
