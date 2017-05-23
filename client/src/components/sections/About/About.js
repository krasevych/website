import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import BgTransparent
  from 'src/components/backgrounds/BgTransparent/BgTransparent.vue';
import Thumbnail from 'src/components/Thumbnail/Thumbnail.vue';
import BgWhite from 'src/components/backgrounds/BgWhite/BgWhite.vue';

@Component({
  components: {
    'kr-bg-transparent': BgTransparent,
    'kt-thumbnail': Thumbnail,
    'kr-bg-white': BgWhite,
  },
})
class About extends Vue {
  photo = '/images/bg-image/slider2.jpg';
}

export default About;
