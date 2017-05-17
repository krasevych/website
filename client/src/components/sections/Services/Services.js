import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import SectionHeader from 'src/components/SectionHeader/SectionHeader.vue';
import Octagon from 'src/components/Octagon/Octagon.vue';

@Component({
  components: {
    'kr-section-header': SectionHeader,
    'kr-octagon': Octagon,
  },
})
class Services extends Vue {
  title = 'our services';
  description = 'you could be interested in';
  octagons = [
    {
      image: require('~assets/images/octagon/developer.jpg'),
      title: 'web development',
      content: 'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript',
    },
    {
      image: require('~assets/images/octagon/responsive.jpg'),
      title: 'responsive',
      content: 'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript',
    },
    {
      image: require('~assets/images/octagon/web-design.png'),
      title: 'web design',
      content: 'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript',
    },
    {
      image: require('~assets/images/octagon/seo.jpg'),
      title: 'seo',
      content: 'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript',
    },
  ];
}

export default Services;
