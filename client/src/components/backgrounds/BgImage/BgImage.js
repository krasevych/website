import Vue from 'vue';
import range from 'lodash/range';
import Component from 'src/plugins/classComponent';
import ImageSlider from 'src/components/ImageSlider/ImageSlider.vue';

@Component({
  components: {
    'kr-image-slider': ImageSlider,
  },
})
class BgImage extends Vue {
  images = range(1, 5).map(num => `/images/bg-image/slider${num}.jpg`);
}

export default BgImage;
