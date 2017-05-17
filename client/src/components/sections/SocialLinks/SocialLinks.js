import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import BgTransparent from 'src/components/backgrounds/BgTransparent/BgTransparent.vue';
import SocialLink from 'src/components/SocialLink/SocialLink.vue';

@Component({
  components: {
    'kr-bg-transparent': BgTransparent,
    'kr-social-link': SocialLink,
  },
})
class SocialLinks extends Vue {
  networks = [
    {
      provider: 'facebook',
      title: 'Add me on Facebook',
      link: 'https://www.facebook.com/roman.krasevych',
    },
    {
      provider: 'github',
      title: 'Find me on Github',
      link: 'https://github.com/krasevych',
    },
    {
      provider: 'linkedin',
      title: 'Add me on Linkedin',
      link: 'https://www.linkedin.com/in/roman-krasevych',
    },
  ];
}

export default SocialLinks;
